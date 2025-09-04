"use client"

import { useState } from "react"
import { Star, ChevronDown, ChevronUp, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { BettingSite } from "@/types"

interface SiteCardProps {
  site: BettingSite
  index: number
}

export function SiteCard({ site, index }: SiteCardProps) {
  const [showTerms, setShowTerms] = useState(false)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <div className="relative mb-4">
      {index < 4 && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-3 py-1 shadow-lg">
            <Crown className="w-3 h-3 mr-1" />
            TOP {index + 1}
          </Badge>
        </div>
      )}

      <a href={site.url} target="_blank" rel="noopener noreferrer" className="block">
        <Card
          className={`hover:shadow-lg transition-all duration-300 ${
            index === 0
              ? "border-2 border-french-red bg-gradient-to-br from-red-50 to-white shadow-lg"
              : "hover:border-french-blue/30"
          }`}
        >
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-5 md:gap-4 md:items-center">
              {/* Site Info */}
              <div className="flex items-center space-x-3 sm:space-x-4 md:col-span-1">
                <div className="flex-shrink-0">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${
                      index === 0 ? "bg-french-red text-white" : "bg-gray-100 text-french-blue"
                    }`}
                  >
                    <span className="text-sm sm:text-lg font-bold">#{index + 1}</span>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mt-2">
                    <img
                      src={site.logo || "/placeholder.svg"}
                      alt={`${site.name} logo`}
                      className="h-24 sm:h-48 w-64 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Bonus - Mobile: full width, Desktop: column */}
              <div className="md:col-span-1">
                <div className="bg-gradient-to-br from-french-blue/10 to-blue-50 p-4 rounded-lg border border-french-blue/20">
                  <h4 className="text-sm font-bold text-french-blue mb-2">BONUS</h4>
                  <p className="font-bold text-french-blue text-base md:text-lg leading-tight">{site.bonus}</p>
                </div>
              </div>

              {/* Rating - Mobile: inline, Desktop: column */}
              <div className="flex justify-center md:justify-center">
                <div className="flex flex-col items-center space-y-2">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full font-bold text-sm sm:text-lg text-white ${
                      index === 0
                        ? "bg-gradient-to-br from-french-red to-red-700"
                        : "bg-gradient-to-br from-french-blue to-blue-700"
                    }`}
                  >
                    {site.rating}
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <div className="flex">{renderStars(site.stars)}</div>
                    <span className="text-xs sm:text-sm text-gray-600">({site.reviews})</span>
                  </div>
                </div>
              </div>

              {/* Score - Mobile: inline with rating, Desktop: column */}
              {/* Removed redundant score section */}

              {/* CTA Button - Mobile: full width, Desktop: column */}
              <div className="md:text-center md:col-span-2">
                <Button
                  className={`w-full md:w-auto font-bold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transition-all duration-300 ${
                    index === 0
                      ? "bg-gradient-to-r from-french-red to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg"
                      : "bg-french-red hover:bg-red-600 text-white"
                  }`}
                  onClick={(e) => e.preventDefault()}
                >
                  OBTENIR BONUS
                </Button>
              </div>
            </div>

            {/* Expandable Terms */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button
                onClick={() => setShowTerms(!showTerms)}
                className="flex items-center justify-between w-full text-left text-xs sm:text-sm text-gray-600 hover:text-french-blue transition-colors"
              >
                <span>18+ | T&C s'appliquent | Jouer responsable</span>
                {showTerms ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showTerms && (
                <div className="mt-3 p-3 bg-gray-50 rounded-lg text-xs text-gray-600">
                  <p className="mb-2">
                    <strong>Conditions générales:</strong> Offre réservée aux nouveaux clients. Mise minimum requise.
                    Conditions de mise applicables.
                  </p>

                  <p>
                    <strong>Jeu responsable:</strong> Le jeu peut être addictif. Jouez avec modération. Pour plus
                    d'informations, consultez{" "}
                    <a href="#" className="text-french-blue hover:underline">
                      joueurs-info-service.fr
                    </a>
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </a>
    </div>
  )
}
