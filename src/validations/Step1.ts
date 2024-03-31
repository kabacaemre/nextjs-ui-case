import * as yup from "yup";

const EMAIL_REGX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

export const Step1Schema = yup.object({
  name: yup.string().required("Bu alan zorunludur!"),
  surname: yup.string().required("Bu alan zorunludur!"),
  email: yup
    .string()
    .required("Bu alan zorunludur!")
    .matches(EMAIL_REGX, "Geçersiz email adresi"),
  phone: yup.string().required("Bu alan zorunludur!"),
});

export type Step1SchemaType = yup.InferType<typeof Step1Schema>;
