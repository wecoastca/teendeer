export type User = {
  id: string;
  fullname: string;
  login: string;
  password: string;

  user_level: number;
  bio: string;
  school: string;
  organizations: string; // maybe string[], cuz its tags?
  date_of_birth: string;

  talents: string[]; // id of talents
  achievements: string[]; // id of achievement
  challenges: string[]; // id of challenges
  steps: string[]; // id of steps
}

export type Talent = {
  id: string;
  name: string;
}

export type Achievement = {
  id: string;
  name: string;
  type: string; // achievement_type
  image_url: string;
  description: string;
  talent: string; // Talent id?
  cost: number; // talent_points
}

export type Challenge = {
  id: string;
  name: string; // challenge_name
  image_url: string;
  req_talent_level: number;
  talent: string; // Talent id?
  description: string;
  achievement: string; // Achievement id?
}

export type Task = {
  id: string;
  name: string; // task_name
  challenge: string; // Challenge id?
  description: string;
  image_url: string;
  points: number;
  task_order: number; // task_number
}

export type Step = {
  id: string;
  action: string; // DO not forget, 'vk_widget', 'ig_widget' or 'carousel'
  task: string; // Task id?
  name: string; // step_name
  order: number; // step_number
  description: string; // step_text
  image_url: string;
  button_text: string;
  meta_type: string
  meta_urls: string[]; // not single string, Array
}