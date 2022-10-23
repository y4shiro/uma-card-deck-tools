import { FilterKeysType } from './filterSlice';
import { CardType } from '@/types/cards';

const filterdCardLists = (cards: CardType[], filterLists: FilterKeysType[]) => {
  if (filterLists.length === 0) return cards; // 絞り込み無しの場合は全てのカードを返す

  // カードタイプでのみフィルターした結果とレアリティでのみフィルターした結果をそれぞれ変数で持つ
  const filterdTypeCards = cards.filter((card) => filterLists.includes(card.card_type));
  const filterdRarityCards = cards.filter((card) => filterLists.includes(card.card_rarity));

  if (filterdTypeCards.length === 0) return filterdRarityCards; // カードタイプで絞り込みしていない場合、レアリティのフィルター結果のみ返す
  if (filterdRarityCards.length === 0) return filterdTypeCards; // レアリティで絞り込みしていない場合、カードタイプのフィルター結果のみ返す

  // カードタイプとレアリティ両方でフィルターしている場合は、それぞれの積集合を作成して返す
  const filterdCards = filterdTypeCards.filter((typeCard) =>
    filterdRarityCards.some((rarityCard) => rarityCard.card_id === typeCard.card_id),
  );

  return filterdCards;
};

export { filterdCardLists };
