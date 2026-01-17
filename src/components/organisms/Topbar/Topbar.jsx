import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Topbar.module.scss";

import PageTitle from "../../atoms/PageTitle/PageTitle";
import IconButton from "../../atoms/IconButton/IconButton";
import ProfileBox from "../../molecules/ProfileBox/ProfileBox";
import MobileDropDownMenu from "../../molecules/MobileDropDownMenu/MobileDropDownMenu";


import { selectUser } from "../../../store/auth/authSelectors";
import { useLogout } from "../../../hooks/useAuth";
import { toast } from "react-hot-toast";

import NotificationIcon from "../../icons/NotificationIcon";
import SearchIcon from "../../icons/SearchIcon";

import {
  topMenuItems,
  bottomMenuItems,
  dropdownMenuItems,
} from "../../../configs/SidebarConfig";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { mutate: logoutUser } = useLogout();

  const user = useSelector(selectUser);
  const fullNameFromStorage = localStorage.getItem("fullName");

  // Redux state'indeki null değerine karşı fallback mekanizması
  const displayName = user?.fullName || user || fullNameFromStorage || "Guest User";

  // Dışarı tıklayınca menüyü kapatma
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

   const handleNavigate = (path, key) => {
    if (!path) return;

    if (key === "logout") return handleLogout();

    navigate(`/${path.replace("/", "")}`);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logoutUser();
    toast.success("Logged out successfully");
    navigate("/signin");
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.topbar}>
      {/* Sol Kısım */}
      <div className={styles.left}>
        <PageTitle>Dashboard</PageTitle>
      </div>

      {/* Sağ Kısım */}
      <div className={styles.right}>
        <IconButton
          icon={<SearchIcon size={24} />}
          onClick={() => console.log("Search")}
        />
        <IconButton
          icon={<NotificationIcon size={20} />}
          onClick={() => console.log("Notification")}
        />

        {/* Profil ve Dropdown Alanı */}
        <div className={styles.profileWrapper} ref={menuRef}>
          <div 
            className={styles.profileTrigger} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <ProfileBox
              name={displayName}
              avatar={`https://ui-avatars.com/api/?name=${displayName}&background=2f3439&color=fff`}
            />
          </div>

          {/* Sadece isMenuOpen true ise gösterilen Dropdown */}
          {isMenuOpen && (
            <div className={styles.dropdownMenu}>
              <div className={styles.mobileOnlyInfo}>
                <p>{displayName}</p>
              </div>
            <MobileDropDownMenu
              topItems={topMenuItems}
              dropdownItems={dropdownMenuItems}
              bottomItems={bottomMenuItems}
              onNavigate={handleNavigate}
              onLogout={handleLogout}
            />
            </div>
            
          )}
        </div>
      </div>
    </header>
  );
}