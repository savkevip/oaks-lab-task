import { gql } from "apollo-server";
import { Stage } from "./stage";
import { Task } from "./task";

export const typeDefs = gql`
  ${[Stage, Task].join(" ")}
`;
