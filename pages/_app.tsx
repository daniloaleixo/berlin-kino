import React from 'react'
import type { AppProps } from 'next/app'
import '../src/index.css'
import '../src/i18n'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
} 