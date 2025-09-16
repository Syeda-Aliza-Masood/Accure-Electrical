import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, DollarSign } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Award,
      title: "Quality Workmanship",
      description:
        "At Accure Electrical Services, we are committed to delivering top-notch craftsmanship on every project. Our team ensures that each electrical installation, upgrade, and service is completed with the highest standards of quality and precision.",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Users,
      title: "Experienced Professionals",
      description:
        "Our certified master electricians bring years of experience and expertise to every job. With a focus on safety and efficiency, we tackle complex electrical projects with skill, ensuring reliable results for your business or industry.",
      gradient: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      icon: DollarSign,
      title: "Affordable Rates",
      description:
        "We believe in providing exceptional electrical services at competitive rates. At Accure Electrical Services, you can expect transparent pricing and cost-effective solutions without compromising on quality or service.",
      gradient: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Accure Electrical
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine expertise, reliability, and affordability to deliver exceptional electrical services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white overflow-hidden group"
            >
              <CardContent className="p-8 text-center space-y-6 relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div
                  className={`w-20 h-20 ${feature.iconBg} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative z-10`}
                >
                  <feature.icon className={`h-10 w-10 ${feature.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 relative z-10">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-pretty relative z-10">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
