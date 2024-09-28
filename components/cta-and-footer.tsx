'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaAndFooter() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Courthouse columns"
          width={1200}
          height={400}
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready To Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us now and let our experts assist you with your legal needs. Fast, reliable, and professional
          </p>
          <Button size="lg" variant="secondary">
            BOOK A FREE CONSULTATION
          </Button>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded mr-2" />
                <span className="text-2xl font-bold text-white">ELEGALIFY</span>
              </Link>
              <p className="mt-2 text-sm">
                One Stop Solution for all your legal problems
              </p>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
}