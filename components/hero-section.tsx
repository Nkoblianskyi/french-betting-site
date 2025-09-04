import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const currentMonth = new Date().toLocaleDateString("fr-FR", { month: "long" }).toUpperCase()

  return (
    <section className="max-w-[1250px] mx-auto bg-gradient-to-br from-french-blue to-blue-800/50 text-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance leading-tight">
          MEILLEURS SITES DE PARIS SPORTIFS FRANCE
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-2 text-blue-100">ACTUALISÉ POUR {currentMonth} 2025</p>

        <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-4xl mx-auto text-blue-100 text-pretty px-2">
          Découvrez notre sélection experte des meilleurs sites de paris sportifs licenciés ANJ en France. Comparaison
          détaillée des bonus, cotes, sécurité et services pour vous aider à choisir la plateforme de paris idéale selon
          vos besoins.
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
          <Badge
            variant="secondary"
            className="bg-green-500 text-white hover:bg-green-600 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"
          >
            100% Légal
          </Badge>
          <Badge
            variant="secondary"
            className="bg-gold-accent text-white hover:bg-yellow-600 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"
          >
            Licencié ANJ
          </Badge>
          <Badge
            variant="secondary"
            className="bg-french-red text-white hover:bg-red-600 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"
          >
            Retraits Rapides
          </Badge>
        </div>

        <p className="text-xs sm:text-sm text-blue-200 px-4">
          <span className="font-semibold">France</span> •
          <span className="font-semibold ml-1 sm:ml-2">LICENCIÉ ANJ</span> •
          <span className="font-semibold ml-1 sm:ml-2">18+</span> •
        </p>
      </div>
    </section>
  )
}
