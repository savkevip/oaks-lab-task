import Drawer from "react-modern-drawer";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateStageDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer open={isOpen} onClose={onClose} direction="right" className="">
      <div>Hello World</div>
    </Drawer>
  );
};
