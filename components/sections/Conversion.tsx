"use client";

import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, CheckCircle } from "lucide-react";

const benefits = [
  "Razão social confiável na hora do PIX",
  "Aumento imediato na taxa de conversão",
  "Checkout transparente e seguro",
  "Aprovação instantânea de pagamentos",
];

export default function Conversion() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-purple-950 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <TrendingUp className="h-4 w-4" />
              Alta Performance
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Conversão
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Com a ZucroPay, sua taxa de conversão dispara porque seu cliente 
              enxerga uma razão social confiável na hora do PIX.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-purple-950 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-purple-950 hover:bg-purple-900 text-white font-bold shadow-lg"
            >
              Criar conta agora
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20"></div>
            
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-purple-200">
              <div className="space-y-6">
                {/* Mock Payment Card */}
                <div className="bg-gradient-to-br from-purple-950 to-purple-800 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <Shield className="h-8 w-8" />
                    <span className="text-sm font-semibold">SEGURO</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm opacity-70">Pagamento PIX</div>
                    <div className="text-3xl font-bold">R$ 54,13</div>
                    <div className="text-sm">ZucroPay - Compra Segura</div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-950">+45%</div>
                    <div className="text-xs text-gray-600">Conversão</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-950">98%</div>
                    <div className="text-xs text-gray-600">Aprovação</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-950">2.5%</div>
                    <div className="text-xs text-gray-600">Taxa PIX</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
