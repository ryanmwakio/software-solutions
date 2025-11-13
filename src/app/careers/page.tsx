import { Metadata } from "next"
import Link from "next/link"
import { MapPin, Clock, Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Careers | Muoka Software Solutions",
  description: "Join our team of passionate software developers and help us build the future of technology. Explore career opportunities at Muoka Software Solutions.",
}

const jobListings = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Nairobi, Kenya",
    type: "Full-time" as const,
    description: "We're looking for an experienced full-stack developer to join our growing team and help build innovative software solutions.",
    requirements: [
      "5+ years of experience in web development",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/Azure)",
      "Strong problem-solving and communication skills"
    ],
    benefits: [
      "Competitive salary and equity",
      "Flexible working hours",
      "Health insurance coverage",
      "Professional development budget"
    ],
    postedAt: new Date("2024-01-10"),
    slug: "senior-fullstack-developer"
  },
  {
    id: 2,
    title: "Mobile App Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time" as const,
    description: "Join our mobile team to create cutting-edge mobile applications for iOS and Android platforms.",
    requirements: [
      "3+ years of mobile development experience",
      "Proficiency in React Native or Flutter",
      "Experience with native iOS/Android development",
      "Knowledge of mobile UI/UX best practices"
    ],
    benefits: [
      "Remote-first work environment",
      "Top-tier equipment provided",
      "Annual team retreats",
      "Learning and development opportunities"
    ],
    postedAt: new Date("2024-01-08"),
    slug: "mobile-app-developer"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Nairobi, Kenya",
    type: "Full-time" as const,
    description: "Help us create beautiful and intuitive user experiences that delight our clients and their customers.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating design thinking",
      "Experience with design systems and prototyping"
    ],
    benefits: [
      "Creative freedom and autonomy",
      "Design tools and software licenses",
      "Mentorship opportunities",
      "Flexible hybrid work model"
    ],
    postedAt: new Date("2024-01-05"),
    slug: "ui-ux-designer"
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Contract" as const,
    description: "Help us scale our infrastructure and implement best practices for continuous integration and deployment.",
    requirements: [
      "4+ years of DevOps/SRE experience",
      "Experience with Docker, Kubernetes, and CI/CD",
      "Knowledge of AWS/Azure cloud services",
      "Scripting skills in Python/Bash"
    ],
    benefits: [
      "Competitive contract rates",
      "Flexible project-based work",
      "Opportunity for full-time conversion",
      "Work with modern tech stack"
    ],
    postedAt: new Date("2024-01-03"),
    slug: "devops-engineer"
  },
  {
    id: 5,
    title: "Software Development Intern",
    department: "Engineering",
    location: "Nairobi, Kenya",
    type: "Intern" as const,
    description: "Start your career in software development with hands-on experience in real projects and mentorship from senior developers.",
    requirements: [
      "Computer Science or related degree (ongoing/completed)",
      "Basic knowledge of programming languages",
      "Eagerness to learn and grow",
      "Strong problem-solving abilities"
    ],
    benefits: [
      "Structured learning program",
      "One-on-one mentorship",
      "Potential for full-time offer",
      "Certificate upon completion"
    ],
    postedAt: new Date("2023-12-28"),
    slug: "software-development-intern"
  }
]

const departments = ["All", "Engineering", "Design", "Infrastructure", "Business"]
const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Intern"]

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Be part of a passionate team that's building the future of software solutions. 
            We're always looking for talented individuals who share our vision.
          </p>
        </div>

        {/* Culture Section */}
        <div className="mb-16 bg-primary/5 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Life at Muoka
              </h2>
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  At Muoka Software Solutions, we believe that great software comes from great people. 
                  We foster a culture of innovation, collaboration, and continuous learning.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Flexible work environment",
                    "Continuous learning opportunities",
                    "Competitive compensation",
                    "Health and wellness benefits",
                    "Team building activities",
                    "Professional development"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Placeholder for team photos */}
              <div className="space-y-4">
                <div className="h-32 bg-accent/10 rounded-lg"></div>
                <div className="h-24 bg-primary/10 rounded-lg"></div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-24 bg-primary/10 rounded-lg"></div>
                <div className="h-32 bg-accent/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-foreground mr-2 py-2">Department:</span>
            {departments.map((dept) => (
              <Button
                key={dept}
                variant={dept === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {dept}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-foreground mr-2 py-2">Type:</span>
            {jobTypes.map((type) => (
              <Button
                key={type}
                variant={type === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobListings.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-heading text-primary hover:text-accent transition-colors">
                      {job.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <span>Posted {job.postedAt.toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex space-x-3 shrink-0">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/careers/${job.slug}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="/careers/apply">
                        Apply Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {job.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No specific role CTA */}
        <div className="mt-16 text-center bg-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always interested in connecting with talented individuals. 
            Send us your resume and let us know how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Send Your Resume</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}