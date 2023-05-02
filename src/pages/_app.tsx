import 'tailwindcss/tailwind.css'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'
// import AppBar from '@/components/AppBar'

import GlobalStyles from '@/pages/GlobalStyles'
import Header from '@/components/Header'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <div className='flex w-full'>
    <Header />
  
   
    <div className='bg-[#f7f7f7] w-full m-4'>
    
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
    </div>
    </>
  )
}
