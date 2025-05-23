import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import VillageProposals from "@/components/village-proposals"
import InterestStatements from "@/components/interest-statements"
import { MapPin, Coins, Gavel, Leaf } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f3e8]">
      <header className="bg-[#2c5530] text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">New Village Opportunities</h1>
          <Link href="/create-village">
            <Button className="bg-[#d4a762] hover:bg-[#c69752] text-black">
              <PlusCircle className="mr-2 h-4 w-4" />
              Create New Village Proposal
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        {/* Data Summary Section */}
        <div className="mb-10 bg-white rounded-lg shadow-md p-6 border-2 border-[#2c5530]/20">
          <h2 className="text-2xl font-bold text-[#2c5530] mb-4">Community Preferences Summary</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-[#f5f3e8] p-4 rounded-md">
              <h3 className="font-semibold text-[#2c5530] mb-2 flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Top Locations
              </h3>
              <ol className="list-decimal pl-5 text-sm">
                <li>Europe (42%)</li>
                <li>Mediterranean (28%)</li>
                <li>South America (15%)</li>
                <li>Pacific Northwest (10%)</li>
                <li>Other (5%)</li>
              </ol>
            </div>

            <div className="bg-[#f5f3e8] p-4 rounded-md">
              <h3 className="font-semibold text-[#2c5530] mb-2 flex items-center">
                <Coins className="h-4 w-4 mr-2" />
                Price Expectations
              </h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Average Budget:</span> $2.4M
                </p>
                <p>
                  <span className="font-medium">Preferred Plot Range:</span> 25-40
                </p>
                <p>
                  <span className="font-medium">Avg. Collective Ownership:</span> 38%
                </p>
                <p>
                  <span className="font-medium">Typical Token/Plot:</span> 80-120
                </p>
              </div>
            </div>

            <div className="bg-[#f5f3e8] p-4 rounded-md">
              <h3 className="font-semibold text-[#2c5530] mb-2 flex items-center">
                <Gavel className="h-4 w-4 mr-2" />
                Governance Preferences
              </h3>
              <ol className="list-decimal pl-5 text-sm">
                <li>Direct Democracy (35%)</li>
                <li>Council-based (25%)</li>
                <li>Sociocracy (20%)</li>
                <li>Consensus (15%)</li>
                <li>Other (5%)</li>
              </ol>
            </div>

            <div className="bg-[#f5f3e8] p-4 rounded-md">
              <h3 className="font-semibold text-[#2c5530] mb-2 flex items-center">
                <Leaf className="h-4 w-4 mr-2" />
                Nature Management
              </h3>
              <ol className="list-decimal pl-5 text-sm">
                <li>Conservation (40%)</li>
                <li>Regenerative (30%)</li>
                <li>Indigenous Practices (15%)</li>
                <li>Permaculture (10%)</li>
                <li>Other (5%)</li>
              </ol>
            </div>
          </div>

          <div className="bg-[#f0ead6] p-4 rounded-md">
            <h3 className="font-semibold text-[#2c5530] mb-2">Trending Combinations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white p-3 rounded-md">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-medium text-[#2c5530]">Mountain Eco-Communities</p>
                  <Link
                    href={{
                      pathname: "/create-village",
                      query: {
                        title: "Mountain Eco-Community",
                        location: "European mountains",
                        governance: "direct",
                        natureApproach: "conservation",
                        stats: JSON.stringify({
                          location: { count: 42, percentage: 42 },
                          governance: { count: 35, percentage: 35 },
                          natureApproach: { count: 40, percentage: 40 },
                          suggestion: "Adding council elements could appeal to 25% more users",
                        }),
                      },
                    }}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs border-[#2c5530] text-[#2c5530] hover:bg-[#2c5530] hover:text-white"
                    >
                      Propose
                    </Button>
                  </Link>
                </div>
                <p>European mountains + Direct Democracy + Conservation focus</p>
              </div>
              <div className="bg-white p-3 rounded-md">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-medium text-[#2c5530]">Coastal Regenerative Villages</p>
                  <Link
                    href={{
                      pathname: "/create-village",
                      query: {
                        title: "Coastal Regenerative Village",
                        location: "Mediterranean coast",
                        governance: "sociocracy",
                        natureApproach: "regenerative",
                        stats: JSON.stringify({
                          location: { count: 28, percentage: 28 },
                          governance: { count: 20, percentage: 20 },
                          natureApproach: { count: 30, percentage: 30 },
                          suggestion: "Adding permaculture elements could appeal to 10% more users",
                        }),
                      },
                    }}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs border-[#2c5530] text-[#2c5530] hover:bg-[#2c5530] hover:text-white"
                    >
                      Propose
                    </Button>
                  </Link>
                </div>
                <p>Mediterranean coast + Sociocracy + Regenerative agriculture</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section - Now secondary focus */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-[#2c5530] mb-4">Browse Details</h2>
          <Tabs defaultValue="join" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="join" className="text-lg py-3">
                Join a Village
              </TabsTrigger>
              <TabsTrigger value="interest" className="text-lg py-3">
                Share Your Interest
              </TabsTrigger>
            </TabsList>
            <TabsContent value="join">
              <VillageProposals />
            </TabsContent>
            <TabsContent value="interest">
              <InterestStatements />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <footer className="bg-[#2c5530] text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>© 2024 New Village Opportunities. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
