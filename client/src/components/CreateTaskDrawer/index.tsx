import Drawer from "react-modern-drawer";

import { Input } from "../Input";
import { Button } from "../Button";
import { Select } from "../Select";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateTaskDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      direction="right"
      className="bg-gray-50 p-4 flex flex-col"
      size={300}
    >
      <div className="flex-1">
        <h1 className="text-xl text-black mb-4">Create task</h1>
        <Input name="title" label="Task title" />
        <Select
          className="mb-6"
          name="title"
          label="Task title"
          placeholder="Select stage"
          options={[{ label: "Stage 1", value: "someId" }]}
        />
      </div>
      <div className="flex items-center">
        <Button className="mr-4" label="Create" icon="plus" />
        <Button label="Cancel" icon="prohibit" onClick={onClose} />
      </div>
    </Drawer>
  );
};
