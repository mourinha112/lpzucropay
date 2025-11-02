import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZucroPay - Gateway de Pagamento Seguro e Confiável",
  description: "Plataforma de pagamento segura e confiável para o seu negócio. Taxas competitivas, suporte 24/7 e pagamento D+0. Aceite PIX, cartão e boleto.",
  keywords: "gateway de pagamento, pix, pagamento online, zucropay, checkout, ecommerce",
  authors: [{ name: "ZucroPay" }],
  openGraph: {
    title: "ZucroPay - Gateway de Pagamento",
    description: "Na ZucroPay, grandes operações têm taxas que desaparecem como mágica!",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZucroPay - Gateway de Pagamento",
    description: "Plataforma de pagamento segura e confiável para o seu negócio",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#380F7F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
