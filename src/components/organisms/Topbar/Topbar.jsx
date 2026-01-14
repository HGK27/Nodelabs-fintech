import styles from "./Topbar.module.scss";

import PageTitle from "../../atoms/PageTitle/PageTitle";
import IconButton from "../../atoms/IconButton/IconButton";
import ProfileBox from "../../molecules/ProfileBox/ProfileBox";

import { selectUser } from "../../../store/auth/authSelectors";
import { useSelector } from "react-redux";

import NotificationIcon from "../../icons/NotificationIcon";
import SearchIcon from "../../icons/SearchIcon";

export default function Topbar() {
  const user = useSelector(selectUser); 
  const FullNameFromStorage = localStorage.getItem("fullName");
  
  return (
    <header className={styles.topbar}>
      {/* Left */}
      <div className={styles.left}>
        <PageTitle>Dashboard</PageTitle>
      </div>
     
      {/* Right */}
      <div className={styles.right}>
      <IconButton 
        icon={<SearchIcon size={24} />} 
        onClick={() => console.log("Search")} 
      />
        <IconButton 
        icon={<NotificationIcon size={20} />} 
        onClick={() => console.log("Notification")} 
      />
        <ProfileBox
          name={user?.fullName || FullNameFromStorage || "Guest User"}
          avatar="https://ui-avatars.com/api/?name=Guest&background=2f3439&color=fff"
        />
      </div>
    </header>
  );
}
