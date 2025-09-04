"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie, Settings, X } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  })

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto shadow-lg border-2 border-french-blue">
        <CardContent className="p-6">
          {!showSettings ? (
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="w-6 h-6 text-french-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Nous utilisons des cookies</h3>
                  <p className="text-sm text-gray-600 text-pretty">
                    Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le
                    contenu. Certains cookies sont nécessaires au fonctionnement du site.{" "}
                    <Link href="/politique-cookies" className="text-french-blue hover:underline">
                      En savoir plus
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                <Button
                  onClick={() => setShowSettings(true)}
                  variant="outline"
                  size="sm"
                  className="border-french-blue text-french-blue hover:bg-french-blue hover:text-white"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Paramètres
                </Button>
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  size="sm"
                  className="border-gray-300 bg-transparent"
                >
                  Refuser
                </Button>
                <Button onClick={handleAcceptAll} size="sm" className="bg-french-blue hover:bg-blue-700 text-white">
                  Accepter Tout
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Paramètres des Cookies</h3>
                <Button onClick={() => setShowSettings(false)} variant="ghost" size="sm">
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">Cookies Nécessaires</h4>
                    <p className="text-xs text-gray-600">Requis pour le fonctionnement du site</p>
                  </div>
                  <div className="text-sm text-gray-500">Toujours activé</div>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">Cookies d'Analyse</h4>
                    <p className="text-xs text-gray-600">Nous aident à améliorer le site</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-french-blue"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">Cookies Marketing</h4>
                    <p className="text-xs text-gray-600">Pour la publicité personnalisée</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences((prev) => ({ ...prev, marketing: e.target.checked }))}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-french-blue"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">Cookies Fonctionnels</h4>
                    <p className="text-xs text-gray-600">Pour les fonctionnalités avancées</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) => setPreferences((prev) => ({ ...prev, functional: e.target.checked }))}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-french-blue"></div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  size="sm"
                  className="border-gray-300 bg-transparent"
                >
                  Refuser Tout
                </Button>
                <Button
                  onClick={handleSavePreferences}
                  size="sm"
                  className="bg-french-blue hover:bg-blue-700 text-white"
                >
                  Sauvegarder les Préférences
                </Button>
                <Button onClick={handleAcceptAll} size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                  Accepter Tout
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
