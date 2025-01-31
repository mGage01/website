"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Contact Section */}
      <section className="section-padding">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
              <p className="text-lg text-muted-foreground">
                Have a question or want to discuss how we can help your business? We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help?" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        className="min-h-[150px]"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:opacity-90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info & Map */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email Us</p>
                      <a href="mailto:contact@mgage.com" className="text-muted-foreground hover:text-primary transition-colors">
                        contact@mgage.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Call Us</p>
                      <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                        
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Visit Us</p>
                      <p className="text-muted-foreground">26918 North 28 LN,Phoenix,AZ,85085</p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101459.59325762714!2d-122.19105554179689!3d37.40295141495399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sSilicon%20Valley%2C%20CA!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center gap-6">
                  {[
                    { icon: Facebook, href: "#", label: "Facebook" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Instagram, href: "#", label: "Instagram" }
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}