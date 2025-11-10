import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageSwitcher } from "@/components/language-switcher"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Campus Aberto - CEFET-MG",
  description:
    "Esporte gratuito e de qualidade para toda a comunidade. Participe das atividades esportivas do Campus Aberto CEFET-MG.",
    creator: 'Marcelo Teixeira de Sousa Filho e Isabelly Araujo Temóteo'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageSwitcher />
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
