"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Notebook as Robot, Workflow, Cog, MessageSquare, Database, ArrowRight, CheckCircle2, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AIAutomation() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/20 dark:to-background">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent"></div>
        </div>
        <div className="container">
          <div className="content-wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold bg-primary/10 rounded-full">
                  Next-Gen AI Solutions
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                  AI Automation Solutions
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  Transform your business operations with cutting-edge AI automation technology
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#services">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative lg:ml-auto">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070"
                  alt="AI Automation"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-padding">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our AI Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge AI automation services to revolutionize your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Workflow className="h-8 w-8" />,
                  title: "Workflow Automation",
                  description: "Streamline your business processes with intelligent automation",
                  features: ["Process optimization", "Task automation", "Workflow analysis"]
                },
                {
                  icon: <Robot className="h-8 w-8" />,
                  title: "AI Agents",
                  description: "Intelligent agents that handle complex tasks autonomously",
                  features: ["24/7 operation", "Adaptive learning", "Task prioritization"]
                },
                {
                  icon: <MessageSquare className="h-8 w-8" />,
                  title: "Conversational AI",
                  description: "Advanced chatbots and virtual assistants for customer service",
                  features: ["Natural language processing", "Multi-language support", "Context awareness"]
                },
                {
                  icon: <Database className="h-8 w-8" />,
                  title: "Intelligent Analytics",
                  description: "AI-powered data analysis and insights generation",
                  features: ["Predictive analytics", "Pattern recognition", "Real-time insights"]
                },
                {
                  icon: <Cog className="h-8 w-8" />,
                  title: "Process Mining",
                  description: "Discover and optimize business processes automatically",
                  features: ["Process discovery", "Bottleneck detection", "Efficiency optimization"]
                },
                {
                  icon: <Brain className="h-8 w-8" />,
                  title: "Machine Learning",
                  description: "Custom ML solutions for your specific business needs",
                  features: ["Custom models", "Automated training", "Continuous improvement"]
                }
              ].map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all hover:scale-105 duration-300">
                  <CardContent className="p-8">
                    <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 w-fit">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <Zap className="h-4 w-4 mr-2 text-purple-500" />
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
      <section className="section-padding bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Business?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Transform your operations with our cutting-edge AI automation solutions
              </p>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
                <Link href="/contact">
                  Start Your AI Journey
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