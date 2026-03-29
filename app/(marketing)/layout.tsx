import type { ReactNode } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BookingModal } from '@/components/sections/BookingModal'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        {children}
      </main>
      <Footer />
      <BookingModal />
    </>
  )
}