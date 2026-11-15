import { motion } from "framer-motion"

type PassportStampProps = {
  country: string
  visaType: string
  date?: string
  status?: string
  color?: string
  onComplete?: () => void
}

export const PassportStamp = ({
  country,
  visaType,
  date = new Date().toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }).toUpperCase(),
  status = "APPROVED",
  color = "#156d95",
  onComplete,
}: PassportStampProps) => {
  return (
    <div className="flex items-center justify-center p-6 select-none pointer-events-none">
      <motion.div
        initial={{ scale: 3.5, rotate: 25, opacity: 0, filter: "blur(4px)" }}
        animate={{
          scale: 1,
          rotate: -6,
          opacity: 0.85,
          filter: "blur(0px)",
        }}
        transition={{
          type: "spring",
          damping: 14,
          stiffness: 120,
          mass: 1.2,
        }}
        onAnimationComplete={onComplete}
        className="relative border-4 border-double rounded-xl px-6 py-4 flex flex-col items-center justify-center font-mono text-center max-w-[280px]"
        style={{
          borderColor: color,
          color: color,
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          boxShadow: `0 0 0 1px ${color}10, inset 0 0 0 1px ${color}10`,
        }}
      >
        {/* Distressed ink texture simulation using SVG filter */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:8px_8px] rounded-lg" />
        
        <span className="text-xs font-bold tracking-widest uppercase mb-1 opacity-70">
          ★ RESIDENCY PERMIT ★
        </span>
        
        <h3 className="text-2xl font-black tracking-wider uppercase my-1 font-serif">
          {country}
        </h3>
        
        <div className="w-full border-t border-dashed my-2 opacity-50" style={{ borderColor: color }} />
        
        <span className="text-sm font-semibold tracking-wide uppercase mb-1">
          {visaType}
        </span>
        
        <span className="text-[10px] tracking-widest uppercase opacity-75 font-sans mb-1">
          ISSUE DATE: {date}
        </span>
        
        <div className="border border-solid px-3 py-1 mt-2 text-xs font-black tracking-widest rounded uppercase animate-pulse border-current">
          {status}
        </div>
      </motion.div>
    </div>
  )
}
