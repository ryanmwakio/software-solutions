"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent/20 dark:from-primary dark:via-primary/95 dark:to-accent/20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }, (_, i) => (
            <div key={i} className="border border-white/20 dark:border-white/20 rounded"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-foreground space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-card/20 backdrop-blur-sm rounded-full text-accent text-sm font-medium border border-accent/20"
            >
              <Zap className="w-4 h-4 mr-2" />
              Leading Software Solutions Provider
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                You need a{" "}
                <span className="text-accent">software?</span>
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Worry less — leave it to us, the{" "}
                <span className="text-accent font-semibold">experts</span>, to bring it to life.
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              We build scalable, innovative, and reliable software solutions that transform businesses and exceed expectations.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                { icon: Code, text: "Custom Development" },
                { icon: Zap, text: "Fast Delivery" },
                { icon: Shield, text: "Reliable & Secure" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center border border-accent/30">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold group"
                asChild
              >
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent/50 text-accent hover:bg-accent hover:text-primary"
                asChild
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-24 h-24 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 flex items-center justify-center"
              >
                <Code className="w-8 h-8 text-accent" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-6 w-20 h-20 bg-accent/20 backdrop-blur-sm rounded-2xl border border-accent/30 flex items-center justify-center"
              >
                <Zap className="w-6 h-6 text-accent" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-2 w-28 h-28 bg-card/20 backdrop-blur-sm rounded-2xl border border-border/30 flex items-center justify-center"
              >
                <Shield className="w-8 h-8 text-foreground" />
              </motion.div>

              {/* Central Tech Stack Visualization */}
              <div className="relative w-full h-96 bg-card/30 backdrop-blur-sm rounded-3xl border border-border/50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
                <div className="relative z-10 grid grid-cols-3 gap-4 p-8">
                  {[
                    "React", "Node.js", "Python",
                    "Laravel", "React Native", "AWS",
                    "TypeScript", "MySQL", "Docker"
                  ].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                      className="w-16 h-16 bg-card/40 rounded-lg flex items-center justify-center border border-border/40 hover:border-accent/50 transition-colors"
                    >
                      <span className="text-xs font-medium text-foreground text-center leading-tight">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}