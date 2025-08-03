"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import {
  ChevronDown,
  Shirt,
  Home,
  Sofa,
  Car,
  Baby,
  Sparkles,
  Droplets,
  Snowflake,
  Flame,
  AlertTriangle,
  Copy,
} from "lucide-react"

const recipes = [
  {
    id: "daily-cotton",
    name: "Daily Cotton",
    icon: Shirt,
    color: "#FF6B6B",
    steps: ["Scrape off excess slime gently", "Mix white vinegar + warm water (1:1)", "Rinse and wash normally"],
    ingredients: [
      { name: "White Vinegar", icon: "🍶" },
      { name: "Warm Water", icon: "💧" },
      { name: "Soft Brush", icon: "🪥" },
    ],
  },
  {
    id: "delicate-wool",
    name: "Delicate Wool",
    icon: Home,
    color: "#4ECDC4",
    steps: ["Freeze garment for 2 hours", "Peel off hardened slime carefully", "Dab with cold water + mild soap"],
    ingredients: [
      { name: "Freezer", icon: "❄️" },
      { name: "Mild Soap", icon: "🧼" },
      { name: "Cold Water", icon: "💧" },
    ],
  },
  {
    id: "carpet-deep",
    name: "Carpet Deep",
    icon: Sofa,
    color: "#45B7D1",
    steps: ["Apply ice cubes to harden slime", "Scrape with plastic spoon", "Clean with dish soap + club soda"],
    ingredients: [
      { name: "Ice Cubes", icon: "🧊" },
      { name: "Dish Soap", icon: "🧽" },
      { name: "Club Soda", icon: "🥤" },
    ],
  },
  {
    id: "car-upholstery",
    name: "Car Upholstery",
    icon: Car,
    color: "#96CEB4",
    steps: ["Let slime dry completely first", "Vacuum loose pieces carefully", "Treat with rubbing alcohol + cloth"],
    ingredients: [
      { name: "Vacuum", icon: "🔌" },
      { name: "Rubbing Alcohol", icon: "🍶" },
      { name: "Microfiber Cloth", icon: "🧽" },
    ],
  },
  {
    id: "kids-clothes",
    name: "Kids Clothes",
    icon: Baby,
    color: "#FFEAA7",
    steps: ["Soak in warm water 30 minutes", "Rub with liquid laundry detergent", "Wash in hottest safe water"],
    ingredients: [
      { name: "Liquid Detergent", icon: "🧴" },
      { name: "Warm Water", icon: "💧" },
      { name: "Soft Brush", icon: "🪥" },
    ],
  },
  {
    id: "stubborn-stains",
    name: "Stubborn Stains",
    icon: Sparkles,
    color: "#DDA0DD",
    steps: ["Make paste: baking soda + water", "Let sit for 15 minutes", "Scrub gently and rinse thoroughly"],
    ingredients: [
      { name: "Baking Soda", icon: "🥄" },
      { name: "Water", icon: "💧" },
      { name: "Old Toothbrush", icon: "🪥" },
    ],
  },
  {
    id: "emergency-quick",
    name: "Emergency Quick",
    icon: Droplets,
    color: "#FF7675",
    steps: ["Rinse immediately with cold water", "Apply hand sanitizer to stain", "Blot and rinse again"],
    ingredients: [
      { name: "Cold Water", icon: "💧" },
      { name: "Hand Sanitizer", icon: "🧴" },
      { name: "Paper Towels", icon: "🧻" },
    ],
  },
]

