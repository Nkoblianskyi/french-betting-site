import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"

import { BettingSiteCard } from "@/components/betting-site-card-new"

import { InfoSections } from "@/components/info-sections"
import { Footer } from "@/components/footer"
import { bettingSites } from "@/data/mock-data"
import { SelectionCriteria } from "@/components/selection-criteria"

export default function HomePage() {
  return (
    <div className="min-h-screen  relative">
      <div
        className="absolute inset-0 "

      />

      <div className="relative z-10">
        <Header />
        <HeroSection />

        <main className="py-6 sm:py-8">
          <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">


            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-6 sm:mt-8">
              {/* Left Sidebar - Desktop Only */}
              <div className="hidden lg:block lg:col-span-2">
                <div className="sticky top-24 space-y-6">

                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-8">
                <div className="space-y-6">
                  {bettingSites.map((site, index) => (
                    <div key={site.id}>
                      <BettingSiteCard site={site} rank={index + 1} />


                    </div>
                  ))}
                </div>
              </div>

              {/* Right Sidebar - Desktop Only */}
              <div className="hidden lg:block lg:col-span-2">
                <div className="sticky top-24 space-y-6">

                </div>
              </div>
            </div>
          </div>
        </main>

        <SelectionCriteria />

        <InfoSections />
        <Footer />
      </div>
    </div>
  )
}
