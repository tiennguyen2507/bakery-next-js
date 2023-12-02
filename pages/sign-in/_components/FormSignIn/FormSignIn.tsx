import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import Cookies from "js-cookie";
import type { LoginRequest } from "types/auth.type";
import { useAuthApi } from "api/auth.api";
import styles from "./FormSignIn.module.css";

const FormSignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email không được bỏ trống" })
    .email({ message: "Định dạng email chưa đúng" }),
  password: z.string().min(1, { message: "Password không được bỏ trống" }),
});

type TypeFormSignIn = z.infer<typeof FormSignInSchema>;

const FormSignIn = (): JSX.Element => {
  const router = useRouter();
  const { authLogin } = useAuthApi();

  const { mutate, error, isLoading } = useMutation({
    mutationFn: (data: LoginRequest) => authLogin(data),
    onSuccess: ({ data }) => {
      Cookies.set("token", data.access_token, { expires: 7 });
      router.push("/user");
    },
  });

  const { formState, register, handleSubmit } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(FormSignInSchema),
  });

  const onSignIn = async (data: TypeFormSignIn) => {
    await mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSignIn)} className={styles.wrapper}>
      {(error as { message: string })?.message && (
        <div>
          <BaseTypography weight={600} color="venetian-red">
            {(error as { message: string })?.message}
          </BaseTypography>
        </div>
      )}
      <BaseFlexBox direction="column" gap={18}>
        <BaseInput
          label="Email"
          error={formState.errors.email?.message}
          disabled={isLoading}
          {...register("email")}
        />
        <BaseInput
          label="Mật khẩu"
          type="password"
          disabled={isLoading}
          error={formState.errors.password?.message}
          {...register("password")}
        />
        <BaseTypography align="end" weight={600} color="venetian-red">
          Quên mật khẩu?
        </BaseTypography>
        <BaseButton
          type="submit"
          label="Đăng nhập"
          loading={isLoading}
          disabled={!formState.isDirty}
        />
      </BaseFlexBox>
    </form>
  );
};

export default FormSignIn;
