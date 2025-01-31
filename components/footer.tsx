import Link from "next/link"
import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="border-t bg-accent/50">
      <div className="container py-12 md:py-16">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 opacity-75 blur" />
                  <div className="relative bg-background rounded-full p-1">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <span className="font-bold text-lg">MGAGE</span>
              </div>
              <p className="text-muted-foreground">
                Empowering businesses with innovative IT solutions and expert talent.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                  <Link href="mailto:contact@mgage.com">contact@mgage.ai</Link>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4" />
                  <Link href="tel:+15551234567"></Link>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>26918 North 28 LN,Phoenix,AZ,85085</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <nav className="flex flex-col space-y-3">
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
                </nav>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <nav className="flex flex-col space-y-3">
                  <Link href="/services/it-consulting" className="text-muted-foreground hover:text-foreground transition-colors">IT Consulting</Link>
                  <Link href="/services/it-staffing" className="text-muted-foreground hover:text-foreground transition-colors">IT Staffing</Link>
                  <Link href="/services/ai-automation" className="text-muted-foreground hover:text-foreground transition-colors">AI Automation</Link>
                </nav>
              </div>
            </div>

            {/* Quick Connect */}
            <div>
              <h3 className="font-semibold mb-2">Quick Connect</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Have a question? Let's talk.
              </p>
              <form className="space-y-3">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-background"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-background"
                />
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:opacity-90">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>

          {/* Copyright and Social Media */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} MGAGE AI Technologies LLC. All rights reserved.
              </div>
              <div className="flex gap-6">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Instagram, href: "#" }
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}