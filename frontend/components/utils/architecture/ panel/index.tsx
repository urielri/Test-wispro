import styles from "./style.module.scss";
import Button from "components/utils/interactive/inputs/buttons/primary";
import Link from "next/link";
import { useUser } from "components/validation/context";
function Panel(): JSX.Element {
  const user = useUser();
  return (
    <div className={styles.panel}>
      <div className={styles.basicInfo}>
        <h3>
          Bienvenido, <span>{user.user}</span>
        </h3>
      </div>
      <div className={styles.actions}>
        <Link href="https://www.figma.com/file/zg2DZwS30JRfd5dszR1SoV/Untitled?node-id=1%3A761">
          <button>Figma</button>
        </Link>
        <Link href="https://github.com/urielri/test-wispro">
          <button>GitHub</button>
        </Link>
      </div>
    </div>
  );
}
export default Panel;
