import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Building, Zap, Wrench } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Residential Electrical Services",
      items: [
        "Lighting installation (indoor, outdoor, smart lighting)",
        "Ceiling fans, outlets & switch wiring",
        "Electrical panel upgrades & rewiring",
        "Whole-home electrical safety inspections",
        "UPS & power backup integration",
      ],
    },
    {
      icon: Building,
      title: "Commercial & Industrial Services",
      items: [
        "Low, Medium & High Voltage Distribution Systems",
        "MDBs, SMDBs & FDBs (Design & Installation)",
        "APF/MCC/Generator synchronization panels",
        "Transformers & generator installation",
        "C.T / P.T / Isolator & surge arrestor installation",
      ],
    },
    {
      icon: Zap,
      title: "Backup & Critical Systems",
      items: [
        "UPS integration for critical applications",
        "Power backup solutions (Generators, Hybrid systems)",
        "Load calculation, design & installation",
        "Preventive maintenance & testing",
        "Commissioning services",
      ],
    },
  ]

  const additionalServices = [
    "Electrical repairs & troubleshooting",
    "Circuit tracing",
    "Specialty & security lighting",
    "Ceiling fan installations",
    "Jacuzzi / hot tub hookups",
    "Washer & dryer outlets",
    "Boat dock wiring",
    "Meter bank repair & replacement",
    "Aluminum wire removal & repair",
    "GFCI receptacle installation",
    "Whole-house rewiring",
    "Electrical inspections",
    "Panel upgrades",
    "Whole-house surge protection",
    "EV charger installation",
    "Doorbell camera installation",
    "Smoke & CO detector installation",
    "Dedicated circuits",
    "Pool timers & outdoor lighting timers",
    "Bluetooth-enabled switches & outlets",
    "Dimmer installations",
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Electrical Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive electrical solutions for residential, commercial, and industrial needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground flex items-center justify-center gap-2">
              <Wrench className="h-6 w-6 text-primary" />
              Additional Specialized Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex items-center gap-2 p-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
