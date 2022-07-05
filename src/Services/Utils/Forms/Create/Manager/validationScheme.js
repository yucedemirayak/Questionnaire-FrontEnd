import * as yup from "yup";
import { ValidationMessages } from "../../../Enums/Validation/ValidationMessages";

export const CreateManagerValidationScheme = yup.object().shape({
  firstName: yup.string().required(ValidationMessages.REQUIRED),
  lastName: yup.string().required(ValidationMessages.REQUIRED),
  email: yup
    .string()
    .email(ValidationMessages.EMAIL)
    .required(ValidationMessages.REQUIRED),
  password: yup.string().required(ValidationMessages.REQUIRED),
  rePassword: yup
    .string()
    .required(ValidationMessages.REQUIRED)
    .oneOf([yup.ref("password"), null], ValidationMessages.PASSWORDNOTMATCH),
  companyId: yup.number().integer().required(ValidationMessages.REQUIRED),
});
