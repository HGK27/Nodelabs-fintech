import { useMutation,useQueryClient } from '@tanstack/react-query';
import { LoginRequest, RegisterRequest, LogoutRequest } from '../services/auth/authService';
import { useDispatch } from 'react-redux';
import { setAuth, logout } from '../store/auth/authSlice';

export const useLogin = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: LoginRequest,
    onSuccess: (data) => {
      const { user, accessToken } = data.data;
      // 1. Token'ı kalıcı yap
      localStorage.setItem('accessToken', accessToken);
      // 2. Redux'a "Kullanıcı giriş yaptı" bilgisini uçur
      dispatch(setAuth({ user: user, token: accessToken }));
    },
    onError: (error) => {
      console.log("Giriş hatası:", error);
    }
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: RegisterRequest,
    onSuccess: (data) => {

    },
    onError: (error) => {
            console.log("kayıt hatası:", error);
    }
  });
};

export const useLogout = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: LogoutRequest,
    onSuccess: () => {  
      dispatch(logout());
      localStorage.removeItem('accessToken');
      queryClient.clear();
    },
    onError: (error) => {
      console.log("Çıkış hatası:", error);
    }
  });
}