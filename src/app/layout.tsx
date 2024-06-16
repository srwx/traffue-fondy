import './globals.css'
import type { Metadata } from 'next'
import TagManager, { TagManagerArgs } from 'react-gtm-module'

const tagManagerArgs: TagManagerArgs = {
  gtmId: 'GTM-WZ537T2S',
}

// check is it working on client side
if (typeof window !== 'undefined') {
  TagManager.initialize(tagManagerArgs)
}

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
