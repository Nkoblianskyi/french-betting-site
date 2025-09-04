import { Shield, Award, Users, TrendingUp } from "lucide-react"

export function InfoSections() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Votre Guide Complet pour les Plateformes de Paris Françaises
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto text-pretty px-4">
            Nous analysons et comparons les meilleurs sites de paris sportifs licenciés par l'ANJ pour vous offrir une
            expérience de paris sécurisée et optimale en France.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-french-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="font-semibold text-base sm:text-lg mb-2">Licences ANJ</h3>
            <p className="text-gray-600 text-sm px-2">
              Tous nos partenaires sont licenciés par l'Autorité Nationale des Jeux
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-french-red rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="font-semibold text-base sm:text-lg mb-2">Meilleurs Bonus</h3>
            <p className="text-gray-600 text-sm px-2">Comparaison des offres de bienvenue les plus avantageuses</p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gold-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="font-semibold text-base sm:text-lg mb-2">Avis Experts</h3>
            <p className="text-gray-600 text-sm px-2">Évaluations détaillées par nos experts en paris sportifs</p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="font-semibold text-base sm:text-lg mb-2">Mises à Jour</h3>
            <p className="text-gray-600 text-sm px-2">Informations actualisées quotidiennement sur les offres</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Informations sur le Licenciement ANJ
          </h3>
          <div className="prose prose-sm sm:prose-lg max-w-none text-gray-600">
            <p className="mb-4 text-sm sm:text-base">
              L'Autorité Nationale des Jeux (ANJ) est l'organisme français chargé de réguler et de contrôler les
              activités de jeux d'argent et de hasard en France. Tous les sites de paris sportifs présentés sur notre
              plateforme possèdent une licence ANJ valide, garantissant :
            </p>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-sm sm:text-base">
              <li>La sécurité des fonds des joueurs</li>
              <li>L'équité des jeux et des cotes</li>
              <li>La protection des données personnelles</li>
              <li>Le respect des règles de jeu responsable</li>
              <li>La transparence des conditions générales</li>
            </ul>
            <p className="text-xs sm:text-sm text-gray-500">
              <strong>Jeu responsable :</strong> Le jeu peut être addictif. Jouez avec modération. Si vous ressentez le
              besoin d'aide, contactez Joueurs Info Service au 09 74 75 13 13 (appel non surtaxé) ou consultez{" "}
              <a href="#" className="text-french-blue hover:underline">
                joueurs-info-service.fr
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
