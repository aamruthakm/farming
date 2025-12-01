"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Marketplace() {
  const [filter, setFilter] = useState("all")
  const [cart, setCart] = useState<any[]>([])

  const products = [
    { id: 1, name: "Premium Rice Seeds", type: "seeds", price: 450, seller: "Seed Masters", rating: 4.8, reviews: 234 },
    {
      id: 2,
      name: "Organic Fertilizer (50kg)",
      type: "fertilizer",
      price: 800,
      seller: "Green Earth",
      rating: 4.6,
      reviews: 156,
    },
    {
      id: 3,
      name: "Wheat Crop (Per Quintal)",
      type: "crop",
      price: 2500,
      seller: "Harvest Plus",
      rating: 4.9,
      reviews: 89,
    },
    { id: 4, name: "Cotton Seeds Bundle", type: "seeds", price: 600, seller: "AgriTech", rating: 4.7, reviews: 145 },
    {
      id: 5,
      name: "Neem Pesticide (1L)",
      type: "pesticide",
      price: 350,
      seller: "Bio Defence",
      rating: 4.5,
      reviews: 203,
    },
    {
      id: 6,
      name: "Corn Crop (Per Quintal)",
      type: "crop",
      price: 2200,
      seller: "Farm Direct",
      rating: 4.8,
      reviews: 112,
    },
    {
      id: 7,
      name: "NPK Fertilizer (25kg)",
      type: "fertilizer",
      price: 1200,
      seller: "ChemAg",
      rating: 4.4,
      reviews: 98,
    },
    { id: 8, name: "Sugarcane Saplings", type: "seeds", price: 150, seller: "Green Valley", rating: 4.7, reviews: 176 },
  ]

  const filtered = products.filter((p) => filter === "all" || p.type === filter)

  const addToCart = (product: any) => {
    setCart([...cart, { ...product, quantity: 1 }])
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <div className="flex-1 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2 text-primary">Agricultural Marketplace</h1>
          <p className="text-center text-foreground-secondary mb-12">
            Buy and sell seeds, fertilizers, and crops directly from farmers
          </p>

          <div className="bg-surface rounded-lg shadow-md p-6 mb-12 border border-border">
            <h3 className="font-bold mb-4 text-primary">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              {["all", "seeds", "fertilizer", "crop", "pesticide"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-lg transition ${
                    filter === cat
                      ? "bg-primary text-white"
                      : "bg-surface-secondary text-foreground-secondary hover:bg-border"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="bg-surface rounded-lg shadow-md border border-border overflow-hidden hover:shadow-lg transition"
              >
                <div className="bg-blue-50 h-32 flex items-center justify-center text-5xl">
                  {product.type === "seeds"
                    ? "🌱"
                    : product.type === "fertilizer"
                      ? "🧪"
                      : product.type === "crop"
                        ? "🌾"
                        : "🛡️"}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">{product.name}</h3>
                  <p className="text-sm text-foreground-secondary mb-1">{product.seller}</p>
                  <div className="flex items-center gap-1 mb-4">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-foreground-secondary">({product.reviews} reviews)</span>
                  </div>
                  <p className="text-2xl font-bold text-accent mb-4">₹{product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-light transition font-semibold text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {cart.length > 0 && (
            <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
              <h2 className="text-2xl font-bold text-primary mb-6">Shopping Cart ({cart.length} items)</h2>
              <div className="space-y-4 mb-6">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 bg-surface-secondary rounded-lg">
                    <div>
                      <p className="font-bold text-primary">{item.name}</p>
                      <p className="text-sm text-foreground-secondary">{item.seller}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">₹{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-surface-secondary text-foreground-secondary py-3 rounded-lg hover:bg-border transition font-semibold">
                  Continue Shopping
                </button>
                <button className="flex-1 bg-primary text-white py-3 rounded-lg hover:bg-primary-light transition font-semibold">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
