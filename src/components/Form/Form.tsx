import { useState } from "react";
import style from "./Form.module.css";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

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
      <FormInput
        id="firstName"
        name="firstName"
        label="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <FormInput
        id="lastName"
        name="lastName"
        label="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <FormInput
        id="email"
        name="workEmail"
        label="Work Email"
        value={formData.workEmail}
        onChange={handleChange}
        required
      />

      <FormInput
        id="tel"
        name="phoneNumber"
        label="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />

      <FormInput
        id="text"
        name="companyName"
        label="Company Name"
        value={formData.companyName}
        onChange={handleChange}
        required
      />

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
          className={style.formSelect}
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
          className={style.formSelect}
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

      <Button
        type="submit"
        variant="primary"
        onClick={() => console.log("Submit button clicked")}
        ariaLabel="Submit contactform"
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
