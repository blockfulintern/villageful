"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Gavel, Leaf, Building, AlertTriangle, Users } from "lucide-react"
import PreferenceInsight from "./preference-insight"

// Module configuration components
const moduleConfigs = {
  governance: {
    icon: Gavel,
    color: "#5a7d8c",
    title: "Governance Model",
    component: ({ config, onChange, prefillData, stats }) => (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="governance-model">Governance Model</Label>
          <Select value={config.model} onValueChange={(value) => onChange("model", value)}>
            <SelectTrigger
              id="governance-model"
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
          {stats?.governance && (
            <PreferenceInsight
              isPrefilled={!!prefillData?.governance}
              count={stats.governance.count}
              percentage={stats.governance.percentage}
              suggestions={[
                { text: "Direct Democracy is the most popular model (35% of users)", value: "direct" },
                { text: "Council-based governance appeals to 25% of users", value: "council" },
              ]}
              onApplySuggestion={(value) => onChange("model", value)}
            />
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="governance-details">Governance Details</Label>
          <Textarea
            id="governance-details"
            value={config.details}
            onChange={(e) => onChange("details", e.target.value)}
            placeholder="Describe how decisions will be made, voting mechanisms, etc."
            rows={3}
          />
          <PreferenceInsight
            count={22}
            percentage={32}
            suggestions={[
              { text: "Users prefer clear decision-making processes with defined timelines" },
              { text: "Consider including conflict resolution mechanisms" },
            ]}
            onApplySuggestion={(value) => onChange("details", value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="reimbursement">Failure/Reimbursement Conditions</Label>
          <Textarea
            id="reimbursement"
            value={config.reimbursement}
            onChange={(e) => onChange("reimbursement", e.target.value)}
            placeholder="Describe scenarios for investment reimbursement..."
            rows={3}
          />
          <PreferenceInsight
            count={18}
            percentage={26}
            suggestions={[
              { text: "Clear reimbursement timelines increase trust and participation" },
              { text: "Consider staged reimbursement based on project milestones" },
            ]}
            onApplySuggestion={(value) => onChange("reimbursement", value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="operations">Collective Operations Framework</Label>
          <Textarea
            id="operations"
            value={config.operations}
            onChange={(e) => onChange("operations", e.target.value)}
            placeholder="Describe how the village will operate collectively..."
            rows={3}
          />
          <PreferenceInsight
            count={20}
            percentage={29}
            suggestions={[
              { text: "Cooperative models with shared responsibilities are popular" },
              { text: "Consider including specialized roles for efficiency" },
            ]}
            onApplySuggestion={(value) => onChange("operations", value)}
          />
        </div>
      </div>
    ),
  },
  nature: {
    icon: Leaf,
    color: "#6b8e23",
    title: "Nature Management",
    component: ({ config, onChange, prefillData, stats }) => (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="nature-approach">Nature Management Approach</Label>
          <Select value={config.approach} onValueChange={(value) => onChange("approach", value)}>
            <SelectTrigger
              id="nature-approach"
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
          {stats?.natureApproach && (
            <PreferenceInsight
              isPrefilled={!!prefillData?.natureApproach}
              count={stats.natureApproach.count}
              percentage={stats.natureApproach.percentage}
              suggestions={[
                { text: "Conservation approaches are most popular (40% of users)", value: "conservation" },
                { text: "Regenerative agriculture appeals to 30% of users", value: "regenerative" },
              ]}
              onApplySuggestion={(value) => onChange("approach", value)}
            />
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="nature-details">Nature Management Details</Label>
          <Textarea
            id="nature-details"
            value={config.details}
            onChange={(e) => onChange("details", e.target.value)}
            placeholder="Describe specific rules about managing nature..."
            rows={3}
          />
          <PreferenceInsight
            count={25}
            percentage={36}
            suggestions={[
              { text: "Users value specific conservation targets and metrics" },
              { text: "Consider including seasonal activities and community involvement" },
            ]}
            onApplySuggestion={(value) => onChange("details", value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="special-agents">Special Agent Personas</Label>
          <Textarea
            id="special-agents"
            value={config.specialAgents}
            onChange={(e) => onChange("specialAgents", e.target.value)}
            placeholder="Describe special agent personas (e.g., rivers, trees)..."
            rows={3}
          />
          <PreferenceInsight
            count={15}
            percentage={22}
            suggestions={[
              { text: "Water bodies as agents resonates with 35% of conservation-minded users" },
              { text: "Consider including wildlife corridors as special agents" },
            ]}
            onApplySuggestion={(value) => onChange("specialAgents", value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sustainability-goals">Sustainability Goals</Label>
          <Textarea
            id="sustainability-goals"
            value={config.sustainabilityGoals}
            onChange={(e) => onChange("sustainabilityGoals", e.target.value)}
            placeholder="Outline sustainability goals and metrics..."
            rows={3}
          />
          <PreferenceInsight
            count={28}
            percentage={40}
            suggestions={[
              { text: "Quantifiable sustainability goals increase proposal credibility" },
              { text: "Consider including carbon neutrality or negative targets" },
            ]}
            onApplySuggestion={(value) => onChange("sustainabilityGoals", value)}
          />
        </div>
      </div>
    ),
  },
  operations: {
    icon: Building,
    color: "#8b4513",
    title: "Collective Operations",
    component: ({ config, onChange }) => (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="operations-model">Operations Model</Label>
          <Select value={config.model || ""} onValueChange={(value) => onChange("model", value)}>
            <SelectTrigger id="operations-model">
              <SelectValue placeholder="Select an operations model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cooperative">Cooperative</SelectItem>
              <SelectItem value="professional">Professional Management</SelectItem>
              <SelectItem value="hybrid">Hybrid Model</SelectItem>
              <SelectItem value="rotating">Rotating Responsibilities</SelectItem>
              <SelectItem value="custom">Custom Model</SelectItem>
            </SelectContent>
          </Select>
          <PreferenceInsight
            count={19}
            percentage={27}
            suggestions={[
              { text: "Hybrid models with some professional management are gaining popularity" },
              { text: "Cooperative models appeal to community-focused users" },
            ]}
            onApplySuggestion={(value) => onChange("model", value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="operations-details">Operations Details</Label>
          <Textarea
            id="operations-details"
            value={config.details || ""}
            onChange={(e) => onChange("details", e.target.value)}
            placeholder="Describe day-to-day operations, roles, and responsibilities..."
            rows={3}
          />
          <PreferenceInsight
            count={22}
            percentage={32}
            suggestions={[
              { text: "Clear role definitions increase user confidence in the proposal" },
              { text: "Consider including skill-sharing and training mechanisms" },
            ]}
            onApplySuggestion={(value) => onChange("details", value)}
          />
        </div>
      </div>
    ),
  },
  reimbursement: {
    icon: AlertTriangle,
    color: "#cd5c5c",
    title: "Failure & Reimbursement",
    component: ({ config, onChange }) => (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="failure-conditions">Failure Conditions</Label>
          <Textarea
            id="failure-conditions"
            value={config.failureConditions || ""}
            onChange={(e) => onChange("failureConditions", e.target.value)}
            placeholder="Define conditions that would constitute project failure..."
            rows={3}
          />
          <PreferenceInsight
            count={24}
            percentage={35}
            suggestions={[
              { text: "Clear timelines for project milestones increase trust" },
              { text: "Consider regulatory approval as a key milestone" },
            ]}
            onApplySuggestion={(value) => onChange("failureConditions", value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="reimbursement-process">Reimbursement Process</Label>
          <Textarea
            id="reimbursement-process"
            value={config.reimbursementProcess || ""}
            onChange={(e) => onChange("reimbursementProcess", e.target.value)}
            placeholder="Describe the process for reimbursing investors..."
            rows={3}
          />
          <PreferenceInsight
            count={26}
            percentage={38}
            suggestions={[
              { text: "Staged reimbursement based on project phases is preferred by users" },
              { text: "Consider escrow mechanisms for funds security" },
            ]}
            onApplySuggestion={(value) => onChange("reimbursementProcess", value)}
          />
        </div>
      </div>
    ),
  },
  community: {
    icon: Users,
    color: "#4682b4",
    title: "Community Structure",
    component: ({ config, onChange }) => (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="community-values">Community Values</Label>
          <Textarea
            id="community-values"
            value={config.values || ""}
            onChange={(e) => onChange("values", e.target.value)}
            placeholder="Define the core values of the community..."
            rows={3}
          />
          <PreferenceInsight
            count={18}
            percentage={26}
            suggestions={[
              { text: "Sustainability and cooperation are the most resonant values" },
              { text: "Consider including diversity and inclusion statements" },
            ]}
            onApplySuggestion={(value) => onChange("values", value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="community-activities">Community Activities</Label>
          <Textarea
            id="community-activities"
            value={config.activities || ""}
            onChange={(e) => onChange("activities", e.target.value)}
            placeholder="Describe regular community activities and gatherings..."
            rows={3}
          />
          <PreferenceInsight
            count={20}
            percentage={29}
            suggestions={[
              { text: "Seasonal celebrations and regular community meals are popular" },
              { text: "Consider skill-sharing and educational activities" },
            ]}
            onApplySuggestion={(value) => onChange("activities", value)}
          />
        </div>
      </div>
    ),
  },
  // Additional modules would be defined here
}

export default function ModuleConfigurationStep({
  selectedModules,
  moduleConfigurations,
  handleModuleConfigChange,
  prefillData,
  stats,
}) {
  const [activeTab, setActiveTab] = useState(selectedModules[0] || "")

  if (selectedModules.length === 0) {
    return (
      <Card className="p-6 text-center">
        <h3 className="text-xl font-medium text-[#2c5530] mb-4">No Modules Selected</h3>
        <p className="text-gray-600 mb-4">
          Please go back to the previous step and select at least one module to configure.
        </p>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-[#2c5530]">Module Configuration</h2>
        <p className="text-gray-600 mt-1">Configure the details for each of your selected modules.</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mb-6">
          {selectedModules.map((moduleId) => {
            const module = moduleConfigs[moduleId]
            if (!module) return null

            return (
              <TabsTrigger key={moduleId} value={moduleId} className="flex items-center">
                <module.icon className="h-4 w-4 mr-2" style={{ color: module.color }} />
                <span>{module.title}</span>
              </TabsTrigger>
            )
          })}
        </TabsList>

        {selectedModules.map((moduleId) => {
          const module = moduleConfigs[moduleId]
          if (!module) return null

          const ModuleComponent = module.component
          const config = moduleConfigurations[moduleId] || {}

          return (
            <TabsContent key={moduleId} value={moduleId} className="pt-2">
              <div className="flex items-center mb-4">
                <module.icon className="h-6 w-6 mr-2" style={{ color: module.color }} />
                <h3 className="text-xl font-bold" style={{ color: module.color }}>
                  {module.title} Configuration
                </h3>
              </div>

              <ModuleComponent
                config={config}
                onChange={(field, value) => handleModuleConfigChange(moduleId, field, value)}
                prefillData={prefillData}
                stats={stats}
              />
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}
