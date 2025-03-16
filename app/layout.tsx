'use client'

import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { PropsWithChildren, useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider, useSelector } from 'react-redux'
import { store, persistor, RootState } from './libs/store'
import { PersistGate } from 'redux-persist/integration/react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { SessionProvider } from 'next-auth/react'
import Loading from '@/app/components/ui/Loading'

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
  const [loading, setLoading] = useState(true); // Start with loading = true

  useEffect(() => {
    loading 
      ? document.body.classList.add('overflow-hidden') 
      : document.body.classList.remove('overflow-hidden');
    
    // Set a timeout to hide the loading screen after 4 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    
    return () => {
      clearTimeout(timer);
    };
  }, [loading]);
  
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <SessionProvider>
                {loading ? (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}>
                    <Loading />
                  </motion.div>
                ) : (
                  <BodyLayout>{children}</BodyLayout>
                )}
              </SessionProvider>
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
  }, [isDark, backgroundSpring]);
  
  return (
    <motion.div
      className="min-h-screen text-black dark:text-white"
      style={{ background }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};