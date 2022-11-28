import type { CardType } from './cards';

export type SlotId = 0 | 1 | 2 | 3 | 4 | 5;

export type LimitBreakSteps = 0 | 1 | 2 | 3 | 4;

export type CardSlotType = {
  slotId: SlotId;
  cardId: number | null;
  cardData: CardType | null;
  limitBreakStep: LimitBreakSteps;
  belongCharaIds: number[];
};
