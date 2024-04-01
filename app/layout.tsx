import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/legacy/image'
import StoreProvider from './StoreProvider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Jrainlau | Blog',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen w-screen overflow-hidden flex`}>
        <StoreProvider count={0}>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
