import { useRouter } from "next/router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { errorMessage } from "constants/error-message";
import { AuthApi } from "api";

const FormSignUpSchema = z.object({
  email: z
    .string()
    .min(1, { message: errorMessage.EMAIL_REQUIRED })
    .email({ message: errorMessage.NOT_EMAIL }),
  password: z.string().min(1, { message: errorMessage.PASSWORD_REQUIRED }),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

type TypeFormSignUp = z.infer<typeof FormSignUpSchema>;

const FormSignUp = (): JSX.Element => {
  const router = useRouter();
  const { mutate, isLoading } = useMutation({
    mutationFn: (data: TypeFormSignUp) => AuthApi.register(data),
    onSuccess: () => {
      router.push("/sign-in");
    },
  });

  const onSignUp = async (data: TypeFormSignUp): Promise<void> => {
    mutate(data);
  };

  const { formState, register, handleSubmit } = useForm<TypeFormSignUp>({
    reValidateMode: "onSubmit",
    defaultValues: { email: "", password: "", firstName: "", lastName: "" },
    resolver: zodResolver(FormSignUpSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSignUp)}>
      <div className="flex items-center justify-between gap-4">
        <BaseInput
          label="Tên"
          className="mb-3 w-32"
          {...register("lastName")}
        />
        <BaseInput
          label="Họ tên đệm"
          className="mb-3 grow"
          {...register("firstName")}
        />
      </div>
      {(formState.errors.firstName || formState.errors.lastName) && (
        <p className="text-red-500">{errorMessage.FULLNAME_REQUIRED}</p>
      )}
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
      <BaseButton
        type="submit"
        label="Đăng ký"
        className="w-full mt-10"
        loading={isLoading}
        disabled={!formState.isDirty}
      />
    </form>
  );
};

export default FormSignUp;
