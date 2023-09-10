import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffue Fondy',
  description: 'This project is used for bkk',
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
