import FormGroup from "../FormGroup/FormGroup";
import style from "./FormSelect.module.css";

type SelectOptionProps = {
  value: string;
  label: string;
};

type FormSelectProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOptionProps[];
  required?: boolean;
};

const FormSelect = ({
  id,
  name,
  label,
  value,
  onChange,
  options,
  required = false,
}: FormSelectProps) => {
  return (
    <FormGroup id={id} label={label} required={required}>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={style.formSelect}
        required={required}
      >
        <option value="">Please Select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormGroup>
  );
};

export default FormSelect;
