"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Code2, 
  Cloud, 
  Shield, 
  Database, 
  LineChart, 
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ITConsulting() {
  const servicesRef = React.useRef<HTMLElement>(null)

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center section-padding overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white dark:from-blue-950 dark:via-indigo-950/50 dark:to-background">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent"></div>
        </div>
        <div className="container relative">
          <div className="content-wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold bg-blue-100 dark:bg-blue-900/50 rounded-full">
                  <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-blue-700 dark:text-blue-300">Strategic Technology Partner</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Transform Your Business with Expert IT Consulting
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                  Partner with industry experts to drive innovation, optimize operations, and achieve digital excellence through strategic technology consulting.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
                    asChild
                  >
                    <Link href="/contact">
                      Request Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-blue-200 dark:border-blue-800"
                    onClick={scrollToServices}
                  >
                    Explore Services
                  </Button>
                </div>
              </div>
              <div className="relative lg:ml-auto">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg blur-lg opacity-20 group-hover:opacity-30 transition duration-200"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2070"
                    alt="IT Consulting"
                    width={600}
                    height={400}
                    className="relative rounded-lg shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                      <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold">Trusted by Industry Leaders</p>
                      <p className="text-sm text-muted-foreground">500+ Successful Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="section-padding">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Consulting Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive IT solutions tailored to your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code2 className="h-8 w-8" />,
                  title: "Web Development",
                  description: "Custom web applications and solutions built with cutting-edge technologies",
                  features: ["Full-stack development", "UI/UX design", "Performance optimization"]
                },
                {
                  icon: <Cloud className="h-8 w-8" />,
                  title: "Cloud Solutions",
                  description: "Cloud migration and infrastructure optimization services",
                  features: ["AWS/Azure/GCP", "Cloud architecture", "Cost optimization"]
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Cybersecurity",
                  description: "Comprehensive security solutions to protect your digital assets",
                  features: ["Security audits", "Threat prevention", "Compliance"]
                },
                {
                  icon: <Database className="h-8 w-8" />,
                  title: "Data Analytics",
                  description: "Transform your data into actionable insights",
                  features: ["Big data solutions", "BI implementation", "Data visualization"]
                },
                {
                  icon: <LineChart className="h-8 w-8" />,
                  title: "Digital Strategy",
                  description: "Strategic planning for digital transformation",
                  features: ["Technology roadmap", "Process optimization", "Innovation consulting"]
                },
                {
                  icon: <Smartphone className="h-8 w-8" />,
                  title: "Mobile Solutions",
                  description: "Native and cross-platform mobile application development",
                  features: ["iOS/Android apps", "Progressive Web Apps", "Mobile strategy"]
                }
              ].map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="mb-6 p-3 rounded-lg bg-primary/10 w-fit">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT consulting services can help you achieve your business goals
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}