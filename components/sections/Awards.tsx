"use client";

import { useState } from "react";
import Image from "next/image";
import { Trophy, ChevronLeft, ChevronRight } from "lucide-react";

const awards = [
  {
    title: "Placa 100K",
    image: "/PLACA100k.png",
    description: "Parabéns por conquistar",
    value: "100K",
  },
  {
    title: "Placa 1 Milhão",
    image: "/PLACA1M.png",
    description: "Parabéns por conquistar",
    value: "1M",
  },
  {
    title: "Placa 5 Milhões",
    image: "/PLACA5M.png",
    description: "Parabéns por conquistar",
    value: "5M",
  },
  {
    title: "Placa 10 Milhões",
    image: "/PLACA10M.png",
    description: "Parabéns por conquistar",
    value: "10M",
  },
];

export default function Awards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % awards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + awards.length) % awards.length);
  };

  return (
    <section id="awards" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-950 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Trophy className="h-5 w-5" />
            Placas de Premiação
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossas Premiações
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reconhecidos pela excelência e marcos alcançados
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-8">
            {/* Previous Button */}
            {awards.length > 1 && (
              <button
                onClick={prevSlide}
                className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-all hover:scale-110 shadow-lg"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Award Card */}
            <div className="flex-1 max-w-xs">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
                <Image
                  src={awards[currentIndex].image}
                  alt={awards[currentIndex].title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Next Button */}
            {awards.length > 1 && (
              <button
                onClick={nextSlide}
                className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-all hover:scale-110 shadow-lg"
                aria-label="Próximo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Mobile Navigation */}
          {awards.length > 1 && (
            <div className="flex md:hidden justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-all shadow-lg"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-all shadow-lg"
                aria-label="Próximo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          )}

          {/* Dots Indicator */}
          {awards.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {awards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-pink-600"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Platform Statement */}
        <div className="mt-20 text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Plataforma de player para player.
          </h3>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma foi feita por quem já passou pelo mesmo caminho e 
            sabe exatamente o que você precisa para vender sem medo.
          </p>
        </div>
      </div>
    </section>
  );
}
