'use client'

import Image from "next/image"

interface KeyPointCardProps {
  title: string
  description: string
  imageSrc: string
}

const KeyPointCard: React.FC<KeyPointCardProps> = ({ title, description, imageSrc }) => (
  <div className="relative overflow-hidden rounded-lg">
    <Image
      src={imageSrc}
      alt={title}
      width={400}
      height={300}
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60 p-6 flex flex-col justify-end">
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white text-sm">{description}</p>
    </div>
  </div>
)

export function KeyPointsSectionComponent() {
  const keyPoints = [
    {
      title: "Client Centric Approach",
      description: "We prioritize your concerns and tailor our solutions to fit your specific legal requirements",
      imageSrc: "/placeholder.svg?height=300&width=400"
    },
    {
      title: "Expertise & Experience",
      description: "Our team of experienced professionals brings a wealth of knowledge to ensure effective legal representation",
      imageSrc: "/placeholder.svg?height=300&width=400"
    },
    {
      title: "Efficiency and Reliability",
      description: "We ensure timely responses and reliable support, so you can focus on what matters most",
      imageSrc: "/placeholder.svg?height=300&width=400"
    }
  ]

  return (
    <section className="bg-blue-900 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-sm font-semibold mb-2">OUR KEY POINTS</h2>
        <h3 className="text-white text-4xl font-bold mb-12">
          Focused On Delivering Results<br />That Matters Most
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyPoints.map((point, index) => (
            <KeyPointCard key={index} {...point} />
          ))}
        </div>
      </div>
      <Image
        src="/placeholder.svg?height=200&width=200"
        alt="Justice Scale"
        width={200}
        height={200}
        className="absolute top-0 right-0 opacity-20"
      />
    </section>
  )
}