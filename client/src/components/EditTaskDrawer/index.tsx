import Drawer from "react-modern-drawer";
import { useFormik } from "formik";
import { ChangeEvent } from "react";
import { CircleNotch } from "phosphor-react";

import { Input } from "../Input";
import { Button } from "../Button";
import { useEditTask } from "../../hooks/useEditTask";
import { FormTaskValues, Task } from "../../utils/types";
import { taskValidationSchema } from "../../utils/validationSchemas";
import { useTaskDetails } from "../../hooks/useTaskDetails";
import { useStagesAndTasks } from "../../hooks/useStagesAndTasks";
import { Select } from "../Select";

type Props = {
  onClose: () => void;
  taskId?: string;
};

export const EditTaskDrawer = ({ onClose, taskId }: Props) => {
  const { data: { task } = { task: {} as Task }, loading: loadingStages } =
    useTaskDetails(taskId);
  const [updateTask, { loading: loadingEditStage }] = useEditTask();
  const { data: { stages } = { stages: [] } } = useStagesAndTasks();

  const handleEditTask = async (values: FormTaskValues) => {
    await updateTask({ variables: { ...values, id: taskId } });
    onClose();
  };

  const { handleSubmit, handleChange, errors, touched, values, setFieldValue } =
    useFormik({
      initialValues: {
        title: task.title || "",
        stageId: task.stageId || "",
      },
      onSubmit: handleEditTask,
      validationSchema: taskValidationSchema,
      enableReinitialize: true,
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
      open={!!taskId}
      onClose={onClose}
      direction="right"
      className="bg-gray-50 p-4 flex flex-col"
      size={300}
    >
      <div className="flex-1">
        <div className="flex items-center mb-4">
          <h1 className="text-xl text-black">Edit task</h1>
          {loadingStages ? (
            <CircleNotch
              className="animate-spin ml-2"
              size={22}
              color="black"
            />
          ) : null}
        </div>
        <Input
          className="mb-6"
          name="title"
          label="Task title"
          type="text"
          onChange={handleChange}
          value={values.title}
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
          label="Update"
          icon="floppyDiskBack"
          loading={loadingEditStage}
          onClick={() => handleSubmit()}
        />
        <Button
          label="Cancel"
          icon="prohibit"
          onClick={onClose}
          loading={loadingEditStage}
        />
      </div>
    </Drawer>
  );
};
