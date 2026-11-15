import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, Clock, ShieldCheck, Gem, X } from "lucide-react"
import { Link } from "react-router-dom"
import { PassportStamp } from "./PassportStamp"
import { geoEquirectangular, geoPath } from "d3-geo"
import worldData from "../assets/world-110m.json"
import { destinationsData } from "../lib/destinations"
import type { Destination } from "../lib/destinations"

const hoverColors: Record<string, string> = {
  CA: "#f87171", // red-400
  GB: "#fde047", // yellow-300
  AE: "#c084fc", // purple-400
  AU: "#22d3ee", // cyan-400
  NZ: "#60a5fa", // blue-400
  FR: "#4ade80", // green-400
  FI: "#4ade80",
  IT: "#4ade80",
  IE: "#4ade80",
  ES: "#4ade80",
  HU: "#4ade80",
  NL: "#4ade80",
  DE: "#4ade80",
  MT: "#4ade80",
  LV: "#4ade80",
}

const destinationRoutes: Record<string, string> = {
  CA: "/destinations/canada",
  GB: "/destinations/uk",
  AE: "/destinations/dubai",
  AU: "/destinations/australia",
  NZ: "/destinations/new-zealand",
  FR: "/destinations/europe/france",
  FI: "/destinations/europe/finland",
  IT: "/destinations/europe/italy",
  IE: "/destinations/europe/ireland",
  ES: "/destinations/europe/spain",
  HU: "/destinations/europe/hungary",
  NL: "/destinations/europe/netherlands",
  DE: "/destinations/europe/germany",
  MT: "/destinations/europe/malta",
  LV: "/destinations/europe/latvia",
}

