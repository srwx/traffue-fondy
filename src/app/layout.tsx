import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffue Fondy',
  description: 'This project is used for hack bkk 2023',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
