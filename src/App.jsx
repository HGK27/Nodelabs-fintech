import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "./store/auth/authSelectors";
import AppRouter from "./routes/AppRouter.jsx";

export default function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return <AppRouter isAuthenticated={isAuthenticated} />;
}