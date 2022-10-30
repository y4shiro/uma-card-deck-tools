export type CardType = {
  card_id: number;
  card_name: string;
  charactor_name: string;
  charactor_id: number;
  belong_charactor_ids: number[];
  card_rarity: 'R' | 'SR' | 'SSR';
  card_type: 'Speed' | 'Stamina' | 'Power' | 'Guts' | 'Wisdom' | 'Friends' | 'Group';
  card_img_path: string | null;
  card_icon_path: string | null;
  effects: Effects[];
  event_skills: EventSkill[];
  training_skills: TrainingSkill[];
  status_gains: StatusGain[];
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
  rarity: 1 | 2 | 3 | 4 | 5;
  skill_pt: number | null;
  img_path: string;
};

export type TrainingSkill = {
  id: number;
  name: string;
  rarity: 1 | 2 | 3 | 4 | 5;
  skill_pt: number | null;
  img_path: string;
};

export type StatusGain = {
  id: number;
  name: string;
  value: number;
};

export type ImgSize = { card: { width: number; height: number }; type: number } | undefined;
