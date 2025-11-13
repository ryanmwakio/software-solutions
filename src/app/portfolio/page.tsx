import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Portfolio | Muoka Software Solutions",
  description: "Explore our portfolio of successful software projects. See how we've helped businesses transform their ideas into powerful digital solutions.",
}

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Stripe integration, featuring inventory management and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    client: "RetailCorp",
    year: 2024,
    slug: "ecommerce-platform"
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine features.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Custom Software",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    client: "HealthPlus Clinic",
    year: 2024,
    slug: "healthcare-system"
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description: "Real-time financial analytics dashboard with data visualization, reporting, and multi-currency support.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Data Analytics",
    technologies: ["React", "D3.js", "Python", "FastAPI"],
    client: "FinanceFlow",
    year: 2023,
    slug: "financial-dashboard"
  },
  {
    id: 4,
    title: "Mobile Learning App",
    description: "Cross-platform mobile learning application with offline capabilities, progress tracking, and gamification.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Mobile Development",
    technologies: ["React Native", "Firebase", "Redux", "SQLite"],
    client: "EduTech Solutions",
    year: 2023,
    slug: "mobile-learning-app"
  },
  {
    id: 5,
    title: "Supply Chain Management",
    description: "Enterprise supply chain management system with real-time tracking, inventory optimization, and vendor management.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Enterprise Software",
    technologies: ["Angular", "Java", "Spring Boot", "MySQL"],
    client: "LogisticsPro",
    year: 2023,
    slug: "supply-chain-system"
  },
  {
    id: 6,
    title: "AI-Powered Chatbot",
    description: "Intelligent customer service chatbot with natural language processing and integration with existing CRM systems.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "AI & Machine Learning",
    technologies: ["Python", "TensorFlow", "FastAPI", "WebSocket"],
    client: "CustomerCare Inc",
    year: 2024,
    slug: "ai-chatbot"
  }
]

const categories = ["All", "Web Development", "Mobile Development", "Custom Software", "Enterprise Software", "AI & Machine Learning", "Data Analytics"]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Discover how we've helped businesses across various industries transform 
            their ideas into successful digital solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wide">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/portfolio/${project.slug}`}>
                      View Case Study
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
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your ideas to life with innovative 
            software solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}