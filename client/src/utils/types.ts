export type Stage = {
  _id: string;
  createdAt: string;
  tasks?: Task[];
  title: string;
  updatedAt?: string;
};

export type Task = {
  _id: string;
  createdAt: string;
  isDone: boolean;
  stageId: string;
  title: string;
  updatedAt?: string;
};

export type FormStageValues = Pick<Stage, "title">;

export type StageId = Pick<Stage, "_id">;
