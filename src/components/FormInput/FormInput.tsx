import FormGroup from "../FormGroup/FormGroup";
import style from "./FormInput.module.css";

type FormInputProps = {
  id: string;
  name: string;
  type?: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const FormInput = ({
  id,
  name,
  type = "text",
  label,
  value,
  onChange,
  required = false,
}: FormInputProps) => {
  return (
    <FormGroup id={id} label={label} required={required}>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={style.formInput}
        required={required}
      />
    </FormGroup>
  );
};

export default FormInput;
