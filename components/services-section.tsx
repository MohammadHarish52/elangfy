'use client'

import { Button } from "@/components/ui/button"
import { MessageCircle, Heart, PenTool, Mail, Gavel } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden border-l-4 border-blue-500">
    <div className="flex items-start mb-4">
      <div className="mr-4 text-blue-500 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gray-100 transform rotate-45 translate-x-8 translate-y-8 opacity-20"></div>
  </div>
)

export function ServicesSectionComponent() {
  const services = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Consumer Compliant",
      description: "We assist you in filing and resolving consumer complaints, ensuring your consumer rights are enforced and disputes are handled professionally."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Divorce Consultation",
      description: "Our experts provide compassionate, confidential divorce consultation, guiding you through the legal process and ensuring your interests are protected."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Digital Signature",
      description: "Securely sign documents online with our digital signature service, providing fast, reliable, and legally compliant solutions for all your paperwork."
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Legal Notice",
      description: "Draft and deliver precise legal notices with our service, ensuring all legal formalities are met and your interests are safeguarded."
    },
    {
      icon: <Gavel className="w-8 h-8" />,
      title: "Legal Advice",
      description: "Receive tailored legal advice from experienced professionals, helping you make informed decisions and resolve legal matters efficiently."
    }
  ]

  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-sm font-semibold text-gray-600 mb-2">OUR SERVICES</h2>
        <h3 className="text-4xl font-bold mb-12">Expert Legal Solutions<br />Tailored to Your Needs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded">
            BOOK A FREE CONSULTATION
          </Button>
        </div>
      </div>
    </section>
  )
}