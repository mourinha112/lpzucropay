"use client";

import Image from "next/image";
import { Instagram, Mail, FileText } from "lucide-react";

const footerLinks = {
  company: [
    { name: "Quem Somos", href: "#" },
    { name: "Diferenciais", href: "#" },
    { name: "Premiações", href: "#" },
  ],
  support: [
    { name: "Suporte", href: "#" },
    { name: "Contato", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  legal: [
    { name: "Política de Privacidade", href: "#" },
    { name: "Política de Conteúdo", href: "#" },
    { name: "Termos de Uso", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-4 inline-block">
              <Image
                src="/logotipo.png"
                alt="ZucroPay Logo"
                width={150}
                height={45}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-purple-200">
              Na ZucroPay, grandes operações têm taxas que desaparecem como mágica!
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white hover:text-purple-950 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:contato@zucropay.com"
                className="bg-white/10 hover:bg-white hover:text-purple-950 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-purple-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-purple-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-purple-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-700/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-purple-200">
              © 2025 ZucroPay. Todos Direitos Reservados.
            </p>
            <p className="text-sm text-purple-200">
              contato@zucropay.com
            </p>
            <p className="text-sm font-mono text-purple-200">
              CNPJ: XX.XXX.XXX/0001-XX
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
