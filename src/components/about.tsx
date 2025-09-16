export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              About Accure Electrical Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            At Accure Electrical Services, accuracy and reliability are at the core of everything we do. Our licensed
            and insured electricians bring years of experience in providing high-quality electrical solutions for homes,
            businesses, and large-scale facilities. From simple installations to complex power distribution systems, we
            ensure precision, safety, and compliance with all local and international electrical codes.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Why Choose Accure?</h3>
              <div className="space-y-4">
                {[
                  "Licensed & insured professionals",
                  "Expertise in residential, commercial & industrial systems",
                  "Full compliance with local & international codes",
                  "Advanced power management & safety solutions",
                  "24/7 emergency service with rapid response",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Our Commitment</h3>
              <p className="text-muted-foreground leading-relaxed">
                At Accure Electrical Services, we stand out for our commitment to quality, reliability, and customer
                satisfaction. With years of experience serving Southeast Michigan, our team of certified electricians
                offers expert solutions for both commercial and industrial clients.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">Quality</div>
                  <div className="text-sm text-muted-foreground">Top-quality services</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">Warranty</div>
                  <div className="text-sm text-muted-foreground">Reliable warranties</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
