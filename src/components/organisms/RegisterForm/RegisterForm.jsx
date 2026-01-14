import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useRegister } from "../../../hooks/useAuth";

import styles from "./RegisterForm.module.scss";
import Spinner from "../../atoms/Spinner/Spinner";
import FormField from "../../molecules/FormdField/FormField";
import Button from "../../atoms/Button/Button";
import GoogleLogin from "../../molecules/GoogleLogin/GoogleLogin";

import { registerSchema } from "../../../utils/validations.js";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegisterForm() {
  const navigate = useNavigate();
  const { mutate: register, isPending } = useRegister();

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (formData) => {
    // React Query mutasyonunu tetikle
    register(formData, {
      onSuccess: (data) => {
        toast.success("Kayıt başarılı!");
        navigate("/signin");
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
        <h2 className={styles.title}>Create new account</h2>
        <p className={styles.subtitle}>
          Welcome back! Please enter your details
        </p>
      </div>
      <div className={styles.loginFormMain}>
        <Controller
          name="fullName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormField
              {...field}
              label="Full Name"
              placeholder="Mahfuzul Nabil"
              error={error}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormField
              {...field}
              label="Email"
              placeholder="example@gmail.com"
              error={error} // Hatayı FormField'a gönderiyoruz
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Şifre zorunludur",
            minLength: { value: 6, message: "En az 6 karakter olmalı" },
          }}
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
                 {isPending ? <Spinner /> : "Sign Up"}
               </Button>
        <GoogleLogin></GoogleLogin>
      </div>
      <div className={styles.loginFormFooter}>
        <p className={styles.footerText}>
          Already have an account? <a href="/signin">Sign in</a>
        </p>
      </div>
    </form>
  );
}
