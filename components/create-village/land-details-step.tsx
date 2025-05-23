"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin } from "lucide-react"
import PreferenceInsight from "./preference-insight"

export default function LandDetailsStep({ formData, handleInputChange, prefillData, stats }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-4">
        <MapPin className="h-6 w-6 text-[#2c5530] mr-2" />
        <h2 className="text-2xl font-bold text-[#2c5530]">Land Details</h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Village Title</Label>
          <Input
            id="title"
            name="title"
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

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="e.g., Swiss Alps"
            className={prefillData?.location ? "border-2 border-[#d4a762] bg-[#fff9e6]" : ""}
          />
          {stats?.location && (
            <PreferenceInsight
              isPrefilled={!!prefillData?.location}
              count={stats.location.count}
              percentage={stats.location.percentage}
              suggestions={[
                {
                  text: "European mountain regions are highly sought after (42% of users)",
                  value: "European mountains",
                },
                { text: "Mediterranean locations are also popular (28% of users)", value: "Mediterranean coast" },
              ]}
              onApplySuggestion={(value) => {
                // Create a synthetic event to update the form data
                const event = { target: { name: "location", value } }
                handleInputChange(event)
              }}
            />
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="totalCost">Total Land Cost ($)</Label>
          <Input
            id="totalCost"
            name="totalCost"
            value={formData.totalCost}
            onChange={handleInputChange}
            type="number"
            placeholder="e.g., 2500000"
          />
          <PreferenceInsight
            count={24}
            percentage={35}
            suggestions={[
              { text: "Most users prefer villages in the $1.5M-$3M range", value: "2000000" },
              { text: "Consider smaller plots to reduce per-user cost", value: "1800000" },
            ]}
            onApplySuggestion={(value) => {
              const event = { target: { name: "totalCost", value } }
              handleInputChange(event)
            }}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Land Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Describe the land, its features, accessibility, etc."
            rows={4}
          />
          <PreferenceInsight
            count={18}
            percentage={26}
            suggestions={[
              { text: "Mention natural water sources if available (preferred by 65% of users)" },
              { text: "Highlight accessibility and proximity to amenities" },
            ]}
            onApplySuggestion={(value) => {
              const event = { target: { name: "description", value } }
              handleInputChange(event)
            }}
          />
        </div>
      </div>
    </div>
  )
}
