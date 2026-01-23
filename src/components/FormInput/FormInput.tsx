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
    <div className={style.formGroup}>
      <label htmlFor={id} className={style.formLabel}>
        {label}
        {required && <span className={style.formRequired}>*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={style.formInput}
        required={required}
      />
    </div>
  );
};

export default FormInput;
