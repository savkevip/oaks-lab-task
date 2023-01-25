import { useState } from "react";
import { Button } from "../../components/Button";
import { CreateStageDrawer } from "../../components/CreateStageDrawer";
import { Stage } from "../../components/Stage";
import { Task } from "../../components/Task";

export const Home = () => {
  const [isCreateStageDrawerOpen, setIsCreateStageDrawerOpen] = useState(false);
  const [isCreateTaskDrawerOpen, setIsCreateTaskDrawerOpen] = useState(false);

  return (
    <div className="bg-gray-50 w-screen h-screen p-4">
      <h1 className="text-2xl mb-8">My startup progress</h1>
      <div className="flex items-center mb-6">
        <Button
          className="mr-4"
          label="Create stage"
          icon="building"
          onClick={() => setIsCreateStageDrawerOpen(true)}
        />
        <Button label="Create task" icon="listPlus" />
      </div>
      <div>
        <Stage title="Early stage" createdAt="some date" count={1} completed>
          <Task
            title="My first task"
            createdAt="some date"
            isDone
            onCheck={() => {}}
          />
          <Task
            title="My second task"
            createdAt="some date"
            isDone
            onCheck={() => {}}
          />
        </Stage>
        <Stage title="Early some stage" createdAt="some date" count={2}>
          <Task
            title="My first task"
            createdAt="some date"
            isDone={false}
            onCheck={() => {}}
          />
          <Task
            title="My second task"
            createdAt="some date"
            isDone
            onCheck={() => {}}
          />
        </Stage>
      </div>
      <CreateStageDrawer
        isOpen={isCreateStageDrawerOpen}
        onClose={() => setIsCreateStageDrawerOpen(false)}
      />
    </div>
  );
};
