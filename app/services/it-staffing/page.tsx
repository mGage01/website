"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Users, 
  UserPlus, 
  Clock, 
  Briefcase,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Target,
  Star,
  TrendingUp,
  Search,
  Award,
  Rocket
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ITStaffing() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white dark:from-emerald-950 dark:via-teal-950/50 dark:to-background">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent"></div>
        </div>
        <div className="container relative">
          <div className="content-wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold bg-emerald-100 dark:bg-emerald-900/50 rounded-full">
                  <Star className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-300">Premier Tech Talent Solutions</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Connect with Expert Tech Talent for Your Success
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                  Access pre-vetted technology professionals and build high-performing teams that drive innovation and results.
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-600" asChild>
                    <Link href="/contact">
                      Find Top Talent
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-emerald-200 dark:border-emerald-800" asChild>
                    <Link href="#services">Browse Solutions</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Search className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
                      title: "48 Hours",
                      desc: "Average Placement Time"
                    },
                    {
                      icon: <Award className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
                      title: "95%",
                      desc: "Client Satisfaction"
                    },
                    {
                      icon: <Rocket className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
                      title: "10,000+",
                      desc: "Successful Placements"
                    }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                      <div className="mb-2">{stat.icon}</div>
                      <p className="text-lg font-bold">{stat.title}</p>
                      <p className="text-sm text-muted-foreground">{stat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=300"
                      alt="Professional Discussion"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400&h=300"
                      alt="Team Collaboration"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="space-y-4 mt-8">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=300"
                      alt="Tech Team"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400&h=300"
                      alt="Remote Work"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Staffing Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Flexible staffing solutions to meet your technology needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <UserPlus className="h-8 w-8" />,
                  title: "Direct Placement",
                  description: "Find permanent employees who align with your company culture and technical requirements",
                  features: [
                    "Comprehensive candidate screening",
                    "Technical skill assessment",
                    "Cultural fit evaluation",
                    "Long-term placement success"
                  ]
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "Contract Staffing",
                  description: "Flexible staffing solutions for project-based needs and temporary positions",
                  features: [
                    "Quick turnaround time",
                    "Skilled contractors",
                    "Flexible contract terms",
                    "Project-based solutions"
                  ]
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Contract-to-Hire",
                  description: "Evaluate potential employees through a contract period before making a permanent offer",
                  features: [
                    "Risk-free evaluation period",
                    "Performance assessment",
                    "Seamless transition",
                    "Reduced hiring risk"
                  ]
                },
                {
                  icon: <Target className="h-8 w-8" />,
                  title: "Executive Search",
                  description: "Find top-tier technology leaders and executives for your organization",
                  features: [
                    "C-level placement",
                    "Industry expertise",
                    "Confidential search",
                    "Leadership assessment"
                  ]
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

      {/* Process Section */}
      <section className="section-padding bg-accent">
        <div className="container">
          <div className="content-wrapper">
            <h2 className="text-3xl font-bold text-center mb-16">Our Hiring Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Briefcase className="h-6 w-6" />,
                  title: "Requirements Analysis",
                  description: "Understanding your specific needs"
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Candidate Sourcing",
                  description: "Finding the perfect match"
                },
                {
                  icon: <GraduationCap className="h-6 w-6" />,
                  title: "Skill Assessment",
                  description: "Evaluating technical expertise"
                },
                {
                  icon: <CheckCircle2 className="h-6 w-6" />,
                  title: "Placement",
                  description: "Successful integration"
                }
              ].map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-background">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-px bg-border -translate-y-1/2 transform" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Find Your Next Tech Star</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let us help you build the perfect team for your technology needs
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Hiring
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