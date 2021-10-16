import { User } from "@teendeer/types";

export const createUser = (note: User) => {
  return new Promise<{ data: User }>((resolve, reject) =>
    setTimeout(() => resolve({ data: note }), 1000)
    // setTimeout(() => reject({ data: note }), 1000)
  );
}