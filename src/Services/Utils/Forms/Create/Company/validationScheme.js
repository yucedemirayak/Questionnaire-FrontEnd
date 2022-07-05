import * as yup from "yup";
import { ValidationMessages } from "../../../Enums/Validation/ValidationMessages";

export const CreateCompanyValidationScheme = yup.object().shape({
  name: yup
    .string()
    .required(ValidationMessages.REQUIRED),
});
