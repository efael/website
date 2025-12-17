import { type Metadata } from 'next'
import localFont from 'next/font/local'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = localFont({ src: './Inter.ttf' })

export const metadata: Metadata = {
  title: {
    template: '%s - Uchar',
    default: 'Uchar - Experience your own ether.',
  },
  description:
    'By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.className)}>
      <body>{children}</body>
    </html>
  )
}
