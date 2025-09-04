"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Info } from "lucide-react"

export function AdvertiserDisclosureModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className="text-xs text-gray-500 hover:text-french-blue p-0 h-auto">
          Divulgation Publicitaire
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Info className="w-5 h-5 text-french-blue" />
            Divulgation des Relations Commerciales
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-french-blue mb-2">Transparence et Honnêteté</h3>
            <p className="text-sm text-gray-700">
              Nous nous engageons à fournir des informations transparentes sur nos relations commerciales avec les
              opérateurs de paris sportifs.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Relations d'Affiliation</h4>
            <p className="text-sm text-gray-600">
              lesportenfrance.com entretient des relations commerciales avec certains opérateurs de paris sportifs
              présentés sur notre site. Lorsque vous cliquez sur nos liens et vous inscrivez chez un partenaire, nous
              pouvons recevoir une commission.
            </p>

            <h4 className="font-semibold text-gray-900">Impact sur nos Recommandations</h4>
            <p className="text-sm text-gray-600">
              Nos évaluations et classements sont basés sur des critères objectifs incluant :
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
              <li>Sécurité et licences ANJ</li>
              <li>Qualité des bonus et promotions</li>
              <li>Variété des marchés de paris</li>
              <li>Compétitivité des cotes</li>
              <li>Qualité du service client</li>
              <li>Facilité d'utilisation de la plateforme</li>
            </ul>

            <h4 className="font-semibold text-gray-900">Nos Partenaires</h4>
            <p className="text-sm text-gray-600">
              Nous travaillons uniquement avec des opérateurs licenciés par l'ANJ et respectant les standards de
              sécurité français. La présence d'un opérateur sur notre site ne garantit pas qu'il soit le meilleur choix
              pour tous les utilisateurs.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Recommandation Importante</h4>
              <p className="text-sm text-yellow-700">
                Nous vous encourageons à comparer plusieurs opérateurs et à lire attentivement leurs conditions
                générales avant de vous inscrire. Pariez toujours de manière responsable.
              </p>
            </div>

            <h4 className="font-semibold text-gray-900">Contact</h4>
            <p className="text-sm text-gray-600">
              Pour toute question concernant nos relations commerciales :
              <a href="mailto:transparency@lesportenfrance.com" className="text-french-blue hover:underline ml-1">
                transparency@lesportenfrance.com
              </a>
            </p>
          </div>

          <div className="flex justify-end">
            <Button onClick={() => setIsOpen(false)} className="bg-french-blue hover:bg-blue-700 text-white">
              J'ai Compris
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
