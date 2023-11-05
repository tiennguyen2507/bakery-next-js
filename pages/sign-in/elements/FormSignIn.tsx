import BaseButton from "components/atoms/BaseButton/BaseButton";
import BaseInput from "components/atoms/BaseInput";
import BaseTypography from "components/atoms/BaseTypography";
import { useRouter } from "next/router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const FormSignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email không được bỏ trống" })
    .email({ message: "Định dạng email chưa đúng" }),
  password: z.string().min(1, { message: "Password không được bỏ trống" }),
});

const FormSignIn = (): JSX.Element => {
  const router = useRouter();

  const onSignIn = async (data: any): Promise<void> => {
    console.log(data);

    await axios.post(
      "/auth/login",
      { ...data },
      {
        baseURL: "https://bakery-nest-be-production.up.railway.app",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // router.push("/");
  };

  const { formState, register, handleSubmit } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(FormSignInSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSignIn)}>
      <BaseInput
        label="Email"
        className="mb-3"
        error={formState.errors.email?.message}
        {...register("email")}
      />
      <BaseInput
        label="Mật khẩu"
        type="password"
        className="mb-3"
        error={formState.errors.password?.message}
        {...register("password")}
      />
      <BaseTypography className="text-right font-bold text-red-500">
        Quên mật khẩu?
      </BaseTypography>
      <BaseButton label="Đăng nhập" className="w-full" />
    </form>
  );
};

export default FormSignIn;
