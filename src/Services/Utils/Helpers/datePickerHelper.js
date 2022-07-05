import DatePicker from "react-datepicker";
import { useField, useFormikContext } from "formik";

export const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  console.log(field);
  console.log(props);
  //FIXME: Cannot format initial date
  return (
    <DatePicker
      {...field}
      {...props}
      defaultValue={props.fieldValue}
      dateFormat="MM/dd/yyyy"
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
    />
  );
};
