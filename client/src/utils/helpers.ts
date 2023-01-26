import { Stage, Task } from "./types";

export const getRelativeHours = (date: string) => {
  const dateObject = new Date(date);
  const currentTime = Date.now();
  const diff = currentTime - dateObject.getTime();
  const diffInSeconds = Math.floor(diff / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const formatter = new Intl.RelativeTimeFormat("en-US", { style: "long" });

  if (diffInHours >= 1) return formatter.format(-diffInHours, "hour");
  if (diffInMinutes >= 1) return formatter.format(-diffInMinutes, "minute");
  return formatter.format(-diffInSeconds, "second");
};

export const areAllTasksCompleted = (tasks: Task[]) =>
  tasks.length && tasks.every(({ isDone }) => isDone);

export const canUpdateStageTasks = ({
  stages,
  stageIndex,
}: {
  stages: Stage[];
  stageIndex: number;
}) => {
  // todo so for reopen the task I dont have really at momemnt
  // some food UX solution so user will be able to check it
  // one of the solution maybe will be to change model in db to be some task status: `new`, `done` and `reopen`
  // and depends on that we can make some better logic for sure
  for (let i = 0; i < stageIndex; i++) {
    let prevStage = stages[i];
    let prevStageTasks = prevStage?.tasks || [];
    let isPrevStageCompleted = areAllTasksCompleted(prevStageTasks);
    if (!isPrevStageCompleted) {
      return false;
    }
  }
  return true;
};
