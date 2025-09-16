import Header from "@/components/header"
import ServicesSection from "@/components/services"
import Footer from "@/components/footer"
export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-8">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
