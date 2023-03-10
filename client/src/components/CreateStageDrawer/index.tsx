import Drawer from "react-modern-drawer";
import { FormikHelpers, useFormik } from "formik";

import { Input } from "../Input";
import { Button } from "../Button";
import { useCreateStage } from "../../hooks/useCreateStage";
import { FormStageValues } from "../../utils/types";
import { stageValidationSchema } from "../../utils/validationSchemas";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateStageDrawer = ({ isOpen, onClose }: Props) => {
  const [createStage, { loading }] = useCreateStage();

  const handleCreateStage = async (
    values: FormStageValues,
    { resetForm }: FormikHelpers<FormStageValues>
  ) => {
    await createStage({ variables: values });
    resetForm();
    onClose();
  };

  const { handleSubmit, handleChange, errors, touched, values } = useFormik({
    initialValues: { title: "" },
    onSubmit: handleCreateStage,
    validationSchema: stageValidationSchema,
  });

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      direction="right"
      className="bg-gray-50 p-4 flex flex-col"
      size={300}
    >
      <div className="flex-1">
        <h1 className="text-xl text-black mb-4">Create stage</h1>
        <Input
          className="mb-6"
          name="title"
          label="Stage title"
          type="text"
          onChange={handleChange}
          value={values.title}
          error={touched.title && errors.title}
        />
      </div>
      <div className="flex items-center">
        <Button
          className="mr-4"
          label="Create"
          icon="plus"
          loading={loading}
          onClick={() => handleSubmit()}
        />
        <Button
          label="Cancel"
          icon="prohibit"
          onClick={onClose}
          loading={loading}
        />
      </div>
    </Drawer>
  );
};
