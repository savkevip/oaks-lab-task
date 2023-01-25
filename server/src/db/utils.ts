import { promises as fsPromises } from "fs";

export const updateDb = async (data: string): Promise<boolean> => {
  try {
    await fsPromises.writeFile(`${__dirname}/index.json`, data);
    return true;
  } catch (error) {
    throw new Error("Update failed.");
  }
};
