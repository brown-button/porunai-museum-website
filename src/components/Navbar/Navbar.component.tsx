import { Assets } from "utils/imports.utils";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.nav_main}>
      <div className={styles.nav_wrapper}>
      <div className={styles.header_container}>
      <div className={styles.tn_logo}>
        <img
          src={Assets.tn_logo}
          alt="TN Government Logo"
          className={styles.logo}
        />
      </div>

      <div className={styles.right_section}>
        <div className={styles.language_switcher}>
          <p>EN</p>
          <p>TA</p>
        </div>

        <div className={styles.menu}>
          <img src={Assets.menu} alt="menu image" />
          <p>MENU</p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Navbar;
