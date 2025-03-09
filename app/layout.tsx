'use client'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { PropsWithChildren, useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider, useSelector } from 'react-redux'
import { store, persistor, RootState } from './libs/store'
import { PersistGate } from 'redux-persist/integration/react'
import { motion, useSpring, useTransform } from 'framer-motion'

// Konfigurasi Font
const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <BodyLayout>{children}</BodyLayout> 
            </PersistGate>
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

const BodyLayout = ({ children }: PropsWithChildren<{}>) => {
  const isDark = useSelector((state: RootState) => state.theme.darkmode);

  const backgroundSpring = useSpring(isDark ? 1 : 0, {
    stiffness: 100,
    damping: 20,
  });

  const background = useTransform(backgroundSpring, [0, 1], ["#f1ebfc", "#0F0F10"]);

  useEffect(() => {
    backgroundSpring.set(isDark ? 1 : 0);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <motion.div 
      className="min-h-screen text-black dark:text-white"
      style={{ background }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
