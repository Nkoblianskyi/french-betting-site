"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <Image src="/flag.png" alt="Logo" width={40} height={40} />
            <span className="text-lg sm:text-xl font-bold text-french-blue truncate">Le Sporten France</span>
          </Link>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/a-propos" className="text-gray-600 hover:text-french-blue transition-colors">
              À Propos
            </Link>
            <Link href="/politique-cookies" className="text-gray-600 hover:text-french-blue transition-colors">
              Cookies
            </Link>
            <Link href="/politique-confidentialite" className="text-gray-600 hover:text-french-blue transition-colors">
              Confidentialité
            </Link>
          </nav>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/a-propos"
                className="text-gray-600 hover:text-french-blue transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À Propos
              </Link>
              <Link
                href="/politique-cookies"
                className="text-gray-600 hover:text-french-blue transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cookies
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-gray-600 hover:text-french-blue transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Confidentialité
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
