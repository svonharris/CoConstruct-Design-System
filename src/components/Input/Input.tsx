import style from "./Input.module.css";

const Input = () => {
  return (
    <div className={style.formGroup}>
      <label htmlFor="firstName" className={style.formLabel}>
        First Name<span className={style.formRequired}>*</span>
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className={style.formInput}
        required
      />
    </div>
  );
};

export default Input;
