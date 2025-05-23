"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Save } from "lucide-react"
import StepNavigation from "@/components/create-village/step-navigation"
import LandDetailsStep from "@/components/create-village/land-details-step"
import EconomicsStep from "@/components/create-village/economics-step"
import ModuleSelectionStep from "@/components/create-village/module-selection-step"
import ModuleConfigurationStep from "@/components/create-village/module-configuration-step"
import SummaryStep from "@/components/create-village/summary-step"
import { useToast } from "@/hooks/use-toast"

export default function CreateVillagePage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { toast } = useToast()

  // Parse prefilled data from URL parameters
  const prefillData = {
    title: searchParams.get("title") || "",
    location: searchParams.get("location") || "",
    governance: searchParams.get("governance") || "",
    natureApproach: searchParams.get("natureApproach") || "",
  }

  // Parse statistics if available
  const statsParam = searchParams.get("stats")
  const stats = statsParam ? JSON.parse(decodeURIComponent(statsParam)) : null

  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Basic details
    title: prefillData.title,
    location: prefillData.location,
    description: "",
    totalCost: "",

    // Economics
    plots: "",
    tokensPerPlot: "",
    ownershipRatio: "",
    economicNotes: "",

    // Selected modules
    selectedModules:
      prefillData.governance || prefillData.natureApproach
        ? [...(prefillData.governance ? ["governance"] : []), ...(prefillData.natureApproach ? ["nature"] : [])]
        : [],

    // Module configurations
    moduleConfigurations: {
      governance: {
        model: prefillData.governance || "",
        details: "",
        reimbursement: "",
        operations: "",
      },
      nature: {
        approach: prefillData.natureApproach || "",
        details: "",
        specialAgents: "",
        sustainabilityGoals: "",
      },
    },
  })

  // Define steps
  const steps = [
    { id: 1, name: "Land Details" },
    { id: 2, name: "Economics" },
    { id: 3, name: "Module Selection" },
    { id: 4, name: "Module Configuration" },
    { id: 5, name: "Summary" },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleModuleConfigChange = (moduleId, field, value) => {
    setFormData((prev) => ({
      ...prev,
      moduleConfigurations: {
        ...prev.moduleConfigurations,
        [moduleId]: {
          ...prev.moduleConfigurations[moduleId],
          [field]: value,
        },
      },
    }))
  }

  const handleModuleSelection = (moduleId, selected) => {
    setFormData((prev) => {
      const selectedModules = selected
        ? [...prev.selectedModules, moduleId]
        : prev.selectedModules.filter((id) => id !== moduleId)

      return {
        ...prev,
        selectedModules,
      }
    })
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = () => {
    toast({
      title: "Village proposal submitted!",
      description: "Your village proposal has been successfully created.",
    })
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-[#f5f3e8]">
      <header className="bg-[#2c5530] text-white p-4 shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center">
            <Button variant="ghost" className="text-white mr-4 hover:bg-[#1e3d20]" onClick={() => router.push("/")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-2xl font-bold">Create New Village Proposal</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <StepNavigation steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />

        <div className="mt-8 bg-white rounded-lg shadow-md p-6 border border-gray-200">
          {currentStep === 1 && (
            <LandDetailsStep
              formData={formData}
              handleInputChange={handleInputChange}
              prefillData={prefillData}
              stats={stats}
            />
          )}

          {currentStep === 2 && <EconomicsStep formData={formData} handleInputChange={handleInputChange} />}

          {currentStep === 3 && (
            <ModuleSelectionStep
              selectedModules={formData.selectedModules}
              handleModuleSelection={handleModuleSelection}
            />
          )}

          {currentStep === 4 && (
            <ModuleConfigurationStep
              selectedModules={formData.selectedModules}
              moduleConfigurations={formData.moduleConfigurations}
              handleModuleConfigChange={handleModuleConfigChange}
              prefillData={prefillData}
              stats={stats}
            />
          )}

          {currentStep === 5 && <SummaryStep formData={formData} />}

          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous Step
            </Button>

            {currentStep < steps.length ? (
              <Button onClick={nextStep} className="bg-[#2c5530] hover:bg-[#1e3d20]">
                Next Step
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-[#d4a762] hover:bg-[#c69752] text-black">
                <Save className="mr-2 h-4 w-4" />
                Submit Proposal
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
