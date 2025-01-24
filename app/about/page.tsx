"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Target, 
  Users, 
  Rocket,
  Award,
  Globe,
  Lightbulb,
  ArrowRight
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent"></div>
        </div>
        <div className="container relative">
          <div className="content-wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold bg-blue-100 dark:bg-blue-900/50 rounded-full">
                  <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-blue-700 dark:text-blue-300">Leading Tech Innovation Since 2018</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Transforming Businesses Through Technology
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  MGAGE is a leading technology company specializing in IT consulting, staffing, and AI automation solutions. We help businesses innovate, grow, and succeed in the digital age.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:opacity-90" asChild>
                  <Link href="/contact">
                    Work With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400&h=300"
                      alt="Team Meeting"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400&h=300"
                      alt="Office Culture"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="space-y-4 mt-8">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=300"
                      alt="Tech Discussion"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=400&h=300"
                      alt="Innovation"
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

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container">
          <div className="content-wrapper">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/50 w-fit">
                    <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                  <p className="text-muted-foreground">
                    To deliver cutting-edge IT consulting, staffing, and AI automation solutions that drive business growth, foster innovation, and create lasting value for our clients.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="p-3 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 w-fit">
                    <Lightbulb className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                  <p className="text-muted-foreground">
                    To be the global leader in innovative IT solutions, empowering businesses through digital transformation and technological excellence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="section-padding bg-accent">
        <div className="container">
          <div className="content-wrapper">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
                  number: "500+",
                  label: "Tech Experts"
                },
                {
                  icon: <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
                  number: "20+",
                  label: "Countries Served"
                },
                {
                  icon: <Rocket className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
                  number: "1000+",
                  label: "Projects Delivered"
                },
                {
                  icon: <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
                  number: "98%",
                  label: "Client Satisfaction"
                }
              ].map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-3 rounded-lg bg-blue-100 dark:bg-blue-900/50 mb-4">
                      {stat.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}