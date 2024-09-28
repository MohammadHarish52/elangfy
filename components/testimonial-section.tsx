'use client'

import Image from "next/image"
import { Gavel } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialProps {
  quote: string
  name: string
  title: string
  imageSrc: string
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, imageSrc }) => (
  <Card className="bg-primary text-primary-foreground">
    <CardContent className="p-6">
      <p className="mb-4">{quote}</p>
      <div className="flex items-center">
        <Image
          src={imageSrc}
          alt={name}
          width={40}
          height={40}
          className="rounded-full mr-3"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-primary-foreground/70">{title}</p>
        </div>
      </div>
    </CardContent>
  </Card>
)

export function TestimonialSectionComponent() {
  const testimonials = [
    {
      quote: "Convenient, top notch service, and we felt like our Regency Agent was looking out for us along the way. Working with regency allowed me to become confident.",
      name: "John Doe",
      title: "CEO of Carnival",
      imageSrc: "/placeholder.svg?height=40&width=40"
    },
    {
      quote: "Convenient, top notch service, and we felt like our Regency Agent was looking out for us along the way. Working with regency allowed me to become confident.",
      name: "Shane Bond",
      title: "CEO of Carnival",
      imageSrc: "/placeholder.svg?height=40&width=40"
    },
    {
      quote: "Convenient, top notch service, and we felt like our Regency Agent was looking out for us along the way. Working with regency allowed me to become confident.",
      name: "Smith John",
      title: "CEO of Meta",
      imageSrc: "/placeholder.svg?height=40&width=40"
    },
    {
      quote: "The legal expertise provided was exceptional. Our Regency Agent guided us through complex processes with ease, making us feel secure every step of the way.",
      name: "Emma Watson",
      title: "CFO of TechCorp",
      imageSrc: "/placeholder.svg?height=40&width=40"
    },
    {
      quote: "Regency's service exceeded our expectations. Their attention to detail and prompt responses made our legal matters stress-free.",
      name: "Michael Chen",
      title: "Founder of StartUp Inc.",
      imageSrc: "/placeholder.svg?height=40&width=40"
    },
    {
      quote: "I was impressed by the professionalism and efficiency of the Regency team. They simplified complex legal jargon and provided clear, actionable advice.",
      name: "Sarah Johnson",
      title: "Director at Global Enterprises",
      imageSrc: "/placeholder.svg?height=40&width=40"
    }
  ]

  return (
    <section className="bg-blue-900 py-16 relative">
      <div className="container mx-auto px-4">
        <Gavel className="text-blue-800 w-24 h-24 absolute top-0 left-0 opacity-20" />
        <h2 className="text-4xl font-bold text-white mb-2">What People Say</h2>
        <p className="text-blue-300 mb-8">Our customers are our top priority. Let's hear what they have to say.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}