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

type dataType = {
  [key: string]: number;
};

const data: dataType[] = [
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
];

const getValue = (
  effect: dataType,
  cur: typeof EFFECT_LIMITS[number],
): { label: typeof EFFECT_LIMITS[number]; value: number } => {
  if (effect[cur] !== -1) {
    const val = effect[cur];
    return { label: cur, value: val };
  } // カラムに -1 以外の数値が入っている場合はそのまま返す

  const index = EFFECT_LIMITS.indexOf(cur); // 計算したいカラムの順番、例えば "lv25" なら 5
  let min: number = 0; // index 0 番目から計算したいカラムに含まれる数値の最小値
  let min_limit: typeof EFFECT_LIMITS[number] = 'init'; // 数値の最小値の index
  let max: number = 0; // index 0 番目から計算したいカラムに含まれる数値の最大値
  let max_limit: typeof EFFECT_LIMITS[number] = 'lv50'; // 数値の最大値の index

  // effect オブジェクトの 0 番目から計算したいカラムまでを走査し、数値の最小値と index を求める
  for (const limit of EFFECT_LIMITS.slice(0, index)) {
    if (effect[limit] >= min) {
      min = effect[limit];
      min_limit = limit;
    }
  }

  // effect オブジェクトの計算したいカラムから最大値までを走査し、数値の最大値と index を求める
  for (const limit of EFFECT_LIMITS.slice(index, EFFECT_LIMITS.length)) {
    if (effect[limit] !== -1) {
      max = effect[limit];
      max_limit = limit;
    }
  }

  // 最小値が最大値以上、最大値と最小値の差分が 1、最小値が 0 のいずれかの場合は min を返す
  if (max <= min || max - min === 1 || min === 0) {
    return { label: cur, value: min };
  } else {
    const result = Math.floor(
      min +
        ((max - min) * (EFFECT_LIMITS.indexOf(cur) - EFFECT_LIMITS.indexOf(min_limit))) /
          (EFFECT_LIMITS.indexOf(max_limit) - EFFECT_LIMITS.indexOf(min_limit)),
    );
    return { label: cur, value: result };
  }
};

const main = () => {
  data.map((effect) => {
    console.log(`id: ${effect['id']}`);
    console.log(`type: ${effect['type']}`);

    EFFECT_LIMITS.map((limit_vallue) => {
      const result = getValue(effect, limit_vallue);
      console.log(result);
    });
  });
};

main();

export {};
