import BaseButton from "components/atoms/BaseButton/BaseButton";
import BaseInput from "components/atoms/BaseInput";
import BaseTypography from "components/atoms/BaseTypography";
import { useRouter } from "next/router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { loginApi } from "api/auth";
import { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";

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
  const { mutate, error, isLoading } = useMutation<
    AxiosResponse<{ access_token: string; refresh_token: string }>,
    AxiosError<{ message: string }>,
    TypeFormSignIn,
    any
  >((data: TypeFormSignIn) => loginApi(data), {
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
    <form onSubmit={handleSubmit(onSignIn)}>
      {error?.response?.data.message && (
        <div className="text-center py-2 bg-red-200 rounded border border-red-300">
          <BaseTypography weight={600} color="venetian-red">
            {error?.response?.data.message}
          </BaseTypography>
        </div>
      )}
      <BaseInput
        label="Email"
        className="mb-3"
        error={formState.errors.email?.message}
        disabled={isLoading}
        {...register("email")}
      />
      <BaseInput
        label="Mật khẩu"
        type="password"
        className="mb-3"
        disabled={isLoading}
        error={formState.errors.password?.message}
        {...register("password")}
      />
      <BaseTypography align="end" weight={600} color="venetian-red">
        Quên mật khẩu?
      </BaseTypography>

      <BaseButton
        label="Đăng nhập"
        className="w-full"
        loading={isLoading}
        disabled={!formState.isDirty}
      />
    </form>
  );
};

export default FormSignIn;
