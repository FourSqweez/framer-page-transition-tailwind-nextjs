import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../src/components/Navbar'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className='py-12 px-12 lg:px-48 font-latoBold'>
      <Navbar />
      <AnimatePresence initial={false }>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  )
}

 