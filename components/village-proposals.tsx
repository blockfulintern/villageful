"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, MapPin, Leaf, Gavel, AlertTriangle, Building } from "lucide-react"
import { useState } from "react"
import ModuleConnections from "./module-connections"

// Sample data for village proposals
const villageProposals = [
  {
    id: 1,
    title: "Alpine Harmony Village",
    location: "Swiss Alps",
    totalCost: 2500000,
    plots: 25,
    tokensPerPlot: 100,
    ownershipRatio: 0.7,
    governance: "Council-based with quarterly assemblies",
    reimbursement: "Full reimbursement if minimum commitment not reached within 6 months",
    operations: "Cooperative model with shared responsibilities and specialized roles",
    natureManagement: "Conservation-first approach with dedicated forest and water stewards",
  },
  {
    id: 2,
    title: "Coastal Community Project",
    location: "Portugal, Atlantic Coast",
    totalCost: 1800000,
    plots: 30,
    tokensPerPlot: 80,
    ownershipRatio: 0.65,
    governance: "Direct democracy with digital voting system",
    reimbursement: "80% reimbursement if regulatory approval fails",
    operations: "Mixed model with part-time professional management",
    natureManagement: "Regenerative agriculture and marine conservation initiatives",
  },
  {
    id: 3,
    title: "Forest Haven Collective",
    location: "Pacific Northwest, USA",
    totalCost: 3200000,
    plots: 40,
    tokensPerPlot: 120,
    ownershipRatio: 0.6,
    governance: "Sociocracy with nested circles",
    reimbursement: "Staged reimbursement based on project milestones",
    operations: "Self-organizing teams with rotating leadership",
    natureManagement: "Forest stewardship with wildlife corridors and protected zones",
  },
]

export default function VillageProposals() {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({})

  const toggleCard = (id: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {villageProposals.map((proposal) => (
          <Card
            key={proposal.id}
            className="overflow-hidden border-2 border-[#d4a762]/20 hover:border-[#d4a762]/50 transition-all duration-300"
          >
            <CardHeader className="bg-[#f0ead6] pb-2">
              <div className="flex justify-between items-start">
                <Badge variant="outline" className="bg-[#2c5530] text-white mb-2">
                  ID: {proposal.id}
                </Badge>
                <Badge variant="outline" className="bg-[#d4a762] text-black">
                  {proposal.plots} Plots
                </Badge>
              </div>
              <CardTitle className="text-xl text-[#2c5530]">{proposal.title}</CardTitle>
              <CardDescription className="flex items-center mt-1">
                <MapPin className="h-4 w-4 mr-1" /> {proposal.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                <div className="bg-[#f5f3e8] p-3 rounded-md">
                  <h3 className="font-semibold text-[#2c5530] mb-2">Economics Overview</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-600">Total Cost</p>
                      <p className="font-medium">${proposal.totalCost.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">N (Plots)</p>
                      <p className="font-medium">{proposal.plots}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">k (Tokens/Plot)</p>
                      <p className="font-medium">{proposal.tokensPerPlot}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">r (Ownership Ratio)</p>
                      <p className="font-medium">{proposal.ownershipRatio * 100}%</p>
                    </div>
                  </div>
                </div>

                <Collapsible open={expandedCards[proposal.id]} onOpenChange={() => toggleCard(proposal.id)}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left font-medium p-2 rounded hover:bg-[#f0ead6]">
                    <span>Modules Summary</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${expandedCards[proposal.id] ? "transform rotate-180" : ""}`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-3 mt-2">
                    {expandedCards[proposal.id] && <ModuleConnections />}

                    <div className="p-3 bg-[#f5f3e8] rounded-md">
                      <div className="flex items-center text-[#2c5530] font-medium mb-1">
                        <Gavel className="h-4 w-4 mr-2" />
                        <h4>Governance Model</h4>
                      </div>
                      <p className="text-sm">{proposal.governance}</p>
                    </div>

                    <div className="p-3 bg-[#f5f3e8] rounded-md">
                      <div className="flex items-center text-[#2c5530] font-medium mb-1">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        <h4>Failure/Reimbursement Conditions</h4>
                      </div>
                      <p className="text-sm">{proposal.reimbursement}</p>
                    </div>

                    <div className="p-3 bg-[#f5f3e8] rounded-md">
                      <div className="flex items-center text-[#2c5530] font-medium mb-1">
                        <Building className="h-4 w-4 mr-2" />
                        <h4>Collective Operations Framework</h4>
                      </div>
                      <p className="text-sm">{proposal.operations}</p>
                    </div>

                    <div className="p-3 bg-[#f5f3e8] rounded-md">
                      <div className="flex items-center text-[#2c5530] font-medium mb-1">
                        <Leaf className="h-4 w-4 mr-2" />
                        <h4>Land and Nature Management</h4>
                      </div>
                      <p className="text-sm">{proposal.natureManagement}</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </CardContent>
            <CardFooter className="bg-[#f0ead6] pt-4">
              <Button className="w-full bg-[#2c5530] hover:bg-[#1e3d20]">Commit Funds</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
