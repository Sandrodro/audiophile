import Layout from '../src/components/Layout/Layout'
import GlobalStyle from '../src/styles/globalStyles'
import Theme from '../src/styles/theme'

function MyApp({ Component, pageProps }) {
  return (<>
    <GlobalStyle />
    <Theme>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  </>)
}

export default MyApp
