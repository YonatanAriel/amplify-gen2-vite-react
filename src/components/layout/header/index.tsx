import { useAuthenticator } from "@aws-amplify/ui-react";
import styles from "./header.module.css";
import { Button } from "@mui/material";
import NavigationLink from "./NavigationLink";
function Header() {
  const { signOut } = useAuthenticator();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navigation}>
        <NavigationLink to="/" text="Home" />
        <NavigationLink to="/yaron" text="Yaron" />
        <NavigationLink to="/yonatan" text="Yonatan" />
      </div>
      <Button variant="outlined" onClick={signOut}>
        Sign Out
      </Button>
    </nav>
  );
}
export default Header;
