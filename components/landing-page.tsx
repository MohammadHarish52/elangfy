"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
            <span className="text-white text-xl font-bold">E</span>
          </div>
          <span className="text-xl font-bold text-gray-800">ELEGALIFY</span>
        </div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Testimonials
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-2">
          <span className="text-green-500">Free Consultation</span>
          <span className="font-semibold">661-909345</span>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12 flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 pr-0 md:pr-12">
          <div className="inline-block bg-gray-900 text-white text-sm font-semibold px-3 py-1 rounded-full mb-6">
            ELEGALIFY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            One Step Solution
            <br />
            For All Your Legal
            <br />
            Problems
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Expert Help in Consumer Rights, Divorce,
            <br />
            Digital Signatures, Legal Notices & More
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded w-full md:w-auto"
          >
            BOOK A FREE CONSULTATION
          </Button>
        </div>
        <div className="w-full md:w-1/2 bg-blue-900 rounded-lg overflow-hidden relative mb-8 md:mb-0">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Statue of Justice"
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      </main>
    </div>
  );
}
