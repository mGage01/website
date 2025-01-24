"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    title: "The Future of AI in Business Automation",
    excerpt: "Explore how artificial intelligence is revolutionizing business processes and what it means for the future of work.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    author: "Sarah Johnson",
    date: "April 15, 2024",
    readTime: "5 min read",
    category: "AI & Automation"
  },
  {
    title: "Building High-Performance Tech Teams",
    excerpt: "Learn the key strategies for assembling and managing successful technology teams in today's competitive landscape.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    author: "Michael Chen",
    date: "April 12, 2024",
    readTime: "4 min read",
    category: "IT Staffing"
  },
  {
    title: "Digital Transformation Success Stories",
    excerpt: "Case studies of companies that successfully navigated their digital transformation journey.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    author: "David Miller",
    date: "April 10, 2024",
    readTime: "6 min read",
    category: "IT Consulting"
  }
]

export default function Blog() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest Insights & News</h1>
              <p className="text-lg text-muted-foreground">
                Stay updated with the latest trends, insights, and news in technology and business
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="content-wrapper">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="inline-flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>
                      <Button variant="ghost" className="group-hover:translate-x-1 transition-transform" asChild>
                        <Link href="#">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
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