"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Users, Leaf, Coins } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

// Sample data for interest statements
const interestStatements = [
  {
    id: 1,
    user: {
      name: "Emma Johnson",
      avatar: "/short-haired-woman-portrait.png",
    },
    criteria: {
      geography: "Mountain regions in Europe",
      governance: "Direct democracy or council-based",
      plots: "40-60",
      collectiveOwnership: "30%",
      natureApproach: "Conservation with sustainable use",
    },
    createdAt: "2 days ago",
  },
  {
    id: 2,
    user: {
      name: "Michael Chen",
      avatar: "/asian-man-glasses-portrait.png",
    },
    criteria: {
      geography: "Coastal areas in Mediterranean",
      governance: "Sociocracy",
      plots: "20-30",
      collectiveOwnership: "40%",
      natureApproach: "Regenerative agriculture",
    },
    createdAt: "5 days ago",
  },
  {
    id: 3,
    user: {
      name: "Sofia Rodriguez",
      avatar: "/latina-woman-portrait.png",
    },
    criteria: {
      geography: "Rural areas in South America",
      governance: "Cooperative structure",
      plots: "30-50",
      collectiveOwnership: "50%",
      natureApproach: "Indigenous stewardship practices",
    },
    createdAt: "1 week ago",
  },
  {
    id: 4,
    user: {
      name: "David Okafor",
      avatar: "/african-man-portrait.png",
    },
    criteria: {
      geography: "Temperate forest regions globally",
      governance: "Consensus-based decision making",
      plots: "15-25",
      collectiveOwnership: "35%",
      natureApproach: "Wildlife corridors and conservation zones",
    },
    createdAt: "2 weeks ago",
  },
  {
    id: 5,
    user: {
      name: "Aisha Patel",
      avatar: "/indian-woman-portrait.png",
    },
    criteria: {
      geography: "Alpine regions in Europe",
      governance: "Direct democracy",
      plots: "30-45",
      collectiveOwnership: "25%",
      natureApproach: "Conservation with tourism integration",
    },
    createdAt: "3 days ago",
  },
  {
    id: 6,
    user: {
      name: "Lars Svensson",
      avatar: "/placeholder.svg?height=40&width=40&query=portrait of a scandinavian man",
    },
    criteria: {
      geography: "Scandinavian forests",
      governance: "Consensus-based",
      plots: "15-20",
      collectiveOwnership: "60%",
      natureApproach: "Rewilding and minimal intervention",
    },
    createdAt: "1 week ago",
  },
  {
    id: 7,
    user: {
      name: "Olivia Bennett",
      avatar: "/placeholder.svg?height=40&width=40&query=portrait of a woman with curly hair",
    },
    criteria: {
      geography: "Mediterranean islands",
      governance: "Council with rotating leadership",
      plots: "25-35",
      collectiveOwnership: "45%",
      natureApproach: "Water conservation and marine protection",
    },
    createdAt: "4 days ago",
  },
  {
    id: 8,
    user: {
      name: "Hiroshi Tanaka",
      avatar: "/placeholder.svg?height=40&width=40&query=portrait of a japanese man",
    },
    criteria: {
      geography: "Mountain regions in Japan",
      governance: "Traditional village council",
      plots: "20-30",
      collectiveOwnership: "40%",
      natureApproach: "Forest bathing and traditional conservation",
    },
    createdAt: "2 weeks ago",
  },
  {
    id: 9,
    user: {
      name: "Camila Ferreira",
      avatar: "/placeholder.svg?height=40&width=40&query=portrait of a brazilian woman",
    },
    criteria: {
      geography: "Atlantic Forest, Brazil",
      governance: "Participatory democracy",
      plots: "40-60",
      collectiveOwnership: "55%",
      natureApproach: "Biodiversity corridors and agroforestry",
    },
    createdAt: "1 week ago",
  },
  {
    id: 10,
    user: {
      name: "Thomas Mueller",
      avatar: "/placeholder.svg?height=40&width=40&query=portrait of a german man",
    },
    criteria: {
      geography: "Black Forest, Germany",
      governance: "Sociocracy",
      plots: "25-35",
      collectiveOwnership: "30%",
      natureApproach: "Sustainable forestry and wildlife protection",
    },
    createdAt: "5 days ago",
  },
  {
    id: 11,
    user: {
      name: "Elena Popova",
      avatar: "/placeholder.svg?height=40&width=40&query=portrait of a russian woman",
    },
    criteria: {
      geography: "Taiga forest regions",
      governance: "Council with elder advisors",
      plots: "15-25",
      collectiveOwnership: "50%",
      natureApproach: "Traditional ecological knowledge",
    },
    createdAt: "2 weeks ago",
  },
  {
    id: 12,
    user: {
      name: "James Wilson",
      avatar: "/placeholder.svg?height=40&width=40&query=portrait of a man with beard",
    },
    criteria: {
      geography: "Pacific Northwest, USA",
      governance: "Direct democracy",
      plots: "30-40",
      collectiveOwnership: "35%",
      natureApproach: "Ecosystem restoration and salmon habitat",
    },
    createdAt: "3 days ago",
  },
  {
    id: 13,
    user: {
      name: "Fatima Al-Farsi",
      avatar: "/placeholder.svg?height=40&width=40&query=portrait of a middle eastern woman",
    },
    criteria: {
      geography: "Mediterranean coast",
      governance: "Council with community forums",
      plots: "20-30",
      collectiveOwnership: "40%",
      natureApproach: "Water conservation and desert greening",
    },
    createdAt: "1 week ago",
  },
  {
    id: 14,
    user: {
      name: "Pierre Dubois",
      avatar: "/placeholder.svg?height=40&width=40&query=portrait of a french man",
    },
    criteria: {
      geography: "French countryside",
      governance: "Cooperative structure",
      plots: "25-40",
      collectiveOwnership: "45%",
      natureApproach: "Permaculture and heritage preservation",
    },
    createdAt: "4 days ago",
  },
]

