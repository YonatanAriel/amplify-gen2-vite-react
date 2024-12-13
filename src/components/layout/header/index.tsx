import { useAuthenticator } from "@aws-amplify/ui-react";
import styles from "./header.module.css";
import { Button } from "@mui/material";
function Header() {
  const { signOut } = useAuthenticator();

  return (
    <nav className={styles.navbar}>
      <Button variant="outlined" onClick={signOut}>
        Sign Out
      </Button>
    </nav>
  );
}
export default Header;
