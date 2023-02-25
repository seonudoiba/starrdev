import '@/styles/globals.scss'
import Layout from '@/components/Layout'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return(
    <Layout  className={roboto.className}>
<Component {...pageProps} />
    </Layout>
  ) 
}
