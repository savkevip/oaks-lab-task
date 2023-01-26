import Drawer from "react-modern-drawer";
import { useFormik } from "formik";

import { Input } from "../Input";
import { Button } from "../Button";
import { useEditStage } from "../../hooks/useEditStage";
import { FormStageValues, Stage } from "../../utils/types";
import { stageValidationSchema } from "../../utils/validationSchemas";
import { useStageDetails } from "../../hooks/useStageDetails";

type Props = {
  onClose: () => void;
  stageId?: string;
};

export const EditStageDrawer = ({ onClose, stageId }: Props) => {
  const { data: { stage } = { stage: {} as Stage }, loading: stageLoading } =
    useStageDetails(stageId);
  const [updateStage, { loading: editStageLoading }] = useEditStage();

  const handleEditStage = async (values: FormStageValues) => {
    await updateStage({ variables: { ...values, id: stageId } });
    onClose();
  };

  const { handleSubmit, handleChange, errors, touched, values } = useFormik({
    initialValues: { title: stage.title || "" },
    onSubmit: handleEditStage,
    validationSchema: stageValidationSchema,
    enableReinitialize: true,
  });

  const loading = stageLoading || editStageLoading;

  return (
    <Drawer
      open={!!stageId}
      onClose={onClose}
      direction="right"
      className="bg-gray-50 p-4 flex flex-col"
      size={300}
    >
      <div className="flex-1">
        <h1 className="text-xl text-black mb-4">Edit stage</h1>
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
          label="Update"
          icon="floppyDiskBack"
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
