"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText } from "lucide-react"

export function TermsConditionsModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className="text-xs text-gray-500 hover:text-french-blue p-0 h-auto">
          Conditions Générales
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-french-blue" />
            Conditions Générales d'Utilisation
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="font-semibold text-base mb-3">1. Objet et Champ d'Application</h3>
              <p className="text-gray-600 mb-3">
                Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du site web
                lesportenfrance.com, édité par lesportenfrance.com SARL, société de droit français.
              </p>
              <p className="text-gray-600">
                L'utilisation du site implique l'acceptation pleine et entière des présentes CGU.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-3">2. Description du Service</h3>
              <p className="text-gray-600 mb-3">
                lesportenfrance.com est un site d'information et de comparaison des sites de paris sportifs licenciés en
                France. Nous fournissons :
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>Des comparaisons objectives des opérateurs de paris</li>
                <li>Des informations sur les bonus et promotions</li>
                <li>Des guides et conseils sur les paris sportifs</li>
                <li>Des liens vers les sites partenaires</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-3">3. Conditions d'Accès</h3>
              <p className="text-gray-600 mb-3">
                L'accès au site est réservé aux personnes majeures (18 ans et plus) résidant en France. L'utilisateur
                certifie sur l'honneur respecter cette condition.
              </p>
              <p className="text-gray-600">
                L'accès au site est gratuit. Seuls les coûts de connexion internet restent à la charge de l'utilisateur.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-3">4. Utilisation du Site</h3>
              <p className="text-gray-600 mb-3">L'utilisateur s'engage à :</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>Utiliser le site conformément à sa destination</li>
                <li>Ne pas porter atteinte à l'ordre public et aux bonnes mœurs</li>
                <li>Respecter les droits de propriété intellectuelle</li>
                <li>Ne pas tenter de nuire au fonctionnement du site</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-3">5. Propriété Intellectuelle</h3>
              <p className="text-gray-600">
                Tous les éléments du site (textes, images, logos, etc.) sont protégés par le droit de la propriété
                intellectuelle. Toute reproduction sans autorisation est interdite.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-3">6. Responsabilité</h3>
              <p className="text-gray-600 mb-3">
                lesportenfrance.com s'efforce de fournir des informations exactes et à jour, mais ne peut garantir
                l'exactitude, la complétude ou l'actualité des informations diffusées.
              </p>
              <p className="text-gray-600">
                L'utilisateur reconnaît utiliser les informations sous sa seule responsabilité.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-3">7. Liens Externes</h3>
              <p className="text-gray-600">
                Les liens vers les sites partenaires sont fournis à titre informatif. lesportenfrance.com n'est pas
                responsable du contenu de ces sites externes.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-3">8. Jeu Responsable</h3>
              <p className="text-gray-600 mb-3">
                lesportenfrance.com promeut le jeu responsable. Les paris sportifs comportent des risques financiers et
                peuvent créer une dépendance.
              </p>
              <p className="text-gray-600">
                En cas de problème de jeu, contactez Joueurs Info Service : 09 74 75 13 13
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-3">9. Modification des CGU</h3>
              <p className="text-gray-600">
                Les présentes CGU peuvent être modifiées à tout moment. Les modifications prennent effet dès leur
                publication sur le site.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-3">10. Droit Applicable</h3>
              <p className="text-gray-600">
                Les présentes CGU sont soumises au droit français. Tout litige sera de la compétence exclusive des
                tribunaux français.
              </p>
            </section>

            <div className="bg-gray-50 rounded-lg p-4 mt-6">
              <p className="text-xs text-gray-500">
                <strong>Dernière mise à jour :</strong> 4 septembre 2025
                <br />
                <strong>Contact :</strong> legal@lesportenfrance.com
              </p>
            </div>
          </div>
        </ScrollArea>
        <div className="flex justify-end pt-4">
          <Button onClick={() => setIsOpen(false)} className="bg-french-blue hover:bg-blue-700 text-white">
            Fermer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
