import * as Yup from "yup";

export const addContactSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(14, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9]{10}$/, "Must be exactly 10 digits")
    .required("Required"),
});
