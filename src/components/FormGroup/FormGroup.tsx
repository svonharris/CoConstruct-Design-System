import style from "./FormGroup.module.css";

type FormGroupProps = {
  children: React.ReactNode;
};

const FormGroup = ({ children }: FormGroupProps) => {
  return <div className={style.formGroup}>{children}</div>;
};

export default FormGroup;
