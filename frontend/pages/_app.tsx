import "../styles/globals.scss";
import { useEffect, useState } from "react";
import Layout from "components/utils/architecture/layout/";
import { UserProvider, user } from "@/components/validation/context";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const [currentUser, setUser] = useState(user);
  const router = useRouter()
  useEffect(() => {
    console.log(currentUser);
    currentUser.logged && router.push('/dashboard')
  }, [currentUser]);
  return (
    <UserProvider value={currentUser}>
      <Layout>
        <Component {...pageProps} setUser={setUser} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
