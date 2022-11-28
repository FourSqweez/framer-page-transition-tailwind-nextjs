import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../src/components/Navbar';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }: AppProps) {
   return (
      <div className="font-latoBold">
         <Navbar />
         <AnimatePresence>
            <Component key={router.pathname} {...pageProps} />
         </AnimatePresence>
      </div>
   );
}
