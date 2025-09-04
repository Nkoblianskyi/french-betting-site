import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AgeVerificationModal } from "@/components/modals/age-verification-modal"
import { CookieBanner } from "@/components/modals/cookie-banner"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "MEILLEURS SITES DE PARIS SPORTIFS FRANCE | lesportenfrance.com",
  description:
    "Découvrez notre sélection experte des meilleurs sites de paris sportifs licenciés ANJ en France. Comparaison détaillée des bonus, cotes, sécurité et services.",
  keywords: "paris sportifs, bookmakers France, ANJ, bonus paris, sites de paris",
  generator: "lesportenfrance.com",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${roboto.variable}`}>

      <body className="font-sans antialiased"
        style={{
          backgroundImage: `url("/bg.jpg")`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >

        <Suspense fallback={null}>{children}</Suspense>
        <AgeVerificationModal />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
