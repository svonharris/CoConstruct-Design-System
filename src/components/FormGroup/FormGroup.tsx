import style from "./FormGroup.module.css";

type FormGroupProps = {
  children: React.ReactNode;
  id: string;
  label: string;
  required?: boolean;
};

const FormGroup = ({
  children,
  id,
  label,
  required = false,
}: FormGroupProps) => {
  return (
    <div className={style.formGroup}>
      <label htmlFor={id} className={style.formLabel}>
        {label}
        {required && <span className={style.formRequired}>*</span>}
      </label>

      {children}
    </div>
  );
};

export default FormGroup;
