export type User = {
  id: number;
  fullname: string;
  login: string;
  password: string;

  user_level: number;
  points: number;

  bio: string;
  school: string;
  organizations: string;

  date_of_birth: string;
  user_sex: number;

  vk_url: string;
  vk_subscribers: number;

  geo: string;

  talent_info: {
    "talent_id": number;
    "talent_points": number;
    "talent_level": number;
  }[]

  steps_info: {
    "step_id": number;
    "active": boolean;
  }[]
}

export type Talent = {
  id: number;
  name: string;
}

export type Challenge = {
  id: number;
  challenge_name: string;
  image_url: string;
  req_talent_level: number;
  talent_id: number;
  description: string;
}

//// TODO: still in process
// export type Achievement = {
//   id: number;
//   name: string;
//   type: string; // achievement_type
//   image_url: string;
//   description: string;
//   talent: string; // Talent id?
//   cost: number; // talent_points
// }

// export type Task = {
//   id: number;
//   name: string; // task_name
//   challenge: string; // Challenge id?
//   description: string;
//   image_url: string;
//   points: number;
//   task_order: number; // task_number
// }

// export type Step = {
//   id: number;
//   action: string; // DO not forget, 'vk_widget', 'ig_widget' or 'carousel'
//   task: string; // Task id?
//   name: string; // step_name
//   order: number; // step_number
//   description: string; // step_text
//   image_url: string;
//   button_text: string;
//   meta_type: string
//   meta_urls: string[]; // not single string, Array
// }