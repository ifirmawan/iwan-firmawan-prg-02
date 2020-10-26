import Head from 'next/head'
const Layout = ({ title = 'Beranda', children }) => {
  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <title>{title}</title>
        <link rel='icon' href='/images/logo.svg' sizes='16x16' type='image/svg' />
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout
