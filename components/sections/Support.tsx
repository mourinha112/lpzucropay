"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, Headphones, Award } from "lucide-react";

const supportFeatures = [
  {
    icon: Clock,
    title: "24 horas por dia",
    description: "Atendimento ininterrupto",
  },
  {
    icon: MessageCircle,
    title: "Chat em tempo real",
    description: "Respostas instantâneas",
  },
  {
    icon: Headphones,
    title: "Suporte especializado",
    description: "Time dedicado ao seu sucesso",
  },
  {
    icon: Award,
    title: "Taxas personalizadas",
    description: "De acordo com seu faturamento",
  },
];

export default function Support() {
  return (
    <section id="support" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20"></div>
            
            <div className="relative grid grid-cols-2 gap-4">
              {supportFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-950 to-purple-800 rounded-2xl p-6 text-white hover:scale-105 transition-transform duration-300"
                >
                  <feature.icon className="h-8 w-8 mb-4" />
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm opacity-90">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="inline-flex items-center gap-2 bg-purple-950 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <MessageCircle className="h-4 w-4" />
              Sempre Disponível
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Suporte 24hrs
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Taxas personalizadas de acordo com seu faturamento mensal. 
              Nossa equipe está sempre disponível para garantir que você 
              tenha a melhor experiência possível.
            </p>

            <div className="space-y-4">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="font-bold text-purple-950 mb-2">
                  Atendimento Humanizado
                </h3>
                <p className="text-gray-700">
                  Time especializado pronto para resolver qualquer questão, 
                  desde integração até suporte técnico avançado.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="font-bold text-purple-950 mb-2">
                  Taxas Competitivas
                </h3>
                <p className="text-gray-700">
                  Quanto mais você fatura, melhores são suas condições. 
                  Crescemos juntos com o seu negócio.
                </p>
              </div>
            </div>

            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-purple-950 text-purple-950 hover:bg-purple-950 hover:text-white font-bold shadow-lg"
            >
              Entrar em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
