import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setAuth, logout } from "../store/auth/authSlice";
import { GetProfileRequest } from "../services/auth/authService";

export function useGetProfileInfo() {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ["auth", "bootstrap"],
    queryFn: GetProfileRequest,
    retry: false,
    onSuccess: (data) => {
      dispatch(setAuth({ user: data }));
    },
    onError: () => {
      dispatch(logout());
    },
  });
}