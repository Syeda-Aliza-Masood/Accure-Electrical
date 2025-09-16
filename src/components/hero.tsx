import { Button } from "@/components/ui/button"
import { Phone, CheckCircle, Zap, Shield, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"   // ✅ yeh line add ki

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 text-balance leading-tight">
                Accurate. Reliable.
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent block">
                  Electrical Solutions.
                </span>
              </h1>
              <p className="text-lg text-gray-600 text-pretty leading-relaxed max-w-xl">
                At Accure Electrical Services, we deliver safe, efficient, and innovative electrical solutions for
                residential, commercial, and industrial needs—backed by expertise and a commitment to excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Request a Free Quote
                </Button>
              </Link>
              <Link href="tel:+13468046534">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white bg-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now - 24/7 Emergency
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-blue-100">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm font-semibold text-gray-800">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-blue-100">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-gray-800">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-blue-100">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-indigo-600" />
                </div>
                <span className="text-sm font-semibold text-gray-800">Expert Technicians</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 shadow-2xl">
              {/* ✅ img ko Image se replace kiya */}
              <Image
                src="/professional-electrician-working-on-electrical-pan.jpg"
                alt="Professional electrician working on electrical systems"
                width={600}   // width aur height dena zaroori hai
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl border-4 border-white">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm font-medium opacity-90">Years Experience</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-800">Certified</div>
                  <div className="text-xs text-gray-600">Master Electricians</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
