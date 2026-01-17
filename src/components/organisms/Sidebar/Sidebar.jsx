import { useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/Logo.webp";
import LogoMobile from "../../../assets/images/mobileLogo.png";
import MenuItem from "../../molecules/MenuItem/MenuItem";
import ToggleButton from "../../atoms/ToggleButton/ToggleButton.jsx";

import {
  topMenuItems,
  bottomMenuItems,
} from "../../../configs/SidebarConfig.jsx";

import { useLogout } from "../../../hooks/useAuth.js";
import { toast } from "react-hot-toast";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { mutate: logoutUser } = useLogout();
  
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1200px)");

    const sync = () => {
      setCollapsed(mq.matches);
    };

    sync();

    if (mq.addEventListener) mq.addEventListener("change", sync);
    else mq.addListener(sync);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", sync);
      else mq.removeListener(sync);
    };
  }, []);

  const handleNavigate = (path, key) => {
    if (!path) return;

    if (key === "logout") {
      logoutUser();
      toast.success("Logged out successfully");
      navigate("/signin");
      return;
    }

    navigate(path);
  };

  const handleToggle = () => {
    if (window.matchMedia("(max-width: 1200px)").matches) {
      setCollapsed((v) => !v);
    }
  };

  return (
    <aside
      className={`${styles.sidebar} ${
        collapsed ? styles.collapsed : styles.expanded
      }`}
      aria-label="Sidebar"
    >
      {/* Toggle (sadece 1200 altı görünür) */}
      <ToggleButton
        collapsed={collapsed}
        onToggle={handleToggle}
      />

      {/* Brand */}
      <div className={styles.brand} onClick={() => handleNavigate("/home")}>
        <img src={Logo} alt="Logo" className={styles.logoFull} />
        <img
          src={LogoMobile}
          alt="Logo Mobile"
          className={styles.logoCompact}
        />
      </div>

      {/* Top Menu */}
      <nav className={styles.topMenu}>
        {topMenuItems.map((item) => (
          <MenuItem
            key={item.key}
            icon={item.icon}
            label={item.label}
            active={location.pathname.split("/").pop() === item.path}
            onClick={() => handleNavigate(item.path, item.key)}
          />
        ))}
      </nav>

      <div className={styles.spacer} />

      {/* Bottom Menu */}
      <nav className={styles.bottomMenu}>
        {bottomMenuItems.map((item) => (
          <MenuItem
            key={item.key}
            icon={item.icon}
            label={item.label}
            onClick={() => handleNavigate(item.path, item.key)}
          />
        ))}
      </nav>
    </aside>
  );
}
