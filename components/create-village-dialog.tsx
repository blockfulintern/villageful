"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Check, MapPin, Coins, Gavel, Leaf } from "lucide-react"

export default function CreateVillageDialog({
  children,
  prefillData,
}: {
  children: React.ReactNode
  prefillData?: {
    title?: string
    location?: string
    governance?: string
    natureApproach?: string
    stats?: {
      location?: { count: number; percentage: number }
      governance?: { count: number; percentage: number }
      natureApproach?: { count: number; percentage: number }
      suggestion?: string
    }
  }
}) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)
  const totalSteps = 4

  const [formData, setFormData] = useState({
    title: prefillData?.title || "",
    location: prefillData?.location || "",
    totalCost: "",
    plots: "",
    tokensPerPlot: "",
    ownershipRatio: "",
    governanceModel: prefillData?.governance || "",
    governanceDetails: "",
    reimbursement: "",
    operations: "",
    natureApproach: prefillData?.natureApproach || "",
    natureDetails: "",
    specialAgents: "",
    sustainabilityGoals: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSelectChange = (value: string, id: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = () => {
    // Handle form submission
    setOpen(false)
    setStep(1)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Village Proposal</DialogTitle>
          <DialogDescription>Define your village proposal in a few simple steps.</DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <div className="flex justify-between mb-8">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`flex flex-col items-center ${i + 1 <= step ? "text-[#2c5530]" : "text-gray-400"}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 
                    ${
                      i + 1 < step
                        ? "bg-[#2c5530] text-white"
                        : i + 1 === step
                          ? "border-2 border-[#2c5530] text-[#2c5530]"
                          : "border-2 border-gray-300 text-gray-400"
                    }`}
                >
                  {i + 1 < step ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span className="text-xs">
                  {i === 0 ? "Land Details" : i === 1 ? "Economics" : i === 2 ? "Governance" : "Nature"}
                </span>
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-[#2c5530]" />
                Land Details
              </h3>

              <div className="space-y-2">
                <Label htmlFor="title">Village Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Alpine Harmony Village"
                  className={prefillData?.title ? "border-2 border-[#d4a762] bg-[#fff9e6]" : ""}
                />
                {prefillData?.title && (
                  <div className="text-xs text-[#2c5530] mt-1 flex items-center">
                    <span className="bg-[#d4a762]/20 px-2 py-1 rounded-full mr-2">Prefilled</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g., Swiss Alps"
                    className={prefillData?.location ? "border-2 border-[#d4a762] bg-[#fff9e6]" : ""}
                  />
                  {prefillData?.stats?.location && (
                    <div className="text-xs text-[#2c5530] mt-1">
                      <span className="bg-[#d4a762]/20 px-2 py-1 rounded-full mr-2">Prefilled</span>
                      <span>{prefillData.stats.location.percentage}% of users prefer this location</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="totalCost">Total Land Cost ($)</Label>
                  <Input
                    id="totalCost"
                    value={formData.totalCost}
                    onChange={handleInputChange}
                    type="number"
                    placeholder="e.g., 2500000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Land Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the land, its features, accessibility, etc."
                  rows={4}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium flex items-center">
                <Coins className="mr-2 h-5 w-5 text-[#d4a762]" />
                Economic Structure
              </h3>

              <Card className="bg-[#f5f3e8]">
                <CardContent className="pt-4">
                  <div className="text-sm text-gray-600 mb-4">
                    <p>Define the economic parameters of your village:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>
                        <strong>N (Plots):</strong> Total number of plots in the village
                      </li>
                      <li>
                        <strong>k (Tokens/Plot):</strong> Number of tokens issued per plot
                      </li>
                      <li>
                        <strong>r (Ownership Ratio):</strong> Ratio determining individual vs. collective ownership
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="plots">N (Plots)</Label>
                  <Input id="plots" type="number" placeholder="e.g., 25" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tokensPerPlot">k (Tokens/Plot)</Label>
                  <Input id="tokensPerPlot" type="number" placeholder="e.g., 100" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ownershipRatio">r (Ownership Ratio)</Label>
                  <Input id="ownershipRatio" type="number" step="0.05" min="0" max="1" placeholder="e.g., 0.7" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="economicNotes">Additional Economic Notes</Label>
                <Textarea
                  id="economicNotes"
                  placeholder="Any additional details about the economic structure..."
                  rows={3}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium flex items-center">
                <Gavel className="mr-2 h-5 w-5 text-[#5a7d8c]" />
                Governance & Operations
              </h3>

              <div className="space-y-2">
                <Label htmlFor="governanceModel">Governance Model</Label>
                <Select
                  value={formData.governanceModel}
                  onValueChange={(value) => handleSelectChange(value, "governanceModel")}
                >
                  <SelectTrigger
                    id="governanceModel"
                    className={prefillData?.governance ? "border-2 border-[#d4a762] bg-[#fff9e6]" : ""}
                  >
                    <SelectValue placeholder="Select a governance model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="council">Council-based</SelectItem>
                    <SelectItem value="direct">Direct Democracy</SelectItem>
                    <SelectItem value="sociocracy">Sociocracy</SelectItem>
                    <SelectItem value="consensus">Consensus-based</SelectItem>
                    <SelectItem value="custom">Custom Model</SelectItem>
                  </SelectContent>
                </Select>
                {prefillData?.stats?.governance && (
                  <div className="text-xs text-[#2c5530] mt-1">
                    <span className="bg-[#d4a762]/20 px-2 py-1 rounded-full mr-2">Prefilled</span>
                    <span>{prefillData.stats.governance.percentage}% of users prefer this governance model</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="governanceDetails">Governance Details</Label>
                <Textarea
                  id="governanceDetails"
                  placeholder="Describe how decisions will be made, voting mechanisms, etc."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reimbursement">Failure/Reimbursement Conditions</Label>
                <Textarea
                  id="reimbursement"
                  placeholder="Describe scenarios for investment reimbursement..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="operations">Collective Operations Framework</Label>
                <Textarea
                  id="operations"
                  placeholder="Describe how the village will operate collectively..."
                  rows={3}
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium flex items-center">
                <Leaf className="mr-2 h-5 w-5 text-[#6b8e23]" />
                Land & Nature Management
              </h3>

              <div className="space-y-2">
                <Label htmlFor="natureApproach">Nature Management Approach</Label>
                <Select
                  value={formData.natureApproach}
                  onValueChange={(value) => handleSelectChange(value, "natureApproach")}
                >
                  <SelectTrigger
                    id="natureApproach"
                    className={prefillData?.natureApproach ? "border-2 border-[#d4a762] bg-[#fff9e6]" : ""}
                  >
                    <SelectValue placeholder="Select an approach" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conservation">Conservation-first</SelectItem>
                    <SelectItem value="regenerative">Regenerative Agriculture</SelectItem>
                    <SelectItem value="permaculture">Permaculture</SelectItem>
                    <SelectItem value="indigenous">Indigenous Stewardship</SelectItem>
                    <SelectItem value="custom">Custom Approach</SelectItem>
                  </SelectContent>
                </Select>
                {prefillData?.stats?.natureApproach && (
                  <div className="text-xs text-[#2c5530] mt-1">
                    <span className="bg-[#d4a762]/20 px-2 py-1 rounded-full mr-2">Prefilled</span>
                    <span>{prefillData.stats.natureApproach.percentage}% of users prefer this approach</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="natureDetails">Nature Management Details</Label>
                <Textarea id="natureDetails" placeholder="Describe specific rules about managing nature..." rows={3} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialAgents">Special Agent Personas</Label>
                <Textarea
                  id="specialAgents"
                  placeholder="Describe special agent personas (e.g., rivers, trees)..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sustainabilityGoals">Sustainability Goals</Label>
                <Textarea id="sustainabilityGoals" placeholder="Outline sustainability goals and metrics..." rows={3} />
              </div>
            </div>
          )}
          {prefillData?.stats?.suggestion && (
            <div className="mt-4 p-3 bg-[#f0ead6] rounded-md border border-[#d4a762]">
              <h4 className="font-medium text-[#2c5530] mb-1">Suggestion to Reach More Users</h4>
              <p className="text-sm">{prefillData.stats.suggestion}</p>
            </div>
          )}
        </div>

        <DialogFooter className="flex justify-between">
          {step > 1 ? (
            <Button variant="outline" onClick={prevStep}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          ) : (
            <div></div>
          )}

          {step < totalSteps ? (
            <Button onClick={nextStep}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-[#2c5530] hover:bg-[#1e3d20]">
              Submit Proposal
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
