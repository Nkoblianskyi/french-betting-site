import { Shield, CheckCircle, Star, Users, Award, Clock } from "lucide-react"

export function SelectionCriteria() {
  const criteria = [
    {
      icon: Shield,
      title: "Licence ANJ",
      description: "Tous les sites doivent posséder une licence valide de l'Autorité Nationale des Jeux",
    },
    {
      icon: Star,
      title: "Qualité du Service",
      description: "Évaluation de l'interface utilisateur, de la facilité d'utilisation et de l'expérience client",
    },
    {
      icon: Award,
      title: "Bonus et Promotions",
      description: "Analyse des offres de bienvenue, conditions de mise et avantages pour les joueurs",
    },
    {
      icon: Users,
      title: "Support Client",
      description: "Disponibilité, réactivité et qualité du service client en français",
    },
    {
      icon: CheckCircle,
      title: "Sécurité et Fiabilité",
      description: "Vérification des mesures de sécurité, protection des données et historique de paiements",
    },
    {
      icon: Clock,
      title: "Rapidité des Retraits",
      description: "Délais de traitement des retraits et variété des méthodes de paiement disponibles",
    },
  ]

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 bg-white p-6 rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comment Nous Sélectionnons les Meilleurs Sites
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Notre équipe d'experts évalue rigoureusement chaque site de paris selon des critères stricts pour vous
            garantir une expérience de jeu sûre et de qualité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {criteria.map((criterion, index) => {
            const Icon = criterion.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{criterion.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{criterion.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8 border border-blue-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Processus d'Évaluation</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Vérification</h4>
                <p className="text-sm text-gray-600">Contrôle des licences et certifications</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Test Complet</h4>
                <p className="text-sm text-gray-600">Évaluation approfondie de tous les services</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Notation</h4>
                <p className="text-sm text-gray-600">Attribution d'une note basée sur nos critères</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  4
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Classement</h4>
                <p className="text-sm text-gray-600">Mise à jour régulière du classement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
