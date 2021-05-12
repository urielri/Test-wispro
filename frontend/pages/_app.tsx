import "../styles/globals.scss";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import Layout from "components/utils/architecture/layout/";

function MyApp({ Component, pageProps }) {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <Auth0Provider domain={process.env.DOMAIN} clientId={process.env.CLIENT_ID}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Auth0Provider>
  );
}

export default MyApp;
