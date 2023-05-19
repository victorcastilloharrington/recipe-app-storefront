import "../styles/globals.css";
import Layout from "@components/core/layout";

import type { AppProps } from "next/app";
import AuthProvider from "../context/authContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
};

export default App;
