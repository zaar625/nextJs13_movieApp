import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Provider from './Provider'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {/* Header */}
          <Header/>
          {/* Nav */}
          <NavBar/>
          {/* SearchBox */}
            {children}
        </Provider>
        
      </body>
    </html>
  )
}
