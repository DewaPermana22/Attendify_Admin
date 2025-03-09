'use client'
import { Inter, Poppins } from 'next/font/google'
import { ConfigProvider } from 'antd'
import './globals.css'
import { PropsWithChildren, useState } from 'react'
import UseColor from './constants/Color'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {Provider} from 'react-redux'
import { store, persistor } from './libs/store'
import { PersistGate } from 'redux-persist/integration/react'

// Configure Inter font
const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter'
})

// Configure Poppins font
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

export default function RootLayout({ children } : PropsWithChildren<{}>) {
  const color = UseColor();
  const [queryClient] = useState(() => new QueryClient()); // Inisialisasi QueryClient

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            {children}
            </PersistGate>
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
