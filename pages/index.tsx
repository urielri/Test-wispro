import Login from "components/utils/architecture/auth/login";
import { useAuth0 } from "@auth0/auth0-react";

function Home(): JSX.Element {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return <>{isAuthenticated ? isLoading : <Login />}</>;
}
export default Home;
