import * as yup from "yup";
import { ValidationMessages } from "../../../Enums/Validation/ValidationMessages";

export const SurveyValuesValidationScheme = yup.object().shape({
  title: yup.string().required(ValidationMessages.REQUIRED),
  companyId: yup.number().integer().required(ValidationMessages.REQUIRED),
}); 