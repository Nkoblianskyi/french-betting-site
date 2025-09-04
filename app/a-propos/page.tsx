import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Users, Award, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">À Propos de lesportenfrance.com</h1>
            <p className="text-xl text-gray-600 text-pretty">
              Votre guide de confiance pour les paris sportifs en France depuis 2019
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Notre Mission</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Chez lesportenfrance.com, notre mission est de fournir aux parieurs français des informations
                objectives, complètes et actualisées sur les meilleurs sites de paris sportifs licenciés par l'ANJ. Nous
                nous engageons à promouvoir un environnement de paris sécurisé et responsable.
              </p>
              <p className="mb-6">
                Notre équipe d'experts analyse quotidiennement les offres, les cotes, les services client et les
                fonctionnalités de chaque plateforme pour vous offrir des comparaisons impartiales et des
                recommandations personnalisées selon vos besoins de paris.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-french-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Sécurité et Conformité</h3>
                  <p className="text-gray-600">
                    Nous ne recommandons que des sites licenciés ANJ, garantissant la sécurité de vos fonds et la
                    protection de vos données personnelles.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-french-red rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Transparence</h3>
                  <p className="text-gray-600">
                    Nos évaluations sont basées sur des critères objectifs et transparents. Nous divulguons toutes nos
                    relations commerciales avec les opérateurs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Expertise</h3>
                  <p className="text-gray-600">
                    Notre équipe possède une expertise approfondie du marché français des paris sportifs et des
                    réglementations ANJ.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Actualisation Continue</h3>
                  <p className="text-gray-600">
                    Nos informations sont mises à jour quotidiennement pour refléter les dernières offres et
                    modifications du marché.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Notre Équipe</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-gray-600 mb-6">
                Notre équipe est composée d'experts en paris sportifs, d'analystes financiers et de spécialistes en
                réglementation des jeux. Ensemble, nous apportons plus de 50 ans d'expérience combinée dans l'industrie
                des paris sportifs français.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-lg mb-2">Experts Paris Sportifs</h4>
                  <p className="text-sm text-gray-600">
                    Analyse des cotes, stratégies de paris et évaluation des marchés
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-lg mb-2">Spécialistes Réglementation</h4>
                  <p className="text-sm text-gray-600">Conformité ANJ, licences et aspects légaux</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-lg mb-2">Analystes Techniques</h4>
                  <p className="text-sm text-gray-600">
                    Évaluation des plateformes, sécurité et expérience utilisateur
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-french-blue rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Contactez-Nous</h2>
            <p className="mb-6">
              Vous avez des questions ou des suggestions ? Notre équipe est à votre disposition pour vous aider.
            </p>
            <div className="space-y-2">
              <p>
                <strong>Email :</strong> info@lesportenfrance.com
              </p>
              
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
