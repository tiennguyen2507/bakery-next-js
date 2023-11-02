import BaseButton from "components/atoms/BaseButton/BaseButton";
import BaseInput from "components/atoms/BaseInput";
import { useRouter } from "next/router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSignUpSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email không được bỏ trống" })
      .email({ message: "Định dạng email chưa đúng" }),
    password: z.string().min(1, { message: "Password không được bỏ trống" }),
    phone: z
      .string()
      .max(10)
      .refine((value) => (value ? value.startsWith("0") : true), {
        message: "Định dạng số điện thoại chưa đúng",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Mật khẩu xác nhận không được bỏ trống" }),
    address: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không giống nhau",
    path: ["confirmPassword"],
  });

type TypeFormSignUp = z.infer<typeof FormSignUpSchema>;

const FormSignUp = (): JSX.Element => {
  const router = useRouter();

  const onSignIn = (): void => {
    router.push("/sign-in");
  };

  const { formState, register, handleSubmit } = useForm<TypeFormSignUp>({
    reValidateMode: "onSubmit",
    resolver: zodResolver(FormSignUpSchema),
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
      <BaseInput
        label="Xác nhận mật khẩu"
        type="password"
        className="mb-3"
        error={formState.errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />
      <BaseInput
        label="Số điện thoại"
        className="mb-3"
        error={formState.errors.phone?.message}
        {...register("phone")}
      />
      <BaseInput label="Địa chỉ" className="mb-3" {...register("address")} />
      <BaseButton label="Đăng ký" className="w-full mt-5" />
    </form>
  );
};

export default FormSignUp;
