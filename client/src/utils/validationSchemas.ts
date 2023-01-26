import * as yup from "yup";

const titleValidation = yup
  .string()
  .min(3, "Title must be at least 3 characters long")
  .max(50, "Title cannot be more than 20 characters long")
  .required("Title is required");

export const stageValidationSchema = yup.object().shape({
  title: titleValidation,
});

export const taskValidationSchema = yup.object().shape({
  title: titleValidation,
  stageId: yup.string().required("Select stage is required"),
});
