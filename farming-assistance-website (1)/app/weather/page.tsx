"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function WeatherAlerts() {
  const [location, setLocation] = useState("Punjab")

  const weatherData = {
    temperature: 28,
    humidity: 65,
    rainfall: 120,
    windSpeed: 15,
    alerts: [
      {
        type: "warning",
        icon: "⚠️",
        title: "Heat Wave Alert",
        description: "Temperature expected to reach 38°C",
        date: "Today",
      },
      {
        type: "info",
        icon: "ℹ️",
        title: "Heavy Rainfall Expected",
        description: "Prepare your fields for waterlogging",
        date: "Tomorrow",
      },
      {
        type: "pest",
        icon: "🐛",
        title: "Fall Armyworm Alert",
        description: "Pest outbreak detected in nearby farms",
        date: "Yesterday",
      },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <div className="flex-1 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2 text-primary">Weather & Pest Alerts</h1>
          <p className="text-center text-foreground-secondary mb-12">
            Real-time weather updates and agricultural alerts
          </p>

          <div className="mb-8">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full max-w-md px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter location"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-surface rounded-lg shadow-md p-6 border border-border text-center">
              <p className="text-sm text-foreground-secondary mb-2">Temperature</p>
              <p className="text-4xl font-bold text-primary">{weatherData.temperature}°C</p>
            </div>
            <div className="bg-surface rounded-lg shadow-md p-6 border border-border text-center">
              <p className="text-sm text-foreground-secondary mb-2">Humidity</p>
              <p className="text-4xl font-bold text-primary">{weatherData.humidity}%</p>
            </div>
            <div className="bg-surface rounded-lg shadow-md p-6 border border-border text-center">
              <p className="text-sm text-foreground-secondary mb-2">Rainfall</p>
              <p className="text-4xl font-bold text-primary">{weatherData.rainfall}mm</p>
            </div>
            <div className="bg-surface rounded-lg shadow-md p-6 border border-border text-center">
              <p className="text-sm text-foreground-secondary mb-2">Wind Speed</p>
              <p className="text-4xl font-bold text-primary">{weatherData.windSpeed}km/h</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-6">Active Alerts</h2>
          <div className="space-y-4">
            {weatherData.alerts.map((alert, idx) => (
              <div
                key={idx}
                className={`rounded-lg shadow-md p-6 border-l-4 ${
                  alert.type === "warning"
                    ? "bg-red-50 border-danger"
                    : alert.type === "pest"
                      ? "bg-orange-50 border-accent"
                      : "bg-blue-50 border-primary"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{alert.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{alert.title}</h3>
                    <p className="text-foreground-secondary mb-2">{alert.description}</p>
                    <p className="text-xs text-foreground-secondary">{alert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-surface rounded-lg shadow-md p-6 border border-border">
            <h2 className="text-2xl font-bold text-primary mb-6">Spray Schedule Recommendations</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-surface-secondary rounded-lg">
                <div>
                  <p className="font-bold">Fungicide Spray</p>
                  <p className="text-sm text-foreground-secondary">Due to high humidity</p>
                </div>
                <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">Schedule Now</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-secondary rounded-lg">
                <div>
                  <p className="font-bold">Pest Control</p>
                  <p className="text-sm text-foreground-secondary">Fall armyworm prevention</p>
                </div>
                <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">Schedule Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