export const InteractiveWorldMap = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [stampCountry, setStampCountry] = useState<Destination | null>(null)

  const activeCountry = selectedId ? destinationsData[selectedId] : null

  const handleSelectCountry = (id: string) => {
    setSelectedId(id === selectedId ? null : id)
  }

  const triggerStamp = (countryData: Destination) => {
    setStampCountry(countryData)
  }

  // Set up d3-geo projection (Equirectangular fits 1000x600 beautifully)
  const projection = useMemo(() => {
    return geoEquirectangular()
      .scale(150)
      .translate([485, 305])
  }, [])

  const pathGenerator = useMemo(() => {
    return geoPath().projection(projection)
  }, [projection])

  // Map features to paths and filter out empty ones
  const mapPaths = useMemo(() => {
    return (worldData.features as Array<{
      type: string
      geometry: unknown
      properties: {
        name: string
        iso_a2: string
        iso_a3: string
      }
    }>).map((feature) => {
      const iso2 = feature.properties.iso_a2
      const name = feature.properties.name
      const d = pathGenerator(feature as Parameters<typeof pathGenerator>[0])
      if (!d) return null

      const isInteractive = iso2 && destinationsData[iso2] !== undefined

      return {
        iso2,
        name,
        d,
        feature,
        isInteractive,
      }
    }).filter((item): item is NonNullable<typeof item> => item !== null)
  }, [pathGenerator])

  return (
    <div className="w-full bg-[#fafafa] rounded-[40px] p-8 lg:p-12 border border-[#e5e5e5]">
      <div className="grid grid-cols-12 gap-8 items-center">
        {/* Map Column */}
        <div className="col-span-12 lg:col-span-8 flex flex-col items-center">
          <div className="w-full aspect-[16/10] relative">
            <svg
              viewBox="0 0 1000 600"
              className="w-full h-full stroke-white stroke-[0.8]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Grid Lines */}
              <path d="M50 400 L950 400" stroke="#f0f0f0" strokeDasharray="5,5" />
              <path d="M50 200 L950 200" stroke="#f0f0f0" strokeDasharray="5,5" />

              {/* 1. Render all non-interactive country paths */}
              <g className="fill-[#e0e2e6]">
                {mapPaths.map(({ iso2, name, d, isInteractive }) => {
                  if (isInteractive) return null
                  return (
                    <path
                      key={`bg-${name}-${iso2}`}
                      d={d}
                      className="transition-colors duration-200"
                    />
                  )
                })}
              </g>

              {/* 2. Render all interactive country paths */}
              <g>
                {mapPaths.map(({ iso2, d, isInteractive }) => {
                  if (!isInteractive || !iso2) return null
                  const destination = destinationsData[iso2]
                  const isSelected = selectedId === iso2
                  const hoverColor = hoverColors[iso2] || "#4ade80"

                  return (
                    <motion.path
                      key={`interactive-${iso2}`}
                      d={d}
                      onClick={() => handleSelectCountry(iso2)}
                      className="cursor-pointer stroke-white stroke-[1.2] transition-colors duration-200 focus:outline-none"
                      style={{
                        fill: isSelected ? destination.color : "#c7cbd2",
                      }}
                      whileHover={{
                        fill: hoverColor,
                        stroke: destination.stampColor,
                        strokeWidth: 1.5,
                      }}
                      tabIndex={0}
                      aria-label={`Explore visa information for ${destination.name}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault()
                          handleSelectCountry(iso2)
                        }
                      }}
                    />
                  )
                })}
              </g>

              {/* 3. Render pulsing indicators/markers at centroids */}
              <g>
                {mapPaths.map(({ iso2, feature, isInteractive }) => {
                  if (!isInteractive || !iso2) return null
                  const destination = destinationsData[iso2]
                  const centroid = pathGenerator.centroid(feature as Parameters<typeof pathGenerator.centroid>[0])
                  if (!centroid || isNaN(centroid[0]) || isNaN(centroid[1])) return null

                  const [cx, cy] = centroid
                  const isSelected = selectedId === iso2

                  return (
                    <g
                      key={`marker-${iso2}`}
                      transform={`translate(${cx}, ${cy})`}
                      onClick={() => handleSelectCountry(iso2)}
                      className="cursor-pointer group"
                    >
                      {/* Pulse ring */}
                      <motion.circle
                        r={isSelected ? 10 : 7}
                        className="fill-none stroke-current opacity-70"
                        style={{ color: destination.color }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 0.2, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      {/* Center dot */}
                      <circle
                        r={isSelected ? 4.5 : 3.5}
                        className="fill-current stroke-white stroke-[0.8]"
                        style={{ color: destination.color }}
                      />
                      {/* Larger invisible overlay for easy clicking */}
                      <circle
                        r={18}
                        className="fill-transparent"
                        tabIndex={-1}
                      />
                    </g>
                  )
                })}
              </g>
            </svg>

            {/* Click instructions */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-mono text-[#777] uppercase pointer-events-none">
              <Globe className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "10s" }} />
              Click marked countries to explore pathways
            </div>
          </div>
        </div>

        {/* Info Column */}
        <div className="col-span-12 lg:col-span-4 min-h-[380px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {activeCountry ? (
              <motion.div
                key={activeCountry.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 shadow-sm border border-[#eee]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span
                      className="text-xs uppercase font-mono tracking-wider font-bold"
                      style={{ color: activeCountry.color }}
                    >
                      {activeCountry.programName}
                    </span>
                    <h3 className="text-2xl font-semibold text-[#202020] mt-1 font-figtree">
                      {activeCountry.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-sm leading-relaxed text-[#666] mb-6 font-figtree">
                  {activeCountry.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6 font-figtree">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-mono">EST. TUITION / YR</span>
                    <span className="text-sm lg:text-base font-bold text-[#202020] flex items-center gap-1 font-figtree">
                      <Gem className="w-4 h-4 text-amber-500" />
                      {activeCountry.investment}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-mono">PROCESSING SPEED</span>
                    <span className="text-sm lg:text-base font-bold text-[#202020] flex items-center gap-1 font-figtree">
                      <Clock className="w-4 h-4 text-[#156d95]" />
                      {activeCountry.time}
                    </span>
                  </div>
                </div>

                <div className="mb-6 font-figtree">
                  <span className="text-[10px] text-gray-400 font-mono block mb-2">BENEFITS INCLUDE</span>
                  <ul className="space-y-2">
                    {activeCountry.benefits.map((benefit, i) => (
                      <li key={i} className="text-xs text-[#444] flex items-start gap-2 leading-tight font-figtree">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#16b364] flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore & Visa Certificate stamp action group */}
                <div className="space-y-3 font-figtree">
                  <Link
                    to={destinationRoutes[activeCountry.id] || "#"}
                    className="block text-center w-full bg-white border border-gray-200 text-gray-700 hover:text-[#156d95] hover:border-[#156d95] py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 font-figtree"
                  >
                    Explore {activeCountry.name} Pathways
                  </Link>

                  <button
                    onClick={() => triggerStamp(activeCountry)}
                    className="w-full bg-[#156d95] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md font-figtree"
                  >
                    Generate Entry Stamp
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center text-center p-6 border border-dashed border-[#ddd] rounded-3xl"
              >
                <Globe className="w-12 h-12 text-gray-300 mb-3" />
                <h4 className="text-lg font-medium text-gray-600 font-figtree">No Country Selected</h4>
                <p className="text-sm text-gray-400 max-w-[200px] mt-1 font-figtree">
                  Select any highlighted country on the map to display premium visa program details.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Stamp Animation Modal overlay */}
      <AnimatePresence>
        {stampCountry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm pointer-events-auto"
            onClick={() => setStampCountry(null)}
          >
            <div
              className="bg-white p-8 rounded-[40px] shadow-2xl relative flex flex-col items-center max-w-sm w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setStampCountry(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4 text-center">
                <h4 className="text-lg font-bold text-gray-800 font-figtree">PASSPORT APPROVED</h4>
                <p className="text-xs text-gray-500 font-mono mt-1">BIOMETRICS REGISTERED</p>
              </div>

              <PassportStamp
                country={stampCountry.name}
                visaType={stampCountry.programName}
                color={stampCountry.stampColor}
              />

              <p className="text-xs text-gray-400 text-center font-mono mt-6">
                Click anywhere to close this visa certificate.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
