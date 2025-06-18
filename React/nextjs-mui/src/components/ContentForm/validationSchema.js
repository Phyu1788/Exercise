//components/BasicForm/validationSchema.js
import * as yup from "yup";

// const myanmarPhoneRegExp = /^(?:\+?959|09)\d{7,9}$/;
export const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  address: yup.string().required("Address is required"),
  phone: yup.number()
    .required("Phone number is required"),
  city: yup.string().required("City is required"),
  township: yup.string().required("Township is required"),
});
