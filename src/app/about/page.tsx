import Header from "@/components/header"
import AboutSection from "@/components/about"
import Footer from "@/components/footer"
export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-8">
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