export default function SlimeRemovalGuide() {
  const { toast } = useToast()

  const scrollToRecipe = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 120 // Account for sticky header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const copySteps = (recipe: (typeof recipes)[0]) => {
    const text = `${recipe.name} - Slime Removal Steps:\n\n${recipe.steps.map((step, i) => `${i + 1}. ${step}`).join("\n")}\n\nIngredients needed: ${recipe.ingredients.map((ing) => ing.name).join(", ")}`

    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied!",
        description: "Recipe steps copied to clipboard",
        duration: 2000,
      })
    })
  }

  return (
    <div className="min-h-screen bg-[#f7f9fc]" style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#f7f9fc] to-[#e8f4f8]">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Got Slime on Fabric?
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-normal">
            7 Home Recipes → 3 Simple Steps → Stain Gone.
          </p>
          <Button
            onClick={() => scrollToRecipe("quick-start")}
            className="bg-[#00c4b4] hover:bg-[#00a89c] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Pick Your Fabric Below
          </Button>

          {/* Animated Down Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-[#00c4b4]" />
          </div>
        </div>
      </section>

      {/* Quick Start Bar */}
      <section id="quick-start" className="py-12 bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Choose Your Situation</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {recipes.map((recipe) => {
              const IconComponent = recipe.icon
              return (
                <button
                  key={recipe.id}
                  onClick={() => scrollToRecipe(recipe.id)}
                  className="flex flex-col items-center p-4 rounded-full hover:scale-110 transition-transform duration-200 group"
                  style={{ backgroundColor: recipe.color + "20" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-2 shadow-lg group-hover:shadow-xl transition-shadow"
                    style={{ backgroundColor: recipe.color }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center max-w-20">{recipe.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recipe Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {recipes.map((recipe) => {
              const IconComponent = recipe.icon
              return (
                <Card
                  key={recipe.id}
                  id={recipe.id}
                  className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3 gap-0">
                      {/* Left: Icon + Name */}
                      <div
                        className="p-8 flex flex-col items-center justify-center text-white relative"
                        style={{ backgroundColor: recipe.color }}
                      >
                        <IconComponent className="w-16 h-16 mb-4" />
                        <h3 className="text-2xl font-bold text-center">{recipe.name}</h3>

                        {/* Copy Button */}
                        <Button
                          onClick={() => copySteps(recipe)}
                          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white border-white/30 p-2"
                          size="sm"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Middle: 3-Step Timeline */}
                      <div className="p-8 bg-gray-50">
                        <h4 className="text-lg font-semibold mb-6 text-gray-900">3 Simple Steps</h4>
                        <div className="space-y-4">
                          {recipe.steps.map((step, index) => (
                            <div key={index} className="flex items-start gap-4">
                              <div
                                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                                style={{ backgroundColor: recipe.color }}
                              >
                                {index + 1}
                              </div>
                              <p className="text-gray-700 font-normal leading-relaxed">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Ingredients */}
                      <div className="p-8">
                        <h4 className="text-lg font-semibold mb-6 text-gray-900">You'll Need</h4>
                        <div className="space-y-3">
                          {recipe.ingredients.map((ingredient, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <span className="text-2xl">{ingredient.icon}</span>
                              <span className="text-gray-700 font-normal">{ingredient.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Pro Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Snowflake className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Freeze & Peel</h3>
                <p className="text-gray-600 leading-relaxed">
                  For thick, gooey slime, put the item in the freezer for 2-3 hours. The slime will harden and peel off
                  much easier, reducing fabric damage.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Flame className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Hot Water Soak</h3>
                <p className="text-gray-600 leading-relaxed">
                  For dried, crusty slime, soak in the hottest water safe for your fabric. This softens the slime and
                  makes removal much gentler on fibers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Caution Footer */}
      <footer className="py-12 px-4 bg-yellow-50 border-t-4 border-yellow-400">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-8 h-8 text-yellow-600 mr-3" />
            <h3 className="text-2xl font-bold text-yellow-800">Important Warnings</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shirt className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Silk & Wool</h4>
              <p className="text-sm text-gray-600">Always test on hidden area first. Use cold water only.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Dark Colors</h4>
              <p className="text-sm text-gray-600">Test color-fastness in inconspicuous spot before treating.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Never Machine Wash</h4>
              <p className="text-sm text-gray-600">
                Don't put slime-stained items directly in washer without pre-treatment.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-yellow-200">
            <p className="text-yellow-700 font-medium">
              💡 When in doubt, consult a professional cleaner for expensive or delicate items.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
