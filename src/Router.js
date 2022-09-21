import { NextButton } from "./NextButton";
import { PreviousButton } from "./PreviousButton";
import { MyTextInput } from "./myTextInput";
import { MyCheckbox } from "./myCheckbox";
import { MySelect } from "./MySelect";
import { useFormikContext } from "formik";

export const Router = () => {
  const { values } = useFormikContext();
  switch (values.step) {
    case 1:
      return (
        <>
          <PreviousButton />
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <NextButton />
        </>
      );

    case 2:
      return (
        <>
          <PreviousButton />
          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <NextButton />
        </>
      );

    case 3:
      return (
        <>
          <PreviousButton />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <NextButton />
        </>
      );
    case 4:
      return (
        <>
          <PreviousButton />
          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>
          <NextButton />
        </>
      );
    case 5:
      return (
        <>
          <PreviousButton />
          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>
          <button type="submit">Submit</button>
        </>
      );
  }
};
