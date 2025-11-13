import { Metadata } from "next"
import Link from "next/link"
import { 
  Code, 
  Globe, 
  Smartphone, 
  Cloud, 
  Headphones, 
  Palette, 
  Bot 
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Services | Muoka Software Solutions",
  description: "Comprehensive software development services including custom software, web development, mobile apps, cloud solutions, IT support, UI/UX design, and AI automation.",
}

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions built specifically for your business needs and requirements.",
    slug: "custom-software",
    features: ["Enterprise Applications", "API Development", "Database Design", "System Integration"]
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications using the latest technologies.",
    slug: "web-development",
    features: ["React & Next.js", "E-commerce Platforms", "CMS Development", "Progressive Web Apps"]
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    slug: "mobile-apps",
    features: ["React Native", "Flutter", "iOS Development", "Android Development"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    slug: "cloud-solutions",
    features: ["AWS & Azure", "Cloud Migration", "DevOps", "Microservices"]
  },
  {
    icon: Headphones,
    title: "IT Support & Maintenance",
    description: "Comprehensive IT support and ongoing maintenance for your software systems.",
    slug: "it-support",
    features: ["24/7 Support", "System Monitoring", "Performance Optimization", "Security Updates"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that provide exceptional user experiences.",
    slug: "ui-ux-design",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Intelligent automation solutions and AI-powered applications for business efficiency.",
    slug: "ai-automation",
    features: ["Machine Learning", "Process Automation", "Chatbots", "Data Analytics"]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            From concept to deployment, we provide comprehensive software development 
            services that help businesses thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.slug} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-heading text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center text-muted-foreground">
                  {service.description}
                </CardDescription>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-primary">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:border-accent group-hover:text-accent transition-colors"
                    asChild
                  >
                    <Link href={`/services/${service.slug}`}>
                      Learn More
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? We specialize in creating 
            custom solutions tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get Custom Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}