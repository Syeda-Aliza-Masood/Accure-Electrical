import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-blue-900 border-t border-blue-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-white">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Accure Electrical Services Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">Accure Electrical</h3>
                <p className="text-sm text-gray-300">Professional Services</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for safe, efficient, and reliable power solutions. Licensed and insured professionals
              serving Houston, TX and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Services
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <Link href="tel:+13468046534" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-white flex-shrink-0" />
                <span className="text-sm text-gray-300">+1 (346) 804-6534</span>
              </Link>
              <Link
                href="mailto:contact@accureengineering.com"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-white flex-shrink-0" />
                <span className="text-sm text-gray-300">contact@accureengineering.com</span>
              </Link>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">
                  6110 Renwick Drive, Houston, TX 77081, USA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-900 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2024 Accure Electrical Services. All rights reserved. Licensed & Insured.
          </p>
        </div>
      </div>
    </footer>
  )
}
