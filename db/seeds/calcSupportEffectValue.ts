const EFFECT_LIMITS = [
  'init',
  'lv5',
  'lv10',
  'lv15',
  'lv20',
  'lv25',
  'lv30',
  'lv35',
  'lv40',
  'lv45',
  'lv50',
] as const;

type effectTableType = {
  [key: string]: number;
};

const effectTable: effectTableType[] = [
  {
    id: 10001,
    type: 1,
    init: 5,
    lv5: -1,
    lv10: -1,
    lv15: 10,
    lv20: 10,
    lv25: -1,
    lv30: -1,
    lv35: 15,
    lv40: -1,
    lv45: -1,
    lv50: -1,
  },
  {
    id: 10002,
    type: 19,
    init: 5,
    lv5: -1,
    lv10: -1,
    lv15: -1,
    lv20: 35,
    lv25: -1,
    lv30: -1,
    lv35: -1,
    lv40: 50,
    lv45: -1,
    lv50: -1,
  },
  {
    id: 20001,
    type: 1,
    init: 10,
    lv5: -1,
    lv10: -1,
    lv15: -1,
    lv20: 15,
    lv25: 15,
    lv30: -1,
    lv35: -1,
    lv40: 20,
    lv45: -1,
    lv50: -1,
  },
  {
    id: 30001,
    type: 1,
    init: 10,
    lv5: -1,
    lv10: -1,
    lv15: -1,
    lv20: -1,
    lv25: 15,
    lv30: 15,
    lv35: -1,
    lv40: -1,
    lv45: 20,
    lv50: -1,
  },
];

const getValue = (
  effectTable: effectTableType,
  cur: typeof EFFECT_LIMITS[number],
): { key: typeof EFFECT_LIMITS[number]; value: number } => {
  if (effectTable[cur] !== -1) return { key: cur, value: effectTable[cur] }; // カラムに -1 以外の数値が入っている場合はそのまま返す

  const index = EFFECT_LIMITS.indexOf(cur); // 計算したいカラムの順番、例えば "lv25" なら 5
  let min: number = 0; // index 0 番目から計算したいカラムに含まれる数値の最小値
  let minLimit: typeof EFFECT_LIMITS[number] = 'init'; // 数値の最小値の index
  let max: number = 0; // index 0 番目から計算したいカラムに含まれる数値の最大値
  let maxLimit: typeof EFFECT_LIMITS[number] = 'lv50'; // 数値の最大値の index

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
  let result: string = '';

  arr.map((singleArr, index, arr) => {
    const str = `(${singleArr.toString()})`;
    const eol = arr.length - 1 === index ? ';' : ',\n'; // 配列の最後の場合のみ ; を付与、それ以外は , と改行コードを付与

    result += str + eol;
  });

  return result;
};

const calcEffectValues = (table: effectTableType[], filterKeys: typeof EFFECT_LIMITS[number][]) => {
  const resultArr: number[][] = [];

  table.map((effectRecord) => {
    const tmp = [];
    tmp.push(effectRecord['id']);
    tmp.push(effectRecord['type']);

    EFFECT_LIMITS.map((effectLimitKey) => {
      const result = getValue(effectRecord, effectLimitKey);
      if (filterKeys.some((key) => key.includes(result.key))) return; // filterKeys に該当する場合は処理をスキップ
      tmp.push(result.value);
    });

    resultArr.push(tmp);
  });

  return resultArr;
};

const main = () => {
  const filterKeys: typeof EFFECT_LIMITS[number][] = ['init', 'lv5', 'lv10', 'lv15'];
  const effectArr = calcEffectValues(effectTable, filterKeys);
  const cahngeArr = changeContentsToRarity(effectArr);
  console.log(convetSqlQuery(cahngeArr));
};

main();

export {};