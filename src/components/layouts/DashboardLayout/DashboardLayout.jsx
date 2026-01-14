import styles from "./DashboardLayout.module.scss";
import Sidebar from "../../organisms/Sidebar/Sidebar.jsx";
import Topbar from "../../organisms/Topbar/Topbar";
import { Outlet } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css';

export default function DashboardLayout() {
  return (
    <div className={styles.dashboardLayout}>
      <Sidebar />

      <div className={styles.main}>
        <Topbar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
