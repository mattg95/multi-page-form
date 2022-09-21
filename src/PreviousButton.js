import { useFormikContext } from "formik";

export const PreviousButton = () => {
  const form = useFormikContext();
  return (
    <button
      type="button"
      onMouseDown={() =>
        form.setValues({ ...form.values, step: form.values.step - 1 })
      }
    >
      Previous
    </button>
  );
};
