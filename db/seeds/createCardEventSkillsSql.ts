// This code depends on Deno
// deno run --allow-write createCardEventSkillsSql.ts
import supportCards from './source/supportCard_test.json' assert { type: 'json' };

type eventSkill = { id: number };

type cardType = {
  support_id: number;
  event_skills: eventSkill[];
};

type afterCardType = {
  support_id: number;
  event_skills: number[];
};

const omitProperty = (eventSkills: eventSkill[]): number[] => {
  const resultArr: number[] = [];

  eventSkills.map((skill) => {
    resultArr.push(skill.id);
  });

  return resultArr;
};

const shapingJSON = (cards: cardType[]): afterCardType[] => {
  const result: afterCardType[] = [];

  cards.map((card) => {
    const skillArr = omitProperty(card.event_skills);

    const obj: afterCardType = {
      support_id: card.support_id,
      event_skills: skillArr,
    };

    result.push(obj);
  });

  return result;
};

const main = (cards: cardType[]) => {
  const resultJSON = shapingJSON(cards);

  console.log(resultJSON);
};

main(supportCards);
