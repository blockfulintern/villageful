"use client"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gavel, Leaf, Building, AlertTriangle, Users, Globe, Sprout, Lightbulb } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

// Available modules in the library
const moduleLibrary = [
  {
    id: "governance",
    title: "Governance Model",
    description: "Define how decisions will be made in the village",
    icon: Gavel,
    color: "#5a7d8c",
    popularity: "85%",
  },
  {
    id: "nature",
    title: "Nature Management",
    description: "Establish approaches to land and nature stewardship",
    icon: Leaf,
    color: "#6b8e23",
    popularity: "78%",
  },
  {
    id: "operations",
    title: "Collective Operations",
    description: "Structure for day-to-day village operations",
    icon: Building,
    color: "#8b4513",
    popularity: "72%",
  },
  {
    id: "reimbursement",
    title: "Failure & Reimbursement",
    description: "Conditions for project failure and investment reimbursement",
    icon: AlertTriangle,
    color: "#cd5c5c",
    popularity: "65%",
  },
  {
    id: "community",
    title: "Community Structure",
    description: "Define social organization and community activities",
    icon: Users,
    color: "#4682b4",
    popularity: "58%",
  },
  {
    id: "international",
    title: "International Relations",
    description: "Approach to relationships with other villages and entities",
    icon: Globe,
    color: "#483d8b",
    popularity: "42%",
  },
  {
    id: "agriculture",
    title: "Agricultural Framework",
    description: "Food production and agricultural practices",
    icon: Sprout,
    color: "#228b22",
    popularity: "51%",
  },
  {
    id: "innovation",
    title: "Innovation & Technology",
    description: "Approach to technological adoption and innovation",
    icon: Lightbulb,
    color: "#daa520",
    popularity: "38%",
  },
]

export default function ModuleSelectionStep({ selectedModules, handleModuleSelection }) {
  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-[#2c5530]">Module Selection</h2>
        <p className="text-gray-600 mt-1">
          Select the modules you want to include in your village proposal. Each module represents a different aspect of
          your village.
        </p>
      </div>

      <div className="bg-[#f5f3e8] p-4 rounded-md mb-6">
        <div className="flex items-center mb-2">
          <span className="font-medium text-[#2c5530]">Selected Modules: </span>
          <span className="ml-2 text-gray-600">
            {selectedModules.length} of {moduleLibrary.length}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {selectedModules.length > 0 ? (
            moduleLibrary
              .filter((module) => selectedModules.includes(module.id))
              .map((module) => (
                <Badge key={module.id} style={{ backgroundColor: module.color }} className="text-white px-3 py-1">
                  {module.title}
                </Badge>
              ))
          ) : (
            <p className="text-sm text-gray-500 italic">No modules selected yet</p>
          )}
        </div>
      </div>

      <ScrollArea className="h-[500px] pr-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {moduleLibrary.map((module) => (
            <Card
              key={module.id}
              className={`border-2 transition-all duration-300 ${
                selectedModules.includes(module.id)
                  ? `border-[${module.color}] bg-[${module.color}]/5`
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <module.icon className="h-5 w-5 mr-2" style={{ color: module.color }} />
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                  </div>
                  <Badge variant="outline" className="bg-[#f0ead6] text-[#2c5530]">
                    {module.popularity} popular
                  </Badge>
                </div>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-2">
                <Button
                  variant={selectedModules.includes(module.id) ? "default" : "outline"}
                  className={
                    selectedModules.includes(module.id)
                      ? `bg-[${module.color}] hover:bg-[${module.color}]/90 text-white`
                      : `border-[${module.color}] text-[${module.color}] hover:bg-[${module.color}]/10`
                  }
                  style={{
                    backgroundColor: selectedModules.includes(module.id) ? module.color : "transparent",
                    borderColor: module.color,
                    color: selectedModules.includes(module.id) ? "white" : module.color,
                  }}
                  onClick={() => handleModuleSelection(module.id, !selectedModules.includes(module.id))}
                >
                  {selectedModules.includes(module.id) ? "Remove Module" : "Add Module"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>

      <div className="mt-4 p-4 bg-[#f0ead6] rounded-md border border-[#d4a762]">
        <h3 className="font-medium text-[#2c5530] mb-2">Module Insights</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <span className="text-[#2c5530] mr-2">•</span>
            <span>Governance and Nature Management are the most popular modules (included in 80%+ of proposals)</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#2c5530] mr-2">•</span>
            <span>Proposals with 4+ modules receive 65% more interest from potential participants</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#2c5530] mr-2">•</span>
            <span>Consider adding unique modules to differentiate your proposal (only 38% include Innovation)</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
