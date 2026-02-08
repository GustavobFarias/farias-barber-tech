import type { Metadata } from "next"
import "./globals.css"
import Footer from "./_components/footer"
import { Toaster } from "./_components/ui/sonner"

export const metadata: Metadata = {
  title: "BarberTech",
  description: "Software for barbershops, ideal for your barbershop.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="dark">
        {children}

        <Toaster />

        <Footer />
      </body>
    </html>
  )
}
