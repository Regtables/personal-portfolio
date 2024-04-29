import type { Metadata } from 'next'
import { poppins } from './lib/fonts'
import './globals.scss'

import { SectionProvider } from './context/SectionContext'
import { ModalProvider as ModalContextProvider } from './context/ModalContext'
import MobileNavbar from './components/MobileNavbar/MobileNavbar'
import ModalProvider from './components/providers/ModalProvider'

export const metadata: Metadata = {
  title: 'Regtables Developer Portfolio',
  description: 'Fullstack React Developer portfolio for Reghardt Pienaar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ModalContextProvider>
      <SectionProvider>
        <html lang="en">
          <body className={poppins.className} id = 'body'>
            <div className='fixed end-[1rem] top-[1rem] z-[100] lg:hidden'>
              <MobileNavbar />
            </div>

            {children}

            <ModalProvider />
          </body>
        </html>
      </SectionProvider>
    </ModalContextProvider>
  )
}
