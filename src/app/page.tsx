import Header from "@/components/header"
import HeroSection from "@/components/hero"
import FeaturesSection from "@/components/feature"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}
