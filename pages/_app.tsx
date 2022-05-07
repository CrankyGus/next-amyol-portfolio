import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'


if(typeof window !== 'undefined'){
  window.history.scrollRestoration = 'manual'
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <AnimatePresence exitBeforeEnter initial={true} >
      <Component {...pageProps} />
    </AnimatePresence>
    </>
  )
}

export default MyApp
