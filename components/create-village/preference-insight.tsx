"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Users, ArrowRight } from "lucide-react"

export default function PreferenceInsight({
  isPrefilled = false,
  count,
  percentage,
  suggestions = [],
  onApplySuggestion = (value) => {}, // Add this callback prop with a default no-op function
}) {
  const [expanded, setExpanded] = useState(false)

  const handleSuggestionClick = (value) => {
    // Call the callback function to update the parent form field
    onApplySuggestion(value)
  }

  return (
    <div className="mt-1 text-xs">
      <div className="flex items-center">
        {isPrefilled && <span className="bg-[#d4a762]/20 px-2 py-1 rounded-full mr-2">Prefilled</span>}
        <div className="flex items-center text-[#2c5530]">
          <Users className="h-3 w-3 mr-1" />
          <span>
            {count} users ({percentage}%) have similar preferences
          </span>
        </div>
        <Button variant="ghost" size="sm" className="h-5 w-5 p-0 ml-1" onClick={() => setExpanded(!expanded)}>
          {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        </Button>
      </div>

      {expanded && suggestions.length > 0 && (
        <div className="mt-2 pl-4 space-y-2">
          <p className="font-medium text-[#2c5530]">Suggestions to reach more users:</p>
          <ul className="space-y-1.5">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#2c5530] mr-1.5">•</span>
                <span className="flex-1">{suggestion.text}</span>
                {suggestion.value && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-5 ml-1 text-[#2c5530] p-0 hover:bg-[#2c5530]/10"
                    onClick={() => handleSuggestionClick(suggestion.value)}
                  >
                    <ArrowRight className="h-3 w-3 mr-1" />
                    Apply
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
