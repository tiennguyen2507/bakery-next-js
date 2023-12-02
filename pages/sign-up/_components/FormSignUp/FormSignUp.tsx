import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { errorMessage } from "constants/error-message";
import { useAuthApi } from "api/auth.api";
import styles from "./FormSignUp.module.css";

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
  const { authRegister } = useAuthApi();
  const { mutate, isLoading } = useMutation({
    mutationFn: (data: TypeFormSignUp) => authRegister(data),
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
    <form
      onSubmit={handleSubmit(onSignUp)}
      className={styles.wrapper}
      autoComplete="off"
    >
      <BaseFlexBox direction="column" gap={18}>
        <div>
          <BaseFlexBox gap={12}>
            <BaseInput label="Tên" {...register("lastName")} />
            <BaseInput label="Họ tên đệm" {...register("firstName")} />
          </BaseFlexBox>
          {(formState.errors.firstName || formState.errors.lastName) && (
            <p className={styles.error}>{errorMessage.FULLNAME_REQUIRED}</p>
          )}
        </div>
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
          className={styles.button}
          loading={isLoading}
          disabled={!formState.isDirty}
        />
      </BaseFlexBox>
    </form>
  );
};

export default FormSignUp;
