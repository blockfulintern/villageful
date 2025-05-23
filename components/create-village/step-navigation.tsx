"use client"

import { Check } from "lucide-react"

export default function StepNavigation({ steps, currentStep, setCurrentStep }) {
  return (
    <div className="relative">
      <div className="flex justify-between mb-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex flex-col items-center ${step.id <= currentStep ? "text-[#2c5530]" : "text-gray-400"}`}
            onClick={() => {
              // Only allow navigating to completed steps or the current step + 1
              if (step.id <= currentStep + 1) {
                setCurrentStep(step.id)
                window.scrollTo(0, 0)
              }
            }}
            style={{ cursor: step.id <= currentStep + 1 ? "pointer" : "default" }}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 
                ${
                  step.id < currentStep
                    ? "bg-[#2c5530] text-white"
                    : step.id === currentStep
                      ? "border-2 border-[#2c5530] text-[#2c5530]"
                      : "border-2 border-gray-300 text-gray-400"
                }`}
            >
              {step.id < currentStep ? <Check className="h-5 w-5" /> : step.id}
            </div>
            <span className="text-sm font-medium">{step.name}</span>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10">
        <div
          className="h-full bg-[#2c5530] transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}
