import Drawer from "react-modern-drawer";
import { FormikHelpers, useFormik } from "formik";
import { CircleNotch } from "phosphor-react";
import { ChangeEvent } from "react";

import { Input } from "../Input";
import { Button } from "../Button";
import { Select } from "../Select";
import { useCreateTask } from "../../hooks/useCreateTask";
import { FormTaskValues } from "../../utils/types";
import { taskValidationSchema } from "../../utils/validationSchemas";
import { useStagesAndTasks } from "../../hooks/useStagesAndTasks";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateTaskDrawer = ({ isOpen, onClose }: Props) => {
  const [createTask, { loading: loadingCreateTask }] = useCreateTask();
  const { data: { stages } = { stages: [] }, loading: loadingStages } =
    useStagesAndTasks();

  const handleCreateTask = async (
    values: FormTaskValues,
    { resetForm }: FormikHelpers<FormTaskValues>
  ) => {
    await createTask({ variables: values });
    resetForm();
    onClose();
  };

  const { handleSubmit, handleChange, errors, touched, values, setFieldValue } =
    useFormik({
      initialValues: { title: "", stageId: "" },
      onSubmit: handleCreateTask,
      validationSchema: taskValidationSchema,
    });

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setFieldValue("stageId", value);
  };

  const stageOptions = stages.map(({ title, _id }) => ({
    label: title,
    value: _id,
  }));

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      direction="right"
      className="bg-gray-50 p-4 flex flex-col"
      size={300}
    >
      <div className="flex-1">
        <div className="flex items-center mb-4">
          <h1 className="text-xl text-black">Create task</h1>
          {loadingStages ? (
            <CircleNotch
              className="animate-spin ml-2"
              size={22}
              color="black"
            />
          ) : null}
        </div>
        <Input
          name="title"
          label="Task title"
          value={values.title}
          onChange={handleChange}
          error={touched.title && errors.title}
        />
        <Select
          className="mb-6"
          name="stageId"
          label="Stage"
          placeholder="Select stage"
          onSelect={handleSelect}
          value={values.stageId}
          options={stageOptions}
          error={touched.stageId && errors.stageId}
        />
      </div>
      <div className="flex items-center">
        <Button
          className="mr-4"
          label="Create"
          icon="plus"
          loading={loadingCreateTask}
          onClick={() => handleSubmit()}
        />
        <Button
          label="Cancel"
          icon="prohibit"
          onClick={onClose}
          loading={loadingCreateTask}
        />
      </div>
    </Drawer>
  );
};
