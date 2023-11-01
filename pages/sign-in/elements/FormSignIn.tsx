import BaseButton from "components/atoms/BaseButton/BaseButton";
import BaseInput from "components/atoms/BaseInput";
import BaseTypography from "components/atoms/BaseTypography";
import { useRouter } from "next/router";
import { useState } from "react";
import { z } from "zod";

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
  const [formValues, SetFormValues] = useState<TypeFormSignIn>({
    email: "",
    password: "",
  });
  const [validateErr, setValidateErr] = useState<{
    email?: string[];
    password?: string[];
  }>({});

  const onSignIn = (): void => {
    FormSignInSchema.safeParse(formValues);
    const formValidateResult = FormSignInSchema.safeParse(formValues);
    if (!formValidateResult.success) {
      setValidateErr(formValidateResult.error.formErrors.fieldErrors);
      return;
    }
    router.push("/");
  };

  return (
    <div>
      <BaseInput
        value={formValues.email}
        label="Email"
        className="mb-3"
        error={validateErr.email && validateErr.email[0]}
        onChange={(e) =>
          SetFormValues({
            ...formValues,
            email: e.target.value,
          })
        }
      />
      <BaseInput
        label="Mật khẩu"
        type="password"
        className="mb-3"
        value={formValues.password}
        error={validateErr.password && validateErr.password[0]}
        onChange={(e) =>
          SetFormValues({
            ...formValues,
            password: e.target.value,
          })
        }
      />
      <BaseTypography className="text-right font-bold text-red-500">
        Quên mật khẩu?
      </BaseTypography>
      <BaseButton label="Đăng nhập" className="w-full" onClick={onSignIn} />
    </div>
  );
};

export default FormSignIn;
