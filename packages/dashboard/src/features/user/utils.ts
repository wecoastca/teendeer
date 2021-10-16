import { Talent } from "@teendeer/types";

export const convertToUserTalentInfo = (talents: Talent[]) => {
  return talents.map((talent) => ({
    talent_id: talent.id,
    talent_points: 0,
    talent_level: 0,
  }))
}