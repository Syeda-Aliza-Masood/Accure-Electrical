import Header from "@/components/header"
import ContactSection from "@/components/contact"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-8">
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
