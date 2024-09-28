'use client'

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

interface StepProps {
  number: number
  title: string
  description: string
}

const Step: React.FC<StepProps> = ({ number, title, description }) => (
  <div className="flex items-start mb-8">
    <div className="mr-4 mt-1">
      <CheckCircle2 className="w-6 h-6 text-blue-500" />
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-2">Step {number}</h4>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
)

export function HowItWorksSectionComponent() {
  const steps = [
    {
      title: "Fill The Form",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor"
    },
    {
      title: "Make Payment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor"
    },
    {
      title: "Get Your Document",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor"
    }
  ]

  return (
    <section className="bg-blue-50 py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-sm font-semibold text-gray-600 mb-2">HOW IT WORKS</h2>
        <h3 className="text-4xl font-bold mb-12">LET'S SEE HOW IT WORKS</h3>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Lawyer holding document"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            {steps.map((step, index) => (
              <Step key={index} number={index + 1} {...step} />
            ))}
          </div>
        </div>
      </div>
      <Image
        src="/placeholder.svg?height=100&width=100"
        alt="Gavel"
        width={100}
        height={100}
        className="absolute bottom-0 left-0 opacity-20"
      />
    </section>
  )
}