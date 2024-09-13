
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
     title: '為替手数料計算機',
     description: '為替手数料がどれぐらいか計算できます。旅行・出張・FXなどにご利用ください。',
     keywords: '為替, 手数料, 旅行, currency exchange, fee calculator, forex',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
