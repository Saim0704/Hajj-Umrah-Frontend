import Layout from '@/src/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Layout {...pageProps}>
  <Component {...pageProps} />
</Layout>
}
