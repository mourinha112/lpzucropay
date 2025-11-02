"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

export default function CTA() {
  const router = useRouter();

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
            <Rocket className="h-4 w-4" />
            Comece Agora
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Pronto para revolucionar
            <br />
            seus pagamentos?
          </h2>

          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Junte-se a milhares de empresas que já confiam na ZucroPay 
            para processar seus pagamentos de forma segura e eficiente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="xl" 
              onClick={() => router.push("/loading")}
              className="bg-white text-purple-950 hover:bg-purple-100 font-bold shadow-2xl"
            >
              Criar Conta Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="xl" 
              variant="outline" 
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-purple-950 font-bold"
            >
              Falar com Especialista
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-3xl font-bold mb-2">0%</div>
              <div className="text-sm text-purple-200">Taxa de Setup</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm text-purple-200">Suporte Ativo</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-3xl font-bold mb-2">5min</div>
              <div className="text-sm text-purple-200">Para Começar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
