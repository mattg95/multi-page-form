import { useFormikContext } from "formik";

export const NextButton = () => {
  const form = useFormikContext();
  return (
    <button
      type="button"
      onMouseDown={() =>
        form.setValues({ ...form.values, step: form.values.step + 1 })
      }
    >
      Next
    </button>
  );
};
