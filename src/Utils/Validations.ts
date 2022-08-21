import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().required().email("Email must be valid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimun 8 characters"),
  confirmPassword: yup
    .string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});
