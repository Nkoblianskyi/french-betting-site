import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Cookies</h1>
          <p className="text-lg text-gray-600 mb-8">Dernière mise à jour : 4 septembre 2025</p>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu'est-ce qu'un cookie ?</h2>
              <p>
                Un cookie est un petit fichier texte stocké sur votre ordinateur, tablette ou smartphone lorsque vous
                visitez notre site web lesportenfrance.com. Les cookies nous permettent de reconnaître votre navigateur
                et de capturer et mémoriser certaines informations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types de cookies que nous utilisons</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookies strictement nécessaires</h3>
                  <p>
                    Ces cookies sont essentiels au fonctionnement de notre site web. Ils vous permettent de naviguer sur
                    le site et d'utiliser ses fonctionnalités. Sans ces cookies, les services que vous avez demandés ne
                    peuvent pas être fournis.
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Cookies de session pour maintenir votre connexion</li>
                    <li>Cookies de sécurité pour protéger contre les attaques</li>
                    <li>Cookies de préférences linguistiques</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookies de performance</h3>
                  <p>
                    Ces cookies collectent des informations sur la façon dont vous utilisez notre site web, comme les
                    pages que vous visitez le plus souvent. Ces données nous aident à améliorer le fonctionnement de
                    notre site.
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Google Analytics pour analyser le trafic du site</li>
                    <li>Cookies de mesure d'audience</li>
                    <li>Cookies de temps de chargement des pages</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookies de fonctionnalité</h3>
                  <p>
                    Ces cookies permettent au site web de se souvenir des choix que vous faites et de fournir des
                    fonctionnalités améliorées et plus personnelles.
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Préférences de langue et de région</li>
                    <li>Paramètres d'affichage personnalisés</li>
                    <li>Historique de navigation sur le site</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookies publicitaires</h3>
                  <p>
                    Ces cookies sont utilisés pour diffuser des publicités plus pertinentes pour vous et vos intérêts.
                    Ils sont également utilisés pour limiter le nombre de fois que vous voyez une publicité.
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Cookies de ciblage publicitaire</li>
                    <li>Cookies de mesure de performance publicitaire</li>
                    <li>Cookies de partenaires publicitaires</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Gestion de vos cookies</h2>
              <p className="mb-4">
                Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Vous pouvez supprimer tous
                les cookies qui sont déjà sur votre ordinateur et vous pouvez configurer la plupart des navigateurs pour
                empêcher qu'ils soient placés.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-yellow-800">
                  <strong>Attention :</strong> Si vous désactivez les cookies, certaines fonctionnalités de notre site
                  peuvent ne pas fonctionner correctement.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Comment gérer les cookies dans votre navigateur :
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies et autres données de site
                </li>
                <li>
                  <strong>Firefox :</strong> Paramètres → Vie privée et sécurité → Cookies et données de sites
                </li>
                <li>
                  <strong>Safari :</strong> Préférences → Confidentialité → Gérer les données de site web
                </li>
                <li>
                  <strong>Edge :</strong> Paramètres → Cookies et autorisations de site → Gérer et supprimer les cookies
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies tiers</h2>
              <p>
                Notre site peut contenir des cookies provenant de services tiers tels que Google Analytics, réseaux
                sociaux, ou partenaires publicitaires. Ces cookies sont régis par les politiques de confidentialité
                respectives de ces tiers.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Google Analytics : pour analyser l'utilisation du site</li>
                <li>Réseaux sociaux : pour les boutons de partage</li>
                <li>Partenaires bookmakers : pour le suivi des conversions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <p>
                Si vous avez des questions concernant notre utilisation des cookies, vous pouvez nous contacter à
                l'adresse :{" "}
                <a href="mailto:privacy@lesportenfrance.com" className="text-french-blue hover:underline">
                  privacy@lesportenfrance.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
