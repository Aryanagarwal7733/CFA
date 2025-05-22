import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

// Optional: Framer Motion page transition wrapper
// import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <Head>
        <title>Kalpi Capital</title>
        <meta name="description" content="India’s first systematic quant investing platform — Unlocking algorithmic alpha." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#003366" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Optional if using framer-motion route transitions */}
      {/* <AnimatePresence mode="wait"> */}
      <Component {...pageProps} />
      {/* </AnimatePresence> */}
    </ThemeProvider>
  );
}
