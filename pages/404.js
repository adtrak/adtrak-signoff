import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import { motion } from 'framer-motion'

export default function ErrorPage() {

  return (

    <Layout>

      <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Nextjs boilerplate</title>
          <meta
          name="description"
          content="nextJS boilerplate"
          />
          <meta name="og:title" content="Website Title" />
          <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

    </Layout>
  )
}
