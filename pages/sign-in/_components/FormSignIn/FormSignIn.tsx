import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./FormSignIn.module.css";
import axios, { AxiosError } from "axios";

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

  const { formState, register, handleSubmit, setError } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(FormSignInSchema),
  });
  const onSignIn = async (dataForm: TypeFormSignIn) => {
    await axios("/auth/login", {
      method: "post",
      baseURL: "http://localhost:3000/api",
      data: dataForm,
    })
      .then(() => router.push("/"))
      .catch(({ response }: AxiosError<any>) => {
        console.log(response?.data);
        setError(response?.data.type, { message: response?.data.message });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSignIn)} className={styles.wrapper}>
      <BaseFlexBox direction="column" gap={18}>
        <BaseInput
          label="Email"
          error={formState.errors.email?.message}
          disabled={false}
          {...register("email")}
        />
        <BaseInput
          label="Mật khẩu"
          type="password"
          disabled={false}
          error={formState.errors.password?.message}
          {...register("password")}
        />
        <BaseTypography align="end" weight={600} color="venetian-red">
          Quên mật khẩu?
        </BaseTypography>
        <BaseButton
          type="submit"
          label="Đăng nhập"
          loading={false}
          disabled={!formState.isDirty}
        />
      </BaseFlexBox>
    </form>
  );
};

export default FormSignIn;
