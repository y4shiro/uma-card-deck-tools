export type CardType = {
  card_id: number;
  card_name: string;
  charactor_name: string;
  card_rarity: 'R' | 'SR' | 'SSR';
  card_type: 'Speed' | 'Stamina' | 'Power' | 'Guts' | 'Wisdom' | 'Friends' | 'Group';
  card_img_path: string | null;
  card_icon_path: string | null;
  effects: Effects[];
  event_skills?: EventSkill[];
  training_skills?: TrainingSkill[];
  status_gains?: StatusGain[];
};

export type Effects = {
  id: number;
  name: string;
  values: EffectValue[];
};

export type EffectValue = {
  level: number;
  value: number;
};

export type EventSkill = {
  id: number;
  name: string;
  skill_pt: number | null;
  img_path: string | null;
};

export type TrainingSkill = {
  id: number;
  name: string;
  skill_pt: number | null;
  img_path: string | null;
};

export type StatusGain = {
  id: number;
  name: string;
  value: number;
};