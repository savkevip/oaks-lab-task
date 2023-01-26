import * as yup from "yup";

export const stageValidationSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(50, "Title cannot be more than 20 characters long")
    .required("Title is required"),
});
