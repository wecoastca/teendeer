import { Talent } from "@teendeer/types";

export const createTalent = (note: Talent) => {
  return new Promise<{ data: Talent }>((resolve, reject) =>
    setTimeout(() => resolve({ data: note }), 1000)
    // setTimeout(() => reject({ data: note }), 1000)
  );
}