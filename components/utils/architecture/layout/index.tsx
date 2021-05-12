import styles from "./style.module.scss";
function Layout(props: { children: JSX.Element }): JSX.Element {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
}
export default Layout;
