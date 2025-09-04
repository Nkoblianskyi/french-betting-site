"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AlertTriangle } from "lucide-react"

export function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAgeQuestion, setShowAgeQuestion] = useState(false)

  useEffect(() => {
    // Check if user has already verified age
    const hasVerified = localStorage.getItem("age-verified")
    if (!hasVerified) {
      setIsOpen(true)
    }
  }, [])

  const handleYes = () => {
    console.log("[v0] User confirmed age verification")
    localStorage.setItem("age-verified", "true")
    setIsOpen(false)
    setShowAgeQuestion(false)
  }

  const handleNo = () => {
    setIsOpen(false)
    setShowAgeQuestion(true)
  }

  const handleUnderAge = () => {
    // Redirect to responsible gaming resources
    window.location.href = "https://www.joueurs-info-service.fr/"
  }

  if (showAgeQuestion) {
    return (
      <Dialog open={showAgeQuestion} onOpenChange={setShowAgeQuestion}>
        <DialogContent className="sm:max-w-md" hideClose>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-french-red">
              <AlertTriangle className="w-5 h-5" />
              Accès Restreint
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-french-red rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white font-bold">18+</span>
            </div>
            <h3 className="text-lg font-semibold mb-4">Accès Interdit aux Mineurs</h3>
            <p className="text-gray-600 mb-6">
              Ce site est exclusivement réservé aux personnes majeures. Les paris sportifs sont interdits aux mineurs.
            </p>
            <div className="space-y-3">
              <p className="text-sm text-gray-500 mb-4">Confirmez-vous avoir 18 ans ou plus ?</p>
              <div className="flex gap-3 justify-center">
                <Button onClick={handleYes} className="bg-green-500 hover:bg-green-600 text-white">
                  Oui, j'ai 18 ans ou plus
                </Button>
                <Button
                  onClick={handleUnderAge}
                  variant="outline"
                  className="border-french-red text-french-red hover:bg-french-red hover:text-white bg-transparent"
                >
                  Non, j'ai moins de 18 ans
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md" hideClose>
        <DialogHeader>
          <DialogTitle className="text-center text-french-blue">Bienvenue sur lesportenfrance.com</DialogTitle>
        </DialogHeader>
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-french-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white font-bold">18+</span>
          </div>
          <h3 className="text-lg font-semibold mb-4">Vérification d'Âge Requise</h3>
          <p className="text-gray-600 mb-6">
            Ce site contient des informations sur les paris sportifs et est réservé aux personnes majeures résidant en
            France.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-yellow-800">
              <strong>Important :</strong> Les paris sportifs comportent des risques. Jouez avec modération et de
              manière responsable.
            </p>
          </div>
          <p className="text-sm text-gray-500 mb-4">Êtes-vous majeur(e) et résidez-vous en France ?</p>
          <div className="flex gap-3 justify-center">
            <Button onClick={handleYes} className="bg-french-blue hover:bg-blue-700 text-white">
              Oui, continuer
            </Button>
            <Button
              onClick={handleNo}
              variant="outline"
              className="border-french-red text-french-red hover:bg-french-red hover:text-white bg-transparent"
            >
              Non
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
