import { useAuthenticator } from "@aws-amplify/ui-react";
import styles from "./header.module.css";
function Header() {
  const { signOut } = useAuthenticator();

  return (
    <nav className={styles.navbar}>
      <button onClick={signOut}>Sign out</button>
    </nav>
  );
}
export default Header;
