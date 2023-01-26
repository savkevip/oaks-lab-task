import { CircleNotch } from "phosphor-react";
import { useState } from "react";
import { Button } from "../../components/Button";
import { CreateStageDrawer } from "../../components/CreateStageDrawer";
import { CreateTaskDrawer } from "../../components/CreateTaskDrawer";
import { EditStageDrawer } from "../../components/EditStageDrawer";
import { Stage } from "../../components/Stage";
import { Task } from "../../components/Task";
import { useDeleteStage } from "../../hooks/useDeleteStage";
import { useStagesAndTasks } from "../../hooks/useStagesAndTasks";

export const Home = () => {
  const { data: { stages } = { stages: [] }, loading: loadingStagesAndTasks } =
    useStagesAndTasks();
  const [deleteStage, { loading: loadingDeleteStage }] = useDeleteStage();
  const [isCreateStageDrawerOpen, setIsCreateStageDrawerOpen] = useState(false);
  const [isCreateTaskDrawerOpen, setIsCreateTaskDrawerOpen] = useState(false);
  const [editStage, setEditStage] = useState<string | undefined>();

  const handleEditStage = (_id: string) => () => setEditStage(_id);

  const handleDeleteStage = (_id: string) => () => {
    const response = window.confirm("Are you sure?");
    if (response) {
      deleteStage({ variables: { id: _id } });
    }
  };

  const loading = loadingStagesAndTasks || loadingDeleteStage;

  return (
    <div className="bg-gray-50 w-screen h-screen p-4">
      <div className="flex items-center mb-8">
        <h1 className="text-2xl">My startup progress</h1>
        {loading ? (
          <CircleNotch className="animate-spin ml-2" size={22} color="black" />
        ) : null}
      </div>
      <div className="flex items-center mb-6">
        <Button
          className="mr-4"
          label="Create stage"
          icon="building"
          disabled={loading}
          onClick={() => setIsCreateStageDrawerOpen(true)}
        />
        <Button
          label="Create task"
          icon="listPlus"
          disabled={loading}
          onClick={() => setIsCreateTaskDrawerOpen(true)}
        />
      </div>
      <div>
        {!stages.length ? (
          <h1 className="text-xl">
            There is no stages. Pleaes be free and create first one.
          </h1>
        ) : (
          stages.map(
            ({ _id, title, createdAt, updatedAt, tasks = [] }, index) => {
              const count = index + 1;
              const completed = false;
              return (
                <Stage
                  key={_id}
                  title={title}
                  createdAt={createdAt}
                  updatedAt={updatedAt}
                  count={count}
                  completed={completed}
                  onEdit={handleEditStage(_id)}
                  onDelete={handleDeleteStage(_id)}
                >
                  {!tasks.length ? (
                    <h1 className="text-xl">
                      There is no tasks. Pleaes be free and create first one.
                    </h1>
                  ) : (
                    tasks.map(
                      ({ _id, title, createdAt, updatedAt, isDone }) => (
                        <Task
                          key={_id}
                          title={title}
                          createdAt={createdAt}
                          updatedAt={updatedAt}
                          isDone={isDone}
                          onCheck={() => {}}
                        />
                      )
                    )
                  )}
                </Stage>
              );
            }
          )
        )}
      </div>
      <CreateStageDrawer
        isOpen={isCreateStageDrawerOpen}
        onClose={() => setIsCreateStageDrawerOpen(false)}
      />
      <CreateTaskDrawer
        isOpen={isCreateTaskDrawerOpen}
        onClose={() => setIsCreateTaskDrawerOpen(false)}
      />
      <EditStageDrawer
        stageId={editStage}
        onClose={() => setEditStage(undefined)}
      />
    </div>
  );
};
