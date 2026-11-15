import { motion } from "framer-motion"

interface AssessmentProgressProps {
  currentStep: number
}

const STEPS = [
  { id: 1, label: "Pathway" },
  { id: 2, label: "Destination" },
  { id: 3, label: "Profile" },
  { id: 4, label: "Timeline" },
  { id: 5, label: "Contact" },
]

export const AssessmentProgress: React.FC<AssessmentProgressProps> = ({ currentStep }) => {
  // Bind step to bounds [1, 5] for the progress tracker
  const normalizedStep = Math.min(Math.max(currentStep, 1), 5)

  return (
    <div className="w-full space-y-4 mb-8 font-figtree select-none">
      <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase tracking-wider">
        <span className="text-[#156d95] bg-[#156d95]/15 px-3 py-1 rounded-full">
          Initial Pathway Assessment
        </span>
        <span className="text-gray-400">
          Step {normalizedStep} of 5
        </span>
      </div>

      {/* Progress Bar & Dots */}
      <div className="relative pt-2 pb-6">
        {/* Connector line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-150 -translate-y-1/2 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#156d95]"
            initial={{ width: "0%" }}
            animate={{ width: `${((normalizedStep - 1) / (STEPS.length - 1)) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Dots row */}
        <div className="relative flex justify-between items-center z-10">
          {STEPS.map((step) => {
            const isCompleted = step.id < normalizedStep
            const isActive = step.id === normalizedStep
            return (
              <div key={step.id} className="flex flex-col items-center gap-2">
                <motion.div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border text-[10px] font-bold font-mono transition-all duration-300 ${
                    isActive
                      ? "border-[#156d95] bg-white text-[#156d95] shadow-[0_0_10px_rgba(21,109,149,0.2)]"
                      : isCompleted
                      ? "border-[#156d95] bg-[#156d95] text-white"
                      : "border-gray-200 bg-white text-gray-400"
                  }`}
                  animate={{
                    scale: isActive ? 1.15 : 1,
                  }}
                >
                  {isCompleted ? "✓" : step.id}
                </motion.div>
                <span
                  className={`text-[10px] font-mono uppercase font-bold tracking-wider hidden sm:block ${
                    isActive ? "text-[#156d95]" : isCompleted ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
