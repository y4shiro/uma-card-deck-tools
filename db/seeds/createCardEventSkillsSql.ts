// This code depends on Deno
// deno run --allow-write createCardEventSkillsSql.ts
import supportCards from './source/supportsRow.json' assert { type: 'json' };

type eventSkill = { id: number };

type CardType = {
  support_id: number;
  event_skills: eventSkill[];
};

type ShapedCardType = {
  support_id: number;
  event_skills: number[];
};

type RowJSON = {
  pageProps: {
    supportData: CardType[];
  };
};

const omitProperty = (eventSkills: eventSkill[]): number[] => {
  const resultArr: number[] = [];

  eventSkills.map((skill) => {
    resultArr.push(skill.id);
  });

  return resultArr;
};

const shapingJSON = (json: RowJSON): ShapedCardType[] => {
  const {
    pageProps: { supportData: cards },
  } = json;
  const result: ShapedCardType[] = [];

  cards.map((card) => {
    const skillArr = omitProperty(card.event_skills);

    const obj: ShapedCardType = {
      support_id: card.support_id,
      event_skills: skillArr,
    };

    result.push(obj);
  });

  return result;
};

const convetSqlQuery = (shapedJSON: ShapedCardType[]): string => {
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

const outputSQL = (sqlQuery: string) => {
  // @ts-ignore
  Deno.writeTextFile('./insert_card_event_skills_table.sql', sqlQuery);
};

const main = (json: RowJSON) => {
  const shapedJSON = shapingJSON(json);
  const sqlQuery = convetSqlQuery(shapedJSON);
  outputSQL(sqlQuery);
};

main(supportCards);
