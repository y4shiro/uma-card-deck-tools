import { EffectListType } from '.';
import { CardType } from '@/types/cards';

const initEffects: EffectListType[] = [
  {
    id: 1,
    name: '友情ボーナス',
    category: 'supportEffects',
    unit: 'percent',
    values: new Map(),
  },
  {
    id: 2,
    name: 'やる気効果アップ',
    category: 'supportEffects',
    unit: 'percent',
    values: new Map(),
  },
  {
    id: 3,
    name: 'スピードボーナス',
    category: 'supportEffects',
    unit: 'integer',
    values: new Map(),
  },
  {
    id: 4,
    name: 'スタミナボーナス',
    category: 'supportEffects',
    unit: 'integer',
    values: new Map(),
  },
  {
    id: 5,
    name: 'パワーボーナス',
    category: 'supportEffects',
    unit: 'integer',
    values: new Map(),
  },
  {
    id: 6,
    name: '根性ボーナス',
    category: 'supportEffects',
    unit: 'integer',
    values: new Map(),
  },
  {
    id: 7,
    name: '賢さボーナス',
    category: 'supportEffects',
    unit: 'integer',
    values: new Map(),
  },
  {
    id: 8,
    name: 'トレーニング効果アップ',
    category: 'supportEffects',
    unit: 'percent',
    values: new Map(),
  },
  {
    id: 9,
    name: '初期スピードアップ',
    category: 'initStatusUp',
    unit: 'integer',
    values: new Map(),
  },
  {
    id: 10,
    name: '初期スタミナアップ',
    category: 'initStatusUp',
    unit: 'integer',
    values: new Map(),
  },
  {
    id: 11,
    name: '初期パワーアップ',
    category: 'initStatusUp',
    unit: 'integer',
    values: new Map(),
  },
  {
    id: 12,
    name: '初期根性アップ',
    category: 'initStatusUp',
    unit: 'integer',
    values: new Map(),
  },
  {
    id: 13,
    name: '初期賢さアップ',
    category: 'initStatusUp',
    unit: 'integer',
    values: new Map(),
  },
  {
    id: 14,
    name: '初期絆ゲージアップ',
    category: 'initStatusUp',
    unit: 'integer',
    values: new Map(),
  },
  {
    id: 15,
    name: 'レースボーナス',
    category: 'supportEffects',
    unit: 'percent',
    values: new Map(),
  },
  {
    id: 16,
    name: 'ファン数ボーナス',
    category: 'supportEffects',
    unit: 'percent',
    values: new Map(),
  },
  {
    id: 17,
    name: 'ヒントLvアップ',
    category: 'supportEffects',
    unit: 'level',
    values: new Map(),
  },
  {
    id: 18,
    name: 'ヒント発生率アップ',
    category: 'supportEffects',
    unit: 'percent',
    values: new Map(),
  },
  {
    id: 19,
    name: '得意率アップ',
    category: 'supportEffects',
    unit: 'percent',
    values: new Map(),
  },
  {
    id: 20,
    name: 'スピード限界値アップ',
    category: 'supportEffects',
    unit: null,
    values: new Map(),
  },
  {
    id: 21,
    name: 'スタミナ限界値アップ',
    category: 'supportEffects',
    unit: null,
    values: new Map(),
  },
  {
    id: 22,
    name: 'パワー限界値アップ',
    category: 'supportEffects',
    unit: null,
    values: new Map(),
  },
  {
    id: 23,
    name: '根性限界値アップ',
    category: 'supportEffects',
    unit: null,
    values: new Map(),
  },
  {
    id: 24,
    name: '賢さ限界値アップ',
    category: 'supportEffects',
    unit: null,
    values: new Map(),
  },
  {
    id: 25,
    name: 'イベント回復量アップ',
    category: 'supportEffects',
    unit: 'percent',
    values: new Map(),
  },
  {
    id: 26,
    name: 'イベント効果アップ',
    category: 'supportEffects',
    unit: 'percent',
    values: new Map(),
  },
  {
    id: 27,
    name: '失敗率ダウン',
    category: 'supportEffects',
    unit: 'percent',
    values: new Map(),
  },
  {
    id: 28,
    name: '体力消費ダウン',
    category: 'supportEffects',
    unit: 'percent',
    values: new Map(),
  },
  {
    id: 29,
    name: 'ミニゲーム効果アップ',
    category: 'supportEffects',
    unit: null,
    values: new Map(),
  },
  {
    id: 30,
    name: 'スキルPtボーナス',
    category: 'supportEffects',
    unit: 'integer',
    values: new Map(),
  },
  {
    id: 31,
    name: '賢さ友情回復量アップ',
    category: 'supportEffects',
    unit: 'integer',
    values: new Map(),
  },
];

const generateEffectLists = (cards: CardType[] | undefined, deckCardidLists: (number | null)[]) => {
  let array = [...initEffects];

  const deckCards = cards?.filter((card) => deckCardidLists.includes(card.card_id));

  array.map((effect) =>
    deckCards?.map((card) =>
      card.effects.map((card_effect) => {
        if (effect.id === card_effect.id) {
          const tmpEffect = {
            card_id: card.card_id,
            card_name: card.card_name,
            effect_value: card_effect.values[0].value,
          };

          effect.values.set(card.card_id, tmpEffect);
        }
      }),
    ),
  );

  array = array.filter((effect) => effect.values.size !== 0);

  return array;
};

export { generateEffectLists };
