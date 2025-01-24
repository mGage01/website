"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
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
  Search,
  Award,
  Rocket,
  Building2,
  MapPin,
  Banknote,
  ChevronDown,
  ChevronUp
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / San Francisco, CA",
    type: "Full-time",
    salary: "$120K - $180K",
    description: "We're looking for an experienced Full Stack Developer to join our engineering team and help build innovative solutions.",
    requirements: [
      "7+ years of experience in full-stack development",
      "Strong proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/Azure/GCP)",
      "Excellent problem-solving skills"
    ]
  },
  {
    title: "AI/ML Engineer",
    department: "AI Innovation",
    location: "Remote / New York, NY",
    type: "Full-time",
    salary: "$130K - $190K",
    description: "Join our AI team to develop cutting-edge machine learning solutions for business automation.",
    requirements: [
      "5+ years of experience in ML/AI development",
      "Strong background in Python and ML frameworks",
      "Experience with NLP and computer vision",
      "PhD or MS in Computer Science or related field"
    ]
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Austin, TX",
    type: "Full-time",
    salary: "$110K - $170K",
    description: "Help us build and maintain robust, scalable infrastructure for our growing platform.",
    requirements: [
      "5+ years of DevOps experience",
      "Strong knowledge of containerization and orchestration",
      "Experience with CI/CD pipelines",
      "Infrastructure as Code expertise"
    ]
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Seattle, WA",
    type: "Full-time",
    salary: "$90K - $140K",
    description: "Create beautiful, intuitive user experiences for our enterprise applications.",
    requirements: [
      "4+ years of UI/UX design experience",
      "Strong portfolio demonstrating web/mobile design",
      "Proficiency in Figma and design systems",
      "Experience with user research"
    ]
  }
]

export default function Careers() {
  const [openJob, setOpenJob] = React.useState<string | null>(null)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-50 via-teal-50/50 to-white dark:from-purple-950 dark:via-teal-950/50 dark:to-background">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent"></div>
        </div>
        <div className="container relative">
          <div className="content-wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold bg-purple-100 dark:bg-purple-900/50 rounded-full">
                  <Star className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-purple-700 dark:text-purple-300">Join Our Growing Team</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Build Your Career with MGAGEAI
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                  Join a team of innovators and tech enthusiasts. We're always looking for talented individuals who are passionate about shaping the future of technology.
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90" asChild>
                    <Link href="#openings">
                      View Open Positions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Search className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
                      title: "48 Hours",
                      desc: "Average Response Time"
                    },
                    {
                      icon: <Award className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
                      title: "4.8/5",
                      desc: "Employee Rating"
                    },
                    {
                      icon: <Rocket className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
                      title: "500+",
                      desc: "Team Members"
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
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                  alt="Team Collaboration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="section-padding">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-lg text-muted-foreground">Join our team and make an impact</p>
            </div>
            <div className="rounded-xl border bg-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Position</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Salary Range</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobOpenings.map((job, index) => (
                    <React.Fragment key={index}>
                      <TableRow className="group">
                        <TableCell className="font-medium">
                          <Collapsible open={openJob === job.title} onOpenChange={() => setOpenJob(openJob === job.title ? null : job.title)}>
                            <CollapsibleTrigger className="flex items-center gap-2 hover:text-primary transition-colors">
                              {openJob === job.title ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                              {job.title}
                            </CollapsibleTrigger>
                          </Collapsible>
                        </TableCell>
                        <TableCell>{job.department}</TableCell>
                        <TableCell>{job.location}</TableCell>
                        <TableCell>{job.type}</TableCell>
                        <TableCell>{job.salary}</TableCell>
                        <TableCell className="text-right">
                          <Button asChild>
                            <Link href="/careers/apply">
                              Apply Now
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={6} className="p-0">
                          <Collapsible open={openJob === job.title}>
                            <CollapsibleContent className="px-4 pb-4">
                              <div className="space-y-4">
                                <p className="text-muted-foreground">{job.description}</p>
                                <div>
                                  <h4 className="font-semibold mb-2">Key Requirements:</h4>
                                  <ul className="grid grid-cols-2 gap-2">
                                    {job.requirements.map((req, idx) => (
                                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                                        {req}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}