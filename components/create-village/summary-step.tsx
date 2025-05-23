"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Coins, Gavel, Leaf, Building, AlertTriangle, Users } from "lucide-react"

export default function SummaryStep({ formData }) {
  // Map module IDs to their display information
  const moduleInfo = {
    governance: { icon: Gavel, color: "#5a7d8c", title: "Governance Model" },
    nature: { icon: Leaf, color: "#6b8e23", title: "Nature Management" },
    operations: { icon: Building, color: "#8b4513", title: "Collective Operations" },
    reimbursement: { icon: AlertTriangle, color: "#cd5c5c", title: "Failure & Reimbursement" },
    community: { icon: Users, color: "#4682b4", title: "Community Structure" },
  }

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-[#2c5530]">Proposal Summary</h2>
        <p className="text-gray-600 mt-1">Review your village proposal before submitting.</p>
      </div>

      <Card className="border-[#2c5530]/20">
        <CardHeader className="bg-[#f5f3e8] pb-4">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl text-[#2c5530]">{formData.title || "Untitled Village Proposal"}</CardTitle>
              <div className="flex items-center mt-2 text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{formData.location || "Location not specified"}</span>
              </div>
            </div>
            <Badge className="bg-[#d4a762] text-black">{formData.plots || "0"} Plots</Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div className="bg-[#f5f3e8] p-4 rounded-md">
            <h3 className="font-semibold text-[#2c5530] mb-2 flex items-center">
              <Coins className="h-5 w-5 mr-2 text-[#d4a762]" />
              Economics Overview
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Total Cost</p>
                <p className="font-medium">
                  ${formData.totalCost ? Number.parseInt(formData.totalCost).toLocaleString() : "0"}
                </p>
              </div>
              <div>
                <p className="text-gray-600">N (Plots)</p>
                <p className="font-medium">{formData.plots || "0"}</p>
              </div>
              <div>
                <p className="text-gray-600">k (Tokens/Plot)</p>
                <p className="font-medium">{formData.tokensPerPlot || "0"}</p>
              </div>
              <div>
                <p className="text-gray-600">r (Ownership Ratio)</p>
                <p className="font-medium">
                  {formData.ownershipRatio ? `${(Number.parseFloat(formData.ownershipRatio) * 100).toFixed(0)}%` : "0%"}
                </p>
              </div>
            </div>
            {formData.economicNotes && (
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-gray-600 text-sm">Additional Notes</p>
                <p className="text-sm">{formData.economicNotes}</p>
              </div>
            )}
          </div>

          <div>
            <h3 className="font-semibold text-[#2c5530] mb-3">Selected Modules</h3>
            <div className="space-y-4">
              {formData.selectedModules.length > 0 ? (
                formData.selectedModules.map((moduleId) => {
                  const module = moduleInfo[moduleId]
                  if (!module) return null

                  const ModuleIcon = module.icon
                  const config = formData.moduleConfigurations[moduleId] || {}

                  return (
                    <Card key={moduleId} className="border-l-4" style={{ borderLeftColor: module.color }}>
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <ModuleIcon className="h-5 w-5 mr-2" style={{ color: module.color }} />
                          <h4 className="font-medium" style={{ color: module.color }}>
                            {module.title}
                          </h4>
                        </div>

                        {moduleId === "governance" && (
                          <div className="space-y-2 text-sm">
                            <p>
                              <span className="font-medium">Model:</span>{" "}
                              {config.model === "council"
                                ? "Council-based"
                                : config.model === "direct"
                                  ? "Direct Democracy"
                                  : config.model === "sociocracy"
                                    ? "Sociocracy"
                                    : config.model === "consensus"
                                      ? "Consensus-based"
                                      : config.model === "custom"
                                        ? "Custom Model"
                                        : "Not specified"}
                            </p>
                            {config.details && (
                              <p>
                                <span className="font-medium">Details:</span> {config.details}
                              </p>
                            )}
                            {config.reimbursement && (
                              <p>
                                <span className="font-medium">Reimbursement:</span> {config.reimbursement}
                              </p>
                            )}
                            {config.operations && (
                              <p>
                                <span className="font-medium">Operations:</span> {config.operations}
                              </p>
                            )}
                          </div>
                        )}

                        {moduleId === "nature" && (
                          <div className="space-y-2 text-sm">
                            <p>
                              <span className="font-medium">Approach:</span>{" "}
                              {config.approach === "conservation"
                                ? "Conservation-first"
                                : config.approach === "regenerative"
                                  ? "Regenerative Agriculture"
                                  : config.approach === "permaculture"
                                    ? "Permaculture"
                                    : config.approach === "indigenous"
                                      ? "Indigenous Stewardship"
                                      : config.approach === "custom"
                                        ? "Custom Approach"
                                        : "Not specified"}
                            </p>
                            {config.details && (
                              <p>
                                <span className="font-medium">Details:</span> {config.details}
                              </p>
                            )}
                            {config.specialAgents && (
                              <p>
                                <span className="font-medium">Special Agents:</span> {config.specialAgents}
                              </p>
                            )}
                            {config.sustainabilityGoals && (
                              <p>
                                <span className="font-medium">Sustainability Goals:</span> {config.sustainabilityGoals}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Other module types would be handled here */}
                      </CardContent>
                    </Card>
                  )
                })
              ) : (
                <p className="text-gray-500 italic">No modules selected</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="p-4 bg-[#f0ead6] rounded-md border border-[#d4a762]">
        <h3 className="font-medium text-[#2c5530] mb-2">Proposal Insights</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <span className="text-[#2c5530] mr-2">•</span>
            <span>
              Your proposal includes {formData.selectedModules.length} modules, which is{" "}
              {formData.selectedModules.length >= 4 ? "above" : "below"} the average of 4 modules per proposal.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#2c5530] mr-2">•</span>
            <span>
              Proposals with similar characteristics receive an average of 12 commitments within the first month.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#2c5530] mr-2">•</span>
            <span>
              Consider adding detailed descriptions to all fields to increase user engagement with your proposal.
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
