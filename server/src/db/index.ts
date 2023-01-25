import { Stage, Task } from "../utils/types";
import db from "./index.json";

export default db as {
  stages: Stage[];
  tasks: Task[];
};