export default function InterestStatements() {
  const [showAll, setShowAll] = useState(false)
  const displayedStatements = showAll ? interestStatements : interestStatements.slice(0, 6)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#2c5530]">Community Interest Statements</h2>
        <Link href="/create-interest">
          <Button className="bg-[#d4a762] hover:bg-[#c69752] text-black">Share Your Interest</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedStatements.map((statement) => (
          <Card
            key={statement.id}
            className="border-2 border-[#d4a762]/20 hover:border-[#d4a762]/50 transition-all duration-300"
          >
            {/* Card content remains the same */}
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={statement.user.avatar || "/placeholder.svg"} alt={statement.user.name} />
                    <AvatarFallback>
                      {statement.user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{statement.user.name}</CardTitle>
                    <CardDescription>{statement.createdAt}</CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="bg-[#f0ead6] text-[#2c5530]">
                  ID: {statement.id}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 text-[#2c5530] mt-0.5" />
                  <div>
                    <p className="font-medium text-[#2c5530]">Geography</p>
                    <p className="text-sm">{statement.criteria.geography}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Users className="h-5 w-5 text-[#2c5530] mt-0.5" />
                  <div>
                    <p className="font-medium text-[#2c5530]">Governance Style</p>
                    <p className="text-sm">{statement.criteria.governance}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Badge variant="outline" className="h-5 px-2 py-0 text-[#2c5530] mt-0.5">
                    N
                  </Badge>
                  <div>
                    <p className="font-medium text-[#2c5530]">Number of Plots</p>
                    <p className="text-sm">{statement.criteria.plots}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Coins className="h-5 w-5 text-[#2c5530] mt-0.5" />
                  <div>
                    <p className="font-medium text-[#2c5530]">Collective Ownership</p>
                    <p className="text-sm">{statement.criteria.collectiveOwnership}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Leaf className="h-5 w-5 text-[#2c5530] mt-0.5" />
                  <div>
                    <p className="font-medium text-[#2c5530]">Nature Management Approach</p>
                    <p className="text-sm">{statement.criteria.natureApproach}</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-4">
              <Button className="w-full bg-[#2c5530] hover:bg-[#1e3d20]">Contact User</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {!showAll && interestStatements.length > 6 && (
        <div className="mt-6 text-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(true)}
            className="border-[#2c5530] text-[#2c5530] hover:bg-[#2c5530] hover:text-white"
          >
            View All Profiles ({interestStatements.length})
          </Button>
        </div>
      )}
    </div>
  )
}
