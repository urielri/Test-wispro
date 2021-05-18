import Login from "components/utils/architecture/auth/login";
import { useAuth0 } from "@auth0/auth0-react";
import { useUser } from "@/components/validation/context";
import { useRouter } from "next/router";
import { useEffect } from "react";
function Home({ setUser }): JSX.Element {
  const router = useRouter();
  const currentUser = useUser();
  useEffect(() => {
    currentUser.logged && router.push("/dashboard");
  }, []);
  return <Login setUser={setUser} />;
}
export default Home;
