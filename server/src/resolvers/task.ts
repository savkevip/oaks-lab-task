import { v4 as uuidv4 } from "uuid";

import data from "../db";
import { updateDb } from "../db/utils";
import { getCurrentStage, getCurrentTask } from "../utils/helpers";
import { ResolversParentTypes, Task } from "../utils/types";

export const Query = {
  task: (_: ResolversParentTypes, { _id }: Pick<Task, "_id">): Task =>
    getCurrentTask(_id),
};

export const Mutation = {
  createTask: (
    _: ResolversParentTypes,
    { title, stageId }: Pick<Task, "title" | "stageId">
  ): Promise<boolean> => {
    // not great not terible - just to prevent call stage is not exist
    getCurrentStage(stageId);

    data.tasks.push({
      _id: uuidv4(),
      title,
      stageId,
      isDone: false,
      createdAt: new Date().toISOString(),
    });

    return updateDb(JSON.stringify(data));
  },
  editTask: (
    _: ResolversParentTypes,
    {
      _id,
      title,
      stageId,
      isDone,
    }: Pick<Task, "_id" | "title" | "stageId" | "isDone">
  ): Promise<boolean> => {
    const currentTask = getCurrentTask(_id);

    if (title) {
      currentTask.title = title;
    }
    if (typeof isDone === "boolean") {
      currentTask.isDone = isDone;
    }
    if (stageId) {
      // not great not terible - just to prevent call if stage not exist
      getCurrentStage(stageId);
      currentTask.stageId = stageId;
    }
    currentTask.updatedAt = new Date().toISOString();

    return updateDb(JSON.stringify(data));
  },
  deleteTask: (
    _: ResolversParentTypes,
    { _id }: Pick<Task, "_id">
  ): Promise<boolean> => {
    const currentStage = getCurrentTask(_id);

    data.tasks = data.tasks.filter((task) => task._id !== currentStage._id);

    return updateDb(JSON.stringify(data));
  },
};
