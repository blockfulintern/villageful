"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Coins } from "lucide-react"
import PreferenceInsight from "./preference-insight"

export default function EconomicsStep({ formData, handleInputChange }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-4">
        <Coins className="h-6 w-6 text-[#d4a762] mr-2" />
        <h2 className="text-2xl font-bold text-[#2c5530]">Economic Structure</h2>
      </div>

      <Card className="bg-[#f5f3e8] border-none">
        <CardContent className="pt-6">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="plots">N (Plots)</Label>
          <Input
            id="plots"
            name="plots"
            value={formData.plots}
            onChange={handleInputChange}
            type="number"
            placeholder="e.g., 25"
          />
          <PreferenceInsight
            count={32}
            percentage={46}
            suggestions={[
              { text: "25-40 plots is the most popular range (46% of users)", value: "30" },
              { text: "Smaller villages (15-25 plots) appeal to 28% of users", value: "20" },
            ]}
            onApplySuggestion={(value) => {
              const event = { target: { name: "plots", value } }
              handleInputChange(event)
            }}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tokensPerPlot">k (Tokens/Plot)</Label>
          <Input
            id="tokensPerPlot"
            name="tokensPerPlot"
            value={formData.tokensPerPlot}
            onChange={handleInputChange}
            type="number"
            placeholder="e.g., 100"
          />
          <PreferenceInsight
            count={29}
            percentage={42}
            suggestions={[
              { text: "80-120 tokens per plot is the most common range", value: "100" },
              { text: "Higher token counts allow for more granular ownership", value: "150" },
            ]}
            onApplySuggestion={(value) => {
              const event = { target: { name: "tokensPerPlot", value } }
              handleInputChange(event)
            }}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ownershipRatio">r (Ownership Ratio)</Label>
          <Input
            id="ownershipRatio"
            name="ownershipRatio"
            value={formData.ownershipRatio}
            onChange={handleInputChange}
            type="number"
            step="0.05"
            min="0"
            max="1"
            placeholder="e.g., 0.7"
          />
          <PreferenceInsight
            count={26}
            percentage={38}
            suggestions={[
              { text: "Average collective ownership is 38%", value: "0.62" },
              { text: "Higher individual ownership (70%+) appeals to 25% of users", value: "0.7" },
            ]}
            onApplySuggestion={(value) => {
              const event = { target: { name: "ownershipRatio", value } }
              handleInputChange(event)
            }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="economicNotes">Additional Economic Notes</Label>
        <Textarea
          id="economicNotes"
          name="economicNotes"
          value={formData.economicNotes}
          onChange={handleInputChange}
          placeholder="Any additional details about the economic structure..."
          rows={3}
        />
        <PreferenceInsight
          count={15}
          percentage={22}
          suggestions={[
            { text: "Consider mentioning phased investment options" },
            { text: "Users value transparency about ongoing costs and maintenance" },
          ]}
          onApplySuggestion={(value) => {
            const event = { target: { name: "economicNotes", value } }
            handleInputChange(event)
          }}
        />
      </div>
    </div>
  )
}
