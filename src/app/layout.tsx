import type { Metadata } from "next"
import "./globals.css"
import Footer from "./_components/footer"
import { Toaster } from "./_components/ui/sonner"
import AuthProvider from "./_providers/auth"

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
        <AuthProvider>
          <div className="flex h-full flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  )
}
