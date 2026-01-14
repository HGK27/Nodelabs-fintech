import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useLogin } from "../../../hooks/useAuth";

import styles from "./LoginForm.module.scss";
import Spinner from "../../atoms/Spinner/Spinner";
import FormField from "../../molecules/FormdField/FormField";
import Button from "../../atoms/Button/Button";
import GoogleLogin from "../../molecules/GoogleLogin/GoogleLogin";

import { loginSchema } from "../../../utils/validations.js";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useLogin();

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (formData) => {
    // React Query mutasyonunu tetikle
    login(formData, {
      onSuccess: (data) => {
        toast.success("Giriş başarılı! Hoş geldiniz.");
        navigate("/dashboard/home");
      },
      onError: (error) => {
        // Backend'den gelen hata mesajını yakala
        const errMsg = error.response?.data?.message || "Bir hata oluştu";
        toast.error(errMsg);
      },
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.loginFormHeader}>
        <h2 className={styles.title}>Sign In</h2>
        <p className={styles.subtitle}>
          Welcome back! Please enter your details
        </p>
      </div>
      <div className={styles.loginFormMain}>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormField
              {...field}
              label="Email"
              placeholder="example@gmail.com"
              error={error}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormField
              {...field}
              type="password"
              label="Password"
              placeholder="*******"
              error={error}
            />
          )}
        />
      </div>
      <div className={styles.loginFormButtons}>
        <Button type="submit" disabled={isPending}>
          {isPending ? <Spinner /> : "Sign In"}
        </Button>
        <GoogleLogin></GoogleLogin>
      </div>
      <div className={styles.loginFormFooter}>
        <p className={styles.footerText}>
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </form>
  );
}
