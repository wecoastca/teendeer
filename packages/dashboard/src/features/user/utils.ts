import { Talent, User } from "@teendeer/types";

export const convertToUserTalentInfo = (talents: Talent[]) => {
  return talents.map((talent) => ({
    talent_id: talent.id,
    talent_points: 0,
    talent_level: 0,
  }))
};

export const COLORS = {
  1: '#086788',
  2: '#07A0C3',
  3: '#F0C808',
  4: '#FFF1D0',
  5: '#DD1C1A',
};

export const getColor = (id: number) => {
  switch (id) {
    case 1:
      return COLORS[1];
    case 2:
      return COLORS[2];
    case 3:
      return COLORS[3];
    case 4:
      return COLORS[4];
    case 5:
      return COLORS[5];
  }
};

export const applyRandomTalentInfo =
  (talents: Talent[]) =>
    (user: User): User => ({
      ...user,
      talent_info: Array.from({ length: Math.random() * talents.length }, () => ({
        talent_id: Math.floor(Math.random() * talents.length + 1),
        talent_points: Math.floor(Math.random() * 10000),
        talent_level: Math.floor(Math.random() * 10),
      })),
    });

export const applyRandomUserLevel = (user: User): User => ({
  ...user,
  user_level: Math.floor(Math.random() * 30),
});

export const applyModify = (users: User[], talents: Talent[]) =>
  users.map(applyRandomTalentInfo(talents)).map(applyRandomUserLevel);

export const getTalentName = (talents: Talent[], id: number) =>
  talents.find((talent) => talent.id === id)?.name;