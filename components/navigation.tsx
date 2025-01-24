"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Brain, Menu, ChevronDown, Lightbulb, Users, Bot } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const services = [
  {
    title: "IT Consulting",
    href: "/services/it-consulting",
    icon: <Lightbulb className="h-4 w-4" />,
  },
  {
    title: "IT Staffing",
    href: "/services/it-staffing",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "AI Automation",
    href: "/services/ai-automation",
    icon: <Bot className="h-4 w-4" />,
  },
]

const mainNavItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "#", isDropdown: true },
  { title: "Careers", href: "/careers" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 opacity-75 blur" />
              <div className="relative bg-background rounded-full p-1">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <span className="font-bold text-xl">MGAGE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-center">
            <ul className="flex items-center gap-1">
              {mainNavItems.map((item) =>
                item.isDropdown ? (
                  <li key={item.title}>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        {item.title}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center" className="w-48">
                        {services.map((service) => (
                          <DropdownMenuItem key={service.title} asChild>
                            <Link
                              href={service.href}
                              className={cn(
                                "flex items-center gap-2 cursor-pointer",
                                pathname === service.href && "bg-accent"
                              )}
                            >
                              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                                {service.icon}
                              </div>
                              <span>{service.title}</span>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                ) : (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                        pathname === item.href && "bg-accent text-accent-foreground"
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:opacity-90">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden ml-auto">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center space-x-2">
                      <Brain className="h-6 w-6 text-blue-600" />
                      <span className="font-bold">MGAGE</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col space-y-4">
                  {mainNavItems.map((item) =>
                    item.isDropdown ? (
                      <div key={item.title} className="space-y-4">
                        <div className="font-medium">{item.title}</div>
                        <div className="ml-4 space-y-2">
                          {services.map((service) => (
                            <Link
                              key={service.title}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "flex items-center space-x-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent",
                                pathname === service.href && "bg-accent"
                              )}
                            >
                              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                                {service.icon}
                              </div>
                              <span>{service.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "px-3 py-2 text-sm font-medium transition-colors hover:bg-accent rounded-lg",
                          pathname === item.href && "bg-accent"
                        )}
                      >
                        {item.title}
                      </Link>
                    )
                  )}
                  <Button asChild className="mt-4 w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}