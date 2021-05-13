import Content from "components/pages/dashboard";
import { getUsers } from "api";
function Dashboard(props: { data: any }): JSX.Element {
  const { data } = props;
  return <Content data={data} />;
}
export default Dashboard;
export async function getStaticProps(): Promise<any> {
  const data = await getUsers()
  return {
    props: {
      data: data,
    },
  };
}
