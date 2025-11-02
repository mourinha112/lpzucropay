"use client";

import { Smartphone, CreditCard, Banknote, Wallet } from "lucide-react";

const integrations = [
  { name: "PIX", icon: Smartphone, description: "Pagamentos instantâneos" },
  { name: "Cartão de Crédito", icon: CreditCard, description: "Até 12x sem juros" },
  { name: "Boleto", icon: Banknote, description: "Pagamento tradicional" },
  { name: "Carteira Digital", icon: Wallet, description: "Múltiplas carteiras" },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Integração Com Os
            <br />
            <span className="text-purple-950">Melhores Do Mercado</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-200 hover:border-purple-950 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-950 opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="mb-4 inline-flex p-4 bg-purple-950 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                  <integration.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {integration.name}
                </h3>
                
                <p className="text-gray-600">
                  {integration.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
