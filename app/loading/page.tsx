"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Database, AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoadingPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simula progresso de carregamento
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 300);

    // Após 3 segundos, mostra erro
    const timer = setTimeout(() => {
      setIsLoading(false);
      clearInterval(progressInterval);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Loader2 className="h-16 w-16 text-purple-950 animate-spin" />
              <Database className="h-8 w-8 text-purple-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Loading Text */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Conectando ao servidor
            </h2>
            <p className="text-gray-600">
              Aguarde enquanto preparamos tudo para você...
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-purple-950 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Loading Steps */}
          <div className="space-y-2 text-sm text-gray-500">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Verificando credenciais
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Estabelecendo conexão
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              Carregando dados...
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error State
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle className="h-10 w-10 text-red-600" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Erro de Conexão
          </h2>
          <p className="text-gray-600">
            Não foi possível estabelecer conexão com o banco de dados.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-left">
            <p className="text-sm text-gray-500 font-mono">
              <span className="text-red-600">ERR_DATABASE_CONNECTION:</span> Timeout ao conectar ao servidor
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={() => window.location.reload()}
            className="w-full bg-purple-950 hover:bg-purple-900 text-white font-bold"
            size="lg"
          >
            Tentar Novamente
          </Button>
          
          <Button
            onClick={() => router.push("/")}
            variant="outline"
            className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-bold"
            size="lg"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para Home
          </Button>
        </div>

        {/* Support Link */}
        <p className="text-sm text-gray-500">
          Problemas persistem?{" "}
          <a href="mailto:contato@zucropay.com" className="text-purple-950 hover:underline font-medium">
            Contate o suporte
          </a>
        </p>
      </div>
    </div>
  );
}
