import Head from 'next/head';

export default function SeoHead ({ title, description }) {
    return(
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />
      </Head>
    )
    
}