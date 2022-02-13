import Layout from "../src/components/Layout/Layout";
import GlobalStyle from "../src/styles/globalStyles";
import Theme from "../src/styles/theme";
import "../src/styles/styles.css";
import { Provider } from "react-redux";
import store from "../src/state/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </Provider>
  );
}

export default MyApp;
