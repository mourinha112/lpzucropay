"use client";

import Image from "next/image";
import { Monitor, Zap, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Dashboard Intuitivo",
    description: "Interface limpa e fácil de usar",
  },
  {
    icon: Zap,
    title: "Tempo Real",
    description: "Acompanhe tudo instantaneamente",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Seus dados sempre protegidos",
  },
  {
    icon: TrendingUp,
    title: "Análises Completas",
    description: "Relatórios detalhados do seu negócio",
  },
];

export default function SystemPreview() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-purple-50 to-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-950 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Monitor className="h-5 w-5" />
            Dashboard Completo
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sistema Completo e Intuitivo
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tenha controle total do seu negócio com nossa plataforma moderna e fácil de usar
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-purple-100"
            >
              <div className="inline-flex p-4 bg-purple-950 rounded-xl text-white mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* System Preview Image */}
        <div className="relative px-4 md:px-0">
          {/* Decorative Elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
          
          {/* Main Preview Container */}
          <div className="relative">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl md:rounded-3xl blur-xl opacity-30 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 rounded-2xl md:rounded-3xl p-1 md:p-2 shadow-2xl">
              <div className="relative bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-inner">
                {/* Browser Top Bar */}
                <div className="bg-gray-100 px-3 md:px-4 py-2 md:py-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 mx-2 md:mx-4">
                    <div className="bg-white rounded-lg px-3 md:px-4 py-0.5 md:py-1 text-[10px] md:text-xs text-gray-500 border border-gray-200 truncate">
                      dashboard.zucropay.com
                    </div>
                  </div>
                </div>
                
                {/* System Screenshot */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <div className="absolute inset-0 bg-gray-50">
                    <Image
                      src="/index.png"
                      alt="ZucroPay Dashboard Preview"
                      fill
                      className="object-contain object-top p-0"
                      unoptimized
                      priority
                    />
                  </div>
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-green-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-[10px] md:text-sm font-bold shadow-lg flex items-center gap-1 md:gap-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="hidden sm:inline">Sistema Ativo</span>
                    <span className="sm:hidden">Ativo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Experimente agora e veja como é fácil gerenciar seus pagamentos
          </p>
          <div className="inline-flex items-center gap-2 text-purple-950 font-bold">
            <Zap className="h-5 w-5" />
            <span>100% Online • Sem instalação • Acesso imediato</span>
          </div>
        </div>
      </div>
    </section>
  );
}
