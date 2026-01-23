import style from "./FormSelect.module.css";

type FormSelectProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
};

const FormSelect = ({
  id,
  name,
  label,
  value,
  onChange,
  required = false,
}: FormSelectProps) => {
  return (
    <div className={style.formGroup}>
      <label htmlFor={id} className={style.formLabel}>
        {label}
        {required && <span className={style.formRequired}>*</span>}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={style.formInput}
        required={required}
      >
        <option value="">Please Select</option>
        <option value="other">Residential - Homebuilder</option>
        <option value="architecture">Residential - Remodeler</option>
        <option value="engineering">Specialty/Trade Contractor</option>
        <option value="construction">Commercial General Contractor</option>
      </select>
    </div>
  );
};

export default FormSelect;
