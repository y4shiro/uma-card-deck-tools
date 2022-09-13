// This code depends on Deno
// deno run --allow-write createCardEventSkillsSql.ts
import supportCards from './source/supportCard_test.json' assert { type: 'json' };

type eventSkill = { id: number };

type cardType = {
  support_id: number;
  event_skills: eventSkill[];
};

type shapedCardType = {
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

const shapingJSON = (cards: cardType[]): shapedCardType[] => {
  const result: shapedCardType[] = [];

  cards.map((card) => {
    const skillArr = omitProperty(card.event_skills);

    const obj: shapedCardType = {
      support_id: card.support_id,
      event_skills: skillArr,
    };

    result.push(obj);
  });

  return result;
};

const convetSqlQuery = (shapedJSON: shapedCardType[]): string => {
  let sqlQuery: string = 'insert into card_event_skills (card_id, skill_id)\nvalues\n';

  shapedJSON.map((record, arrIndex, json) => {
    record.event_skills.map((skillId, skillIndex, skills) => {
      const str = `(${record.support_id}, ${skillId})`;
      const eol = json.length - 1 === arrIndex && skills.length - 1 === skillIndex ? ';' : ',\n'; // 最後の値のみ ; を付与、それ以外は , と改行コードを付与

      sqlQuery += str + eol;
    });
  });

  return sqlQuery;
};

const main = (cards: cardType[]) => {
  const shapedJSON = shapingJSON(cards);
  const sqlQuery = convetSqlQuery(shapedJSON);

  console.log(sqlQuery);
};

main(supportCards);
