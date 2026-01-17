import HelpIcon from "../components/icons/HelpIcon";
import WalletIcon from "../components/icons/WalletIcon";
import SettingsIcon from "../components/icons/SettingsIcon";
import HomeIcon from "../components/icons/HomeIcon";
import TransactionsIcon from "../components/icons/TransactionIcon";
import InvoiceIcon from "../components/icons/InvoiceIcon";
import LogoutIcon from "../components/icons/LogoutIcon";
import NotificationIcon from "../components/icons/NotificationIcon";
import SearchIcon from "../components/icons/SearchIcon";

export const topMenuItems = [
  {
    key: "home",
    label: "Dashboard",
    icon: <HomeIcon />,
    path: "home",
  },
  {
    key: "transactions",
    label: "Transactions",
    icon: <TransactionsIcon />,
    path: "transactions",
  },
  {
    key: "invoices",
    label: "Invoices",
    icon: <InvoiceIcon />,
    path: "invoices",
  },
  {
    key: "wallets",
    label: "My Wallets",
    icon: <WalletIcon />,
    path: "wallets",
  },
  {
    key: "settings",
    label: "Settings",
    icon: <SettingsIcon />,
    path: "settings",
  },
];
export const bottomMenuItems = [
  {
    key: "Help",
    label: "Help",
    icon: <HelpIcon />,
    path: "/help",
  },
  {
    key: "logout",
    label: "Logout",
    icon: <LogoutIcon />,
    path: "/logout",
  },
];
export const dropdownMenuItems = [
  {
    key: "Notification",
    label: "Notification",
    icon: <NotificationIcon />,
    path: "/notification",
  },
  {
    key: "Search",
    label: "Search",
    icon: <SearchIcon />,
    path: "/search",
  },
];