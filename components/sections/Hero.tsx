"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 text-white pt-20">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(147, 51, 234, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(147, 51, 234, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 to-transparent"></div>
      
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4 max-w-4xl animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Seja Rápido,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Seja ZucroPay
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 max-w-2xl mx-auto">
              Na ZucroPay, grandes operações têm taxas que desaparecem como mágica!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              size="xl" 
              className="bg-white text-purple-950 hover:bg-purple-50 font-bold shadow-2xl"
            >
              Criar uma conta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="xl" 
              variant="outline" 
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-purple-950 font-bold"
            >
              Saiba mais
            </Button>
          </div>

          {/* Badge */}
          <div className="flex items-center gap-2 bg-purple-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-400/30">
            <Zap className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-semibold">D+0 - Piscou, o pagamento caiu!</span>
          </div>

          {/* Hero Image */}
          <div className="mt-12 animate-float">
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-purple-900/50 to-purple-800/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/20 shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-purple-300">4,99%</div>
                    <div className="text-sm text-purple-200">Taxa</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-purple-300">D+0</div>
                    <div className="text-sm text-purple-200">Pagamento</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-purple-300">24/7</div>
                    <div className="text-sm text-purple-200">Suporte</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-purple-300">100%</div>
                    <div className="text-sm text-purple-200">Seguro</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
