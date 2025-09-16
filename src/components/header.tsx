"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Header() {
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
            {/* Phone & Email in one line (nowrap) */}
            <div className="flex items-center gap-4 flex-nowrap overflow-x-auto">
              <div className="flex items-center gap-1 hover:text-blue-200 transition-colors whitespace-nowrap">
                <Phone className="h-4 w-4" />
                <span className="text-white font-medium">+1 (346) 804-6534</span>
              </div>
              <div className="flex items-center gap-1 hover:text-blue-200 transition-colors whitespace-nowrap">
                <Mail className="h-4 w-4" />
                <span className="text-white font-medium">contact@accureengineering.com</span>
              </div>
            </div>
            {/* Address */}
            <div className="flex items-center gap-1 hover:text-blue-200 transition-colors whitespace-nowrap">
              <MapPin className="h-4 w-4" />
              <span className="text-white font-medium">Houston, TX 77081</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-14 h-14 rounded-xl overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Accure Electrical Services Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">Accure Electrical</h1>
              <p className="text-sm text-blue-600 font-medium">Professional Services</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-200 hover:text-blue-600 relative ${
                  pathname === item.href
                    ? "text-blue-600 after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <Button
                variant="outline"
                size="sm"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                Get Quote
              </Button>
            </Link>
            <Link href="tel:+13468046534">
              <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg font-medium">
                Call Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-blue-600 text-blue-600 bg-transparent">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-medium py-3 px-2 rounded-lg transition-all duration-200 ${
                      pathname === item.href
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-6">
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent w-full"
                    >
                      Get Quote
                    </Button>
                  </Link>
                  <Link href="tel:+13468046534">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white font-medium w-full">
                      Call Now
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
