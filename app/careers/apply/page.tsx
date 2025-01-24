"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function Apply() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 section-padding">
        <div className="container">
          <div className="content-wrapper">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-4">Apply for a Position</h1>
                <p className="text-lg text-muted-foreground">
                  We're excited to learn more about you
                </p>
              </div>
              <Card>
                <CardContent className="p-0">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdFxYb3n8F-_Vc5hHpxDqHpHQQb6wW0jjMQAMQYHLs1WfuQKg/viewform?embedded=true"
                    width="100%"
                    height="800"
                    className="border-0"
                  >
                    Loading application form...
                  </iframe>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}