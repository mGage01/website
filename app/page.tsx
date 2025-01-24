"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Brain, 
  Users, 
  Lightbulb, 
  ArrowRight, 
  Building2, 
  Briefcase, 
  Shield, 
  Clock,
  HeartPulse,
  Landmark,
  Building,
  ShoppingBag,
  Factory,
  Plane,
  GraduationCap,
  Leaf
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const servicesRef = React.useRef<HTMLElement>(null)

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <div className="content-wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-8">
                  Empowering Businesses with IT Consulting, Staffing, and AI Automation
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                  Transform your business with cutting-edge technology solutions and expert talent.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg"
                    onClick={scrollToServices}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:opacity-90"
                  >
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    asChild
                  >
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
              <div className="relative lg:ml-auto">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070"
                  alt="Technology Team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-accent/50">
        <div className="container">
          <div className="content-wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">About MGAGEAI</h2>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground">
                    MGAGEAI is a leading technology company at the forefront of digital transformation, delivering innovative solutions that empower businesses to thrive in the modern era.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    With a team of expert professionals and cutting-edge technology stack, we specialize in IT consulting, staffing solutions, and AI automation services that drive growth and efficiency.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Our commitment to excellence and customer success has made us a trusted partner for businesses across various industries, helping them navigate the complexities of digital transformation.
                  </p>
                  <Button variant="outline" className="group" asChild>
                    <Link href="/about">
                      Learn More About Us
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="lg:ml-auto">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                  alt="Team Collaboration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="section-padding">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lightbulb className="h-10 w-10" />,
                  title: "IT Consulting",
                  description: "Strategic technology consulting to drive digital transformation",
                  href: "/services/it-consulting"
                },
                {
                  icon: <Users className="h-10 w-10" />,
                  title: "IT Staffing",
                  description: "Connect with top tech talent for your business needs",
                  href: "/services/it-staffing"
                },
                {
                  icon: <Brain className="h-10 w-10" />,
                  title: "AI Automation",
                  description: "Cutting-edge AI solutions for business process automation",
                  href: "/services/ai-automation"
                }
              ].map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="mb-6 p-3 rounded-lg bg-primary/10 w-fit">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <Button variant="ghost" className="group-hover:translate-x-1 transition-transform" asChild>
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections... */}
    </div>
  )
}