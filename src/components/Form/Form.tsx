import { useState } from "react";
import style from "./Form.module.css";

type FormData = {
  firstName: string;
  lastName: string;
  workEmail: string;
  phoneNumber: string;
  companyName: string;
  revenue: string;
  builderType: string;
};

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    workEmail: "",
    phoneNumber: "",
    companyName: "",
    revenue: "",
    builderType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
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
          required
        />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="lastName" className={style.formLabel}>
          Last Name<span className={style.formRequired}>*</span>
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="workEmail" className={style.formLabel}>
          Work Email<span className={style.formRequired}>*</span>
        </label>
        <input
          type="email"
          id="workEmail"
          name="workEmail"
          value={formData.workEmail}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="phoneNumber" className={style.formLabel}>
          Phone Number<span className={style.formRequired}>*</span>
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="companyName" className={style.formLabel}>
          Company Name<span className={style.formRequired}>*</span>
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="revenue" className={style.formLabel}>
          Which builder type best describes your business?
          <span className={style.formRequired}>*</span>
        </label>
        <select
          id="revenue"
          name="revenue"
          value={formData.revenue}
          onChange={handleChange}
          required
        >
          <option value="">Please Select</option>
          <option value="other">Residential - Homebuilder</option>
          <option value="architecture">Residential - Remodeler</option>
          <option value="engineering">Specialty/Trade Contractor</option>
          <option value="construction">Commercial General Contractor</option>
        </select>
      </div>

      <div className={style.formGroup}>
        <label htmlFor="builderType" className={style.formLabel}>
          What is your average annual revenue?
          <span className={style.formRequired}>*</span>
        </label>
        <select
          id="builderType"
          name="builderType"
          value={formData.builderType}
          onChange={handleChange}
          required
        >
          <option value="">Please Select</option>
          <option value="commercial">$0 - 499K</option>
          <option value="industrial">$500K - 999k</option>
          <option value="mixed-use">$1M - 1.99M</option>
          <option value="mixed-use">$2M - 4.99M</option>
          <option value="mixed-use">$5M - 7.99M</option>
          <option value="mixed-use">$8M - 10.99M</option>
          <option value="mixed-use">$11 - 15.99M</option>
          <option value="mixed-use">$16M - 20.99M</option>
          <option value="mixed-use">$31 - 25.99M</option>
          <option value="mixed-use">$26 - 25.99M</option>
          <option value="mixed-use">$31M+</option>
        </select>
      </div>

      <button type="submit" className={style.submitBtn}>
        Submit
      </button>
    </form>
  );
};

export default Form;
