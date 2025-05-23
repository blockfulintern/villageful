"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ArrowRight, Save, MapPin, Users, Leaf } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import StepNavigation from "@/components/create-village/step-navigation"
import PreferenceInsight from "@/components/create-village/preference-insight"

export default function CreateInterestPage() {
  const router = useRouter()
  const { toast } = useToast()

  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal details
    name: "",
    bio: "",
    contactPreference: "",

    // Location preferences
    geography: "",
    climate: "",
    proximity: "",

    // Community preferences
    governance: "",
    plots: "",
    collectiveOwnership: "",
    communitySize: "",

    // Nature preferences
    natureApproach: "",
    sustainabilityGoals: "",
    landUse: "",
  })

  // Define steps
  const steps = [
    { id: 1, name: "Personal Details" },
    { id: 2, name: "Location" },
    { id: 3, name: "Community" },
    { id: 4, name: "Nature" },
    { id: 5, name: "Review" },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
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
      title: "Interest statement shared!",
      description: "Your interest statement has been successfully published.",
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
            <h1 className="text-2xl font-bold">Share Your Interest</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <StepNavigation steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />

        <div className="mt-8 bg-white rounded-lg shadow-md p-6 border border-gray-200">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-[#d4a762] mr-2" />
                <h2 className="text-2xl font-bold text-[#2c5530]">Personal Details</h2>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Emma Johnson"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Brief Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Tell us a bit about yourself, your background, and what draws you to village living..."
                    rows={4}
                  />
                  <PreferenceInsight
                    count={28}
                    percentage={40}
                    suggestions={[
                      { text: "Mention your skills that could contribute to a village community" },
                      { text: "Share your experience with community living or sustainability projects" },
                    ]}
                    onApplySuggestion={(value) => {
                      const event = { target: { name: "bio", value } }
                      handleInputChange(event)
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPreference">Preferred Contact Method</Label>
                  <Select
                    value={formData.contactPreference}
                    onValueChange={(value) => handleSelectChange("contactPreference", value)}
                  >
                    <SelectTrigger id="contactPreference">
                      <SelectValue placeholder="Select contact preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="platform">Platform Messages</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="video">Video Call</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-[#2c5530] mr-2" />
                <h2 className="text-2xl font-bold text-[#2c5530]">Location Preferences</h2>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="geography">Preferred Geography</Label>
                  <Input
                    id="geography"
                    name="geography"
                    value={formData.geography}
                    onChange={handleInputChange}
                    placeholder="e.g., Mountain regions in Europe"
                  />
                  <PreferenceInsight
                    count={42}
                    percentage={42}
                    suggestions={[
                      {
                        text: "European mountain regions are highly sought after",
                        value: "Mountain regions in Europe",
                      },
                      { text: "Mediterranean coastal areas are also popular", value: "Coastal areas in Mediterranean" },
                    ]}
                    onApplySuggestion={(value) => {
                      const event = { target: { name: "geography", value } }
                      handleInputChange(event)
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="climate">Climate Preference</Label>
                  <Select value={formData.climate} onValueChange={(value) => handleSelectChange("climate", value)}>
                    <SelectTrigger id="climate">
                      <SelectValue placeholder="Select preferred climate" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="temperate">Temperate</SelectItem>
                      <SelectItem value="mediterranean">Mediterranean</SelectItem>
                      <SelectItem value="alpine">Alpine</SelectItem>
                      <SelectItem value="tropical">Tropical</SelectItem>
                      <SelectItem value="desert">Desert</SelectItem>
                      <SelectItem value="any">Any Climate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="proximity">Proximity to Urban Centers</Label>
                  <Select value={formData.proximity} onValueChange={(value) => handleSelectChange("proximity", value)}>
                    <SelectTrigger id="proximity">
                      <SelectValue placeholder="Select proximity preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote (100+ km)</SelectItem>
                      <SelectItem value="rural">Rural (50-100 km)</SelectItem>
                      <SelectItem value="suburban">Suburban (20-50 km)</SelectItem>
                      <SelectItem value="periurban">Peri-urban (10-20 km)</SelectItem>
                      <SelectItem value="any">No Preference</SelectItem>
                    </SelectContent>
                  </Select>
                  <PreferenceInsight
                    count={35}
                    percentage={35}
                    suggestions={[
                      { text: "Rural locations with some access to urban amenities are most popular" },
                      { text: "Consider proximity to transportation hubs for accessibility" },
                    ]}
                    onApplySuggestion={(value) => {}}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-[#5a7d8c] mr-2" />
                <h2 className="text-2xl font-bold text-[#2c5530]">Community Preferences</h2>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="governance">Governance Style</Label>
                  <Select
                    value={formData.governance}
                    onValueChange={(value) => handleSelectChange("governance", value)}
                  >
                    <SelectTrigger id="governance">
                      <SelectValue placeholder="Select governance preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="direct">Direct Democracy</SelectItem>
                      <SelectItem value="council">Council-based</SelectItem>
                      <SelectItem value="sociocracy">Sociocracy</SelectItem>
                      <SelectItem value="consensus">Consensus-based</SelectItem>
                      <SelectItem value="any">No Strong Preference</SelectItem>
                    </SelectContent>
                  </Select>
                  <PreferenceInsight
                    count={35}
                    percentage={35}
                    suggestions={[
                      { text: "Direct Democracy is the most popular governance model" },
                      { text: "Council-based governance appeals to 25% of users" },
                    ]}
                    onApplySuggestion={(value) => {}}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="plots">Number of Plots</Label>
                  <Input
                    id="plots"
                    name="plots"
                    value={formData.plots}
                    onChange={handleInputChange}
                    placeholder="e.g., 20-30"
                  />
                  <PreferenceInsight
                    count={46}
                    percentage={46}
                    suggestions={[
                      { text: "25-40 plots is the most popular range", value: "25-40" },
                      { text: "Smaller villages (15-25 plots) appeal to 28% of users", value: "15-25" },
                    ]}
                    onApplySuggestion={(value) => {
                      const event = { target: { name: "plots", value } }
                      handleInputChange(event)
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="collectiveOwnership">Collective Ownership</Label>
                  <Input
                    id="collectiveOwnership"
                    name="collectiveOwnership"
                    value={formData.collectiveOwnership}
                    onChange={handleInputChange}
                    placeholder="e.g., 30%"
                  />
                  <PreferenceInsight
                    count={38}
                    percentage={38}
                    suggestions={[
                      { text: "Average collective ownership is 38%", value: "38%" },
                      { text: "Higher collective ownership (40-60%) appeals to 30% of users", value: "45%" },
                    ]}
                    onApplySuggestion={(value) => {
                      const event = { target: { name: "collectiveOwnership", value } }
                      handleInputChange(event)
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="communitySize">Community Size</Label>
                  <Input
                    id="communitySize"
                    name="communitySize"
                    value={formData.communitySize}
                    onChange={handleInputChange}
                    placeholder="e.g., 40-60 people"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Leaf className="h-6 w-6 text-[#6b8e23] mr-2" />
                <h2 className="text-2xl font-bold text-[#2c5530]">Nature Management Preferences</h2>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="natureApproach">Nature Management Approach</Label>
                  <Select
                    value={formData.natureApproach}
                    onValueChange={(value) => handleSelectChange("natureApproach", value)}
                  >
                    <SelectTrigger id="natureApproach">
                      <SelectValue placeholder="Select nature management preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conservation">Conservation-first</SelectItem>
                      <SelectItem value="regenerative">Regenerative Agriculture</SelectItem>
                      <SelectItem value="permaculture">Permaculture</SelectItem>
                      <SelectItem value="indigenous">Indigenous Stewardship</SelectItem>
                      <SelectItem value="any">No Strong Preference</SelectItem>
                    </SelectContent>
                  </Select>
                  <PreferenceInsight
                    count={40}
                    percentage={40}
                    suggestions={[
                      { text: "Conservation approaches are most popular (40% of users)" },
                      { text: "Regenerative agriculture appeals to 30% of users" },
                    ]}
                    onApplySuggestion={(value) => {}}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sustainabilityGoals">Sustainability Goals</Label>
                  <Textarea
                    id="sustainabilityGoals"
                    name="sustainabilityGoals"
                    value={formData.sustainabilityGoals}
                    onChange={handleInputChange}
                    placeholder="Describe your sustainability priorities and goals..."
                    rows={3}
                  />
                  <PreferenceInsight
                    count={28}
                    percentage={40}
                    suggestions={[
                      {
                        text: "Mention specific sustainability metrics you value (carbon footprint, biodiversity, etc.)",
                      },
                      { text: "Consider including self-sufficiency goals (food, energy, water)" },
                    ]}
                    onApplySuggestion={(value) => {
                      const event = { target: { name: "sustainabilityGoals", value } }
                      handleInputChange(event)
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="landUse">Land Use Preferences</Label>
                  <Textarea
                    id="landUse"
                    name="landUse"
                    value={formData.landUse}
                    onChange={handleInputChange}
                    placeholder="Describe your preferences for how land should be used and managed..."
                    rows={3}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-[#2c5530]">Review Your Interest Statement</h2>
                <p className="text-gray-600 mt-1">Review your preferences before sharing with the community.</p>
              </div>

              <div className="bg-[#f5f3e8] p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold text-[#2c5530]">{formData.name || "Anonymous User"}</h3>
                </div>

                {formData.bio && (
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-gray-700">{formData.bio}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#2c5530] mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Location Preferences
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <span className="font-medium">Geography:</span> {formData.geography || "Not specified"}
                      </li>
                      <li>
                        <span className="font-medium">Climate:</span>{" "}
                        {formData.climate === "temperate"
                          ? "Temperate"
                          : formData.climate === "mediterranean"
                            ? "Mediterranean"
                            : formData.climate === "alpine"
                              ? "Alpine"
                              : formData.climate === "tropical"
                                ? "Tropical"
                                : formData.climate === "desert"
                                  ? "Desert"
                                  : formData.climate === "any"
                                    ? "Any Climate"
                                    : "Not specified"}
                      </li>
                      <li>
                        <span className="font-medium">Proximity:</span>{" "}
                        {formData.proximity === "remote"
                          ? "Remote (100+ km)"
                          : formData.proximity === "rural"
                            ? "Rural (50-100 km)"
                            : formData.proximity === "suburban"
                              ? "Suburban (20-50 km)"
                              : formData.proximity === "periurban"
                                ? "Peri-urban (10-20 km)"
                                : formData.proximity === "any"
                                  ? "No Preference"
                                  : "Not specified"}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#2c5530] mb-2 flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Community Preferences
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <span className="font-medium">Governance:</span>{" "}
                        {formData.governance === "direct"
                          ? "Direct Democracy"
                          : formData.governance === "council"
                            ? "Council-based"
                            : formData.governance === "sociocracy"
                              ? "Sociocracy"
                              : formData.governance === "consensus"
                                ? "Consensus-based"
                                : formData.governance === "any"
                                  ? "No Strong Preference"
                                  : "Not specified"}
                      </li>
                      <li>
                        <span className="font-medium">Plots:</span> {formData.plots || "Not specified"}
                      </li>
                      <li>
                        <span className="font-medium">Collective Ownership:</span>{" "}
                        {formData.collectiveOwnership || "Not specified"}
                      </li>
                      <li>
                        <span className="font-medium">Community Size:</span> {formData.communitySize || "Not specified"}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#2c5530] mb-2 flex items-center">
                      <Leaf className="h-4 w-4 mr-2" />
                      Nature Management
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <span className="font-medium">Approach:</span>{" "}
                        {formData.natureApproach === "conservation"
                          ? "Conservation-first"
                          : formData.natureApproach === "regenerative"
                            ? "Regenerative Agriculture"
                            : formData.natureApproach === "permaculture"
                              ? "Permaculture"
                              : formData.natureApproach === "indigenous"
                                ? "Indigenous Stewardship"
                                : formData.natureApproach === "any"
                                  ? "No Strong Preference"
                                  : "Not specified"}
                      </li>
                      {formData.sustainabilityGoals && (
                        <li>
                          <span className="font-medium">Sustainability Goals:</span> {formData.sustainabilityGoals}
                        </li>
                      )}
                      {formData.landUse && (
                        <li>
                          <span className="font-medium">Land Use:</span> {formData.landUse}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#f0ead6] rounded-md border border-[#d4a762]">
                <h3 className="font-medium text-[#2c5530] mb-2">Matching Insights</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#2c5530] mr-2">•</span>
                    <span>
                      Your preferences match with 8 existing village proposals and 15 other community members.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c5530] mr-2">•</span>
                    <span>
                      Consider adding more details to your sustainability goals to improve matching with like-minded
                      individuals.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}

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
                Share Interest Statement
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
