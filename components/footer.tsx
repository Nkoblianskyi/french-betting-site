import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <Image src="/flag.png" alt="Logo" width={40} height={40} />
              <span className="text-lg sm:text-xl font-bold text-french-blue truncate">Le Sporten France</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4 text-pretty">
              Votre guide de référence pour les meilleurs sites de paris sportifs en France. Comparaisons objectives,
              bonus exclusifs et conseils d'experts pour parier en toute sécurité.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens Utiles</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/a-propos" className="text-gray-400 hover:text-white transition-colors">
                  À Propos de Nous
                </Link>
              </li>
              <li>
                <Link href="/politique-cookies" className="text-gray-400 hover:text-white transition-colors">
                  Politique de Cookies
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Responsible Gaming */}

        </div>

        {/* Regulatory Organizations */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="text-lg font-bold text-white mb-6 text-center">Organismes de Régulation</h4>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {[
              { href: "https://anj.fr", src: "/logo-anj.svg", alt: "ANJ" },
              {
                href: "https://www.joueurs-info-service.fr",
                src: "/jouers-info-service.png",
                alt: "Joueurs Info Service",
              },
              { href: "https://www.gambleaware.org", src: "/gamble.webp", alt: "GambleAware" },
              { href: "https://www.gamcare.org.uk", src: "/gamecare.svg", alt: "GamCare" },
              { href: "https://www.sosjoueurs.org/", src: "/logo-sos-joueurs.svg", alt: "SOS Joueurs" },
              { href: "https://www.gamstop.co.uk/", src: "/gamstop.svg", alt: "GamStop" },
            ].map((org, index) => (
              <div key={index} className="rounded p-4 hover:bg-gray-800 transition-colors bg-gray-500">
                {org.href ? (
                  <Link href={org.href} target="_blank" rel="noopener noreferrer">
                    <img
                      src={org.src || "/placeholder.svg"}
                      alt={org.alt}
                      className="h-8 w-auto object-contain filter brightness-90 hover:brightness-100 transition-all"
                    />
                  </Link>
                ) : (
                  <img
                    src={org.src || "/placeholder.svg"}
                    alt={org.alt}
                    className="h-8 w-auto object-contain filter brightness-90"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>© 2025 lesportenfrance.com. Tous droits réservés.</p>
              <p className="mt-1">
                <span className="inline-flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  SSL Sécurisé
                </span>
              </p>
            </div>

            <div className="text-xs text-gray-500 text-center">
              <p className="mb-1">
                <strong>18+ | Jouer peut être addictif | Jouez responsable</strong>
              </p>
              <p>
                Aide et soutien :{" "}
                <p className="text-french-blue hover:underline">
                  09 74 75 13 13
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
