import { useState } from "react";
import style from "./Form.module.css";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import FormSelect from "../FormSelect/FormSelect";

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

      <FormSelect
        id="builderType"
        name="builderType"
        label="Which builder type best describes your business?"
        value={formData.builderType}
        onChange={handleChange}
        options={[
          { value: "", label: "Please Select" },
          { value: "Homebuilder", label: "Residential - Homebuilder" },
          { value: "Remodeler", label: "Residential - Remodeler" },
          { value: "Specialty/Trade", label: "Specialty/Trade Contractor" },
          { value: "Commercial", label: "Commercial General Contractor" },
        ]}
        required
      />

      <FormSelect
        id="revenue"
        name="revenue"
        label="What is your average annual revenue?"
        value={formData.revenue}
        onChange={handleChange}
        options={[
          { value: "", label: "Please Select" },
          { value: "0-499k", label: "$0 - 499K" },
          { value: "500k-999k", label: "$500K - 999K" },
          { value: "1m-1.99m", label: "$1M - 1.99M" },
          { value: "2m-4.99m", label: "$2M - 4.99M" },
          { value: "5m-7.99m", label: "$5M - 7.99M" },
          { value: "8m-10.99m", label: "$8M - 10.99M" },
          { value: "11m-15.99m", label: "$11M - 15.99M" },
          { value: "16m-20.99m", label: "$16M - 20.99M" },
          { value: "21m-25.99m", label: "$21M - 25.99M" },
          { value: "26m-30.99m", label: "$26M - 30.99M" },
          { value: "31m+", label: "$31M+" },
        ]}
        required
      />

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
