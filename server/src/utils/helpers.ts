import data from "../db";

export const getCurrentStage = (_id: string) => {
  const currentStage = data.stages.find((stage) => stage._id === _id);

  if (!currentStage) {
    throw new Error("Stage does not exist.");
  }

  return currentStage;
};

export const getCurrentTask = (_id: string) => {
  const currentTask = data.tasks.find((task) => task._id === _id);

  if (!currentTask) {
    throw new Error("Task does not exist.");
  }

  return currentTask;
};
