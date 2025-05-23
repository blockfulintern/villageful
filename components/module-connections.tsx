"use client"

import { useEffect, useRef } from "react"

export default function ModuleConnections() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Define module positions (normalized coordinates)
    const modules = [
      { x: 0.2, y: 0.2, radius: 30, color: "#2c5530", label: "Governance" },
      { x: 0.8, y: 0.2, radius: 30, color: "#d4a762", label: "Reimbursement" },
      { x: 0.2, y: 0.8, radius: 30, color: "#5a7d8c", label: "Operations" },
      { x: 0.8, y: 0.8, radius: 30, color: "#6b8e23", label: "Nature" },
    ]

    // Draw connections
    ctx.lineWidth = 2
    ctx.strokeStyle = "#aaa"

    // Governance to Operations
    ctx.beginPath()
    ctx.moveTo(modules[0].x * canvas.width, modules[0].y * canvas.height)
    ctx.lineTo(modules[2].x * canvas.width, modules[2].y * canvas.height)
    ctx.stroke()

    // Governance to Reimbursement
    ctx.beginPath()
    ctx.moveTo(modules[0].x * canvas.width, modules[0].y * canvas.height)
    ctx.lineTo(modules[1].x * canvas.width, modules[1].y * canvas.height)
    ctx.stroke()

    // Operations to Nature
    ctx.beginPath()
    ctx.moveTo(modules[2].x * canvas.width, modules[2].y * canvas.height)
    ctx.lineTo(modules[3].x * canvas.width, modules[3].y * canvas.height)
    ctx.stroke()

    // Reimbursement to Nature
    ctx.beginPath()
    ctx.moveTo(modules[1].x * canvas.width, modules[1].y * canvas.height)
    ctx.lineTo(modules[3].x * canvas.width, modules[3].y * canvas.height)
    ctx.stroke()

    // Draw modules
    modules.forEach((module) => {
      // Draw circle
      ctx.beginPath()
      ctx.arc(module.x * canvas.width, module.y * canvas.height, module.radius, 0, Math.PI * 2)
      ctx.fillStyle = module.color
      ctx.fill()

      // Draw label
      ctx.fillStyle = "white"
      ctx.font = "12px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(module.label, module.x * canvas.width, module.y * canvas.height)
    })
  }, [])

  return (
    <div className="p-3 bg-white rounded-md border border-gray-200 mb-3">
      <h4 className="text-center text-sm font-medium mb-2 text-[#2c5530]">Module Connections</h4>
      <canvas ref={canvasRef} className="w-full h-[180px]" style={{ touchAction: "none" }} />
    </div>
  )
}
