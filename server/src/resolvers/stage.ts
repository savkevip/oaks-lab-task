import { v4 as uuidv4 } from "uuid";

import data from "../db";
import { updateDb } from "../db/utils";
import { getCurrentStage } from "../utils/helpers";
import { ResolversParentTypes, Stage } from "../utils/types";

export const Query = {
  stages: (): Stage[] => {
    const stages = data.stages.map((stage) => {
      const current = { ...stage };
      current.tasks = data.tasks.filter((task) => task.stageId === stage._id);
      return current;
    });

    return stages;
  },
  stage: (_: ResolversParentTypes, { _id }: Pick<Stage, "_id">): Stage =>
    getCurrentStage(_id),
};

export const Mutation = {
  createStage: (
    _: ResolversParentTypes,
    { title }: Pick<Stage, "title">
  ): Promise<boolean> => {
    data.stages.push({
      _id: uuidv4(),
      title,
      createdAt: new Date().toISOString(),
    });

    return updateDb(JSON.stringify(data));
  },
  editStage: (
    _: ResolversParentTypes,
    { _id, title }: Pick<Stage, "_id" | "title">
  ): Promise<boolean> => {
    const currentStage = getCurrentStage(_id);

    currentStage.title = title;
    currentStage.updatedAt = new Date().toISOString();

    return updateDb(JSON.stringify(data));
  },
  deleteStage: (
    _: ResolversParentTypes,
    { _id }: Pick<Stage, "_id">
  ): Promise<boolean> => {
    const currentStage = getCurrentStage(_id);

    data.tasks = data.tasks.filter((task) => task.stageId !== currentStage._id);
    data.stages = data.stages.filter((stage) => stage._id !== currentStage._id);

    return updateDb(JSON.stringify(data));
  },
};
