// This code depends on Deno
// deno run --allow-write calcSupportEffectValue.ts
// import effectTableJSON from './source/effectTable.json' assert { type: 'json' };
import effectTableJSON from './source/effectTable_sample.json' assert { type: 'json' };

const EFFECT_LIMITS = [
  'init',
  'limitLv5',
  'limitLv10',
  'limitLv15',
  'limitLv20',
  'limitLv25',
  'limitLv30',
  'limitLv35',
  'limitLv40',
  'limitLv45',
  'limitLv50',
] as const;

type effectTableType = {
  [key: string]: number;
};

const getValue = (
  effectTable: effectTableType,
  cur: typeof EFFECT_LIMITS[number],
): { key: typeof EFFECT_LIMITS[number]; value: number } => {
  if (effectTable[cur] !== -1) return { key: cur, value: effectTable[cur] }; // カラムに -1 以外の数値が入っている場合はそのまま返す

  const index = EFFECT_LIMITS.indexOf(cur); // 計算したいカラムの順番、例えば "limitLv25" なら 5
  let min: number = 0; // index 0 番目から計算したいカラムに含まれる数値の最小値
  let minLimit: typeof EFFECT_LIMITS[number] = 'init'; // 数値の最小値の index
  let max: number = 0; // index 0 番目から計算したいカラムに含まれる数値の最大値
  let maxLimit: typeof EFFECT_LIMITS[number] = 'limitLv50'; // 数値の最大値の index

  // effect オブジェクトの 0 番目から計算したいカラムまでを走査し、数値の最小値と index を求める
  for (const limit of EFFECT_LIMITS.slice(0, index)) {
    if (effectTable[limit] >= min) {
      min = effectTable[limit];
      minLimit = limit;
    }
  }

  // effect オブジェクトの計算したいカラムから最大値までを走査し、数値の最大値と index を求める
  for (const limit of EFFECT_LIMITS.slice(index, EFFECT_LIMITS.length)) {
    if (effectTable[limit] !== -1) {
      max = effectTable[limit];
      maxLimit = limit;
    }
  }

  // 最小値が最大値以上、最大値と最小値の差分が 1、最小値が 0 のいずれかの場合は min を返す
  if (max <= min || max - min === 1 || min === 0) {
    return { key: cur, value: min };
  } else {
    const result = Math.floor(
      min +
        ((max - min) * (EFFECT_LIMITS.indexOf(cur) - EFFECT_LIMITS.indexOf(minLimit))) /
          (EFFECT_LIMITS.indexOf(maxLimit) - EFFECT_LIMITS.indexOf(minLimit)),
    );
    return { key: cur, value: result };
  }
};

type EffectObject = {
  id: number;
  type: number;
  effects: EffectRecord[];
};

type EffectRecord = {
  level: number;
  value: number;
};

const calcEffectValues = (table: effectTableType[], filterKeys: typeof EFFECT_LIMITS[number][]) => {
  const resultArr: EffectObject[] = [];

  table.forEach((effectRecord) => {
    const effectsAry: EffectRecord[] = [];

    EFFECT_LIMITS.forEach((effectLimitKey) => {
      if (filterKeys.some((key) => key.includes(effectLimitKey))) return; // filterKeys に該当する場合は処理をスキップ
      const result = getValue(effectRecord, effectLimitKey);
      const levelNum = result.key === 'init' ? 1 : Number(result.key.replace('limitLv', ''));
      effectsAry.push({ level: levelNum, value: result.value });
    });

    const tmpObj: EffectObject = {
      id: effectRecord['id'],
      type: effectRecord['type'],
      effects: effectsAry,
    };

    resultArr.push(tmpObj);
  });

  return resultArr;
};

const changeContentsToRarity = (arr: number[][]): (number | string)[][] => {
  let resultArr: (number | string)[][] = [];

  arr.map((singleArr) => {
    const rarity = Math.floor(singleArr[0] / 10000);
    const editedArr: (number | string)[] = [...singleArr];

    if (rarity <= 2) editedArr[editedArr.length - 1] = 'null';
    if (rarity === 1) editedArr[editedArr.length - 2] = 'null';

    resultArr.push(editedArr);
  });

  return resultArr;
};

const convetSqlQuery = (arr: (number | string)[][]): string => {
  let result: string =
    'insert into card_effects (card_id, effect_id, lv20, lv25, lv30, lv35, lv40, lv45, lv50)\nvalues\n';

  arr.map((singleArr, index, arr) => {
    const str = `(${singleArr.toString()})`;
    const eol = arr.length - 1 === index ? ';' : ',\n'; // 配列の最後の場合のみ ; を付与、それ以外は , と改行コードを付与

    result += str + eol;
  });

  return result;
};

const outputSQL = (str: string) => {
  // @ts-ignore
  Deno.writeTextFile('./insert_card_effects_table.sql', str);
};

const main = (tables: effectTableType[]) => {
  const filterKeys: typeof EFFECT_LIMITS[number][] = ['init', 'limitLv5', 'limitLv10', 'limitLv15'];
  const effectArr = calcEffectValues(tables, filterKeys);
  // const cahngeArr = changeContentsToRarity(effectArr);
  // const sqlQueryString = convetSqlQuery(cahngeArr);
  // outputSQL(sqlQueryString);
  console.log(effectArr);
};

main(effectTableJSON);
