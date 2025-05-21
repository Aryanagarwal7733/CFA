import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

// Optional: If you plan to use page transitions with Framer Motion
// import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kalpi Capital</title>
        <meta name="description" content="India’s first systematic quant investing platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Optional if using framer-motion route transitions */}
      {/* <AnimatePresence mode="wait"> */}
      <Component {...pageProps} />
      {/* </AnimatePresence> */}
    </>
  )
}
