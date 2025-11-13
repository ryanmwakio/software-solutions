import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Muoka Software Solutions",
  description: "Learn about our mission, values, and the expert team behind Muoka Software Solutions. We're passionate about bringing your software ideas to life.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
              About Muoka Software Solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a passionate team of software experts dedicated to transforming 
              ideas into powerful digital solutions.
            </p>
          </div>

          {/* Mission Section */}
          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-heading font-semibold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-foreground leading-relaxed">
                At Muoka Software Solutions, our mission is simple yet powerful: to bridge the gap 
                between innovative ideas and cutting-edge software solutions. We believe that every 
                business, regardless of size, deserves access to world-class technology that drives 
                growth and success.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-semibold text-primary mb-6">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Innovation",
                    description: "We stay at the forefront of technology, constantly learning and adapting to deliver cutting-edge solutions."
                  },
                  {
                    title: "Reliability",
                    description: "Our clients trust us to deliver on time, every time. We build lasting partnerships through consistent excellence."
                  },
                  {
                    title: "Quality",
                    description: "We never compromise on quality. Every line of code, every design element is crafted with precision and care."
                  }
                ].map((value) => (
                  <div key={value.title} className="bg-card p-6 rounded-lg border">
                    <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-semibold text-primary mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                {[
                  "Expert team with 10+ years of combined experience",
                  "Proven track record with 100+ successful projects",
                  "Agile development methodology for faster delivery",
                  "24/7 support and maintenance services",
                  "Competitive pricing with transparent billing",
                  "Local expertise with global standards"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <p className="text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}