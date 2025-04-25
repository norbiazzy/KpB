export const SK = "SK";
export const DZGI = "DZGI";
export const MY = "MY";
export const D400 = "D400";
export const D500 = "D500";
export const D600 = "D600";
export const b20 = "b2.0";
export const b25 = "b2.5";
export const b35 = "b3.5";
export const b50 = "b5.0";
export const BLOCK = "BLOCK";
export const KERAMIKA = "KERAMIKA";
export const ANY = "ANY";

export const GJEL = "GJEL";
export const POROTERM = "POROTERM";
export const sizes = {
  8: {
    GJEL: {
      perPal: 72,
      perCar: 1056,
      price: 0,
    },
    POROTERM: {
      perPal: 120,
      perCar: 2640,
      price: 83.61,
    },
  },
  12: {
    GJEL: {
      perPal: 72,
      perCar: 1056,
      price: 122.8,
    },
    POROTERM: {
      perPal: 80,
      perCar: 1760,
      price: 125.15,
    },
  },
  20: {
    GJEL: {
      perPal: 72,
      perCar: 1056,
      price: 128.33,
    },
    POROTERM: {
      perPal: 72,
      perCar: 1368,
      price: 150.2,
    },
  },
  25: {
    GJEL: {
      perPal: 72,
      perCar: 1056,
      price: 148.0,
    },
    POROTERM: {
      perPal: 60,
      perCar: 1320,
      price: 158.74,
    },
  },
  "38t": {
    GJEL: {
      perPal: 72,
      perCar: 1056,
      price: 166,
    },
    POROTERM: {
      perPal: 60,
      perCar: 1320,
      price: 176.57,
    },
  },
  38: {
    GJEL: {
      perPal: 72,
      perCar: 1056,
      price: 148,
    },
    POROTERM: {
      perPal: 60,
      perCar: 1320,
      price: 142.19,
    },
  },
  44: {
    GJEL: {
      perPal: 48,
      perCar: 1056,
      price: 166,
    },
    POROTERM: {
      perPal: 50,
      perCar: 1100,
      price: 161.55,
    },
  },
  51: {
    GJEL: {
      perPal: 48,
      perCar: 912,
      price: 197,
    },
    POROTERM: {
      perPal: 50,
      perCar: 1100,
      price: 197.97,
    },
  },
};

export const GLORY = "GLORY";

export const radioLogisticType = [
  { val: "MY", name: "Своя" },
  { val: "GLORY", name: "Триумф" },
];
export const radioGloryDistance = [
  { distance: "0", name: "0-30" },
  { distance: "1", name: "31-45" },
  { distance: "2", name: "45-60" },
  { distance: "3", name: "61-90" },
  { distance: "4", name: "91-120" },
];
export const PRICEGLORY = {
  truck: {
    nal: [15700, 16700, 17700, 18700, 19700],
    nds: [18840, 20040, 21240, 22440, 23640],
  },
  manipulator: {
    nal: [15700, 16700, 17700, 18700, 19700],
    nds: [18840, 20040, 21240, 22440, 23640],
  },
  hitch: {
    nal: [21700, 22800, 25200, 26500, 28200],
    nds: [23900, 26500, 28500, 30100, 32200],
  },
};
export const PRICEBLOCK = {
  SK: {
    D400: {
      [b20]: { wall: 7440, partition: 0, 50: 0 },
      [b25]: { wall: 7440, partition: 0, 50: 0 },
      [b35]: { wall: 0, partition: 0, 50: 0 },
      [b50]: { wall: 0, partition: 0, 50: 0 },
    },
    D500: {
      [b20]: { wall: 0, partition: 0, 50: 0 },
      [b25]: { wall: 5400, partition: 5400, 50: 7440 },
      [b35]: { wall: 5500, partition: 5500, 50: 7440 },
      [b50]: { wall: 0, partition: 0, 50: 0 },
    },
    D600: {
      [b20]: { wall: 0, partition: 0, 50: 0 },
      [b25]: { wall: 0, partition: 0, 50: 0 },
      [b35]: { wall: 5400, partition: 5400, 50: 0 },
      [b50]: { wall: 5500, partition: 5500, 50: 0 },
    },
    step: {
      600400250: 2.16,
      600375250: 1.8,
      600350250: 1.68,
      600300250: 1.8,
      600300200: 1.8,
      600250250: 1.8,
      600200250: 1.8,
      600250200: 1.8,
      600200200: 1.44,
      600150250: 1.8,
      600125250: 1.8,
      600100250: 1.8,
      60075250: 1.8,
      60050250: 1.8,
    },
  },
  DZGI: {
    D400: {
      [b20]: { wall: 7344, partition: 0, 50: 0 },
      [b25]: { wall: 7344, partition: 0, 50: 0 },
      [b35]: { wall: 0, partition: 0, 50: 0 },
      [b50]: { wall: 0, partition: 0, 50: 0 },
    },
    D500: {
      [b20]: { wall: 0, partition: 0, 50: 0 },
      [b25]: { wall: 5400, partition: 5400, 50: 7392 },
      [b35]: { wall: 5500, partition: 5712, 50: 7392 },
      [b50]: { wall: 0, partition: 0, 50: 0 },
    },
    D600: {
      [b20]: { wall: 0, partition: 0, 50: 0 },
      [b25]: { wall: 0, partition: 0, 50: 0 },
      [b35]: { wall: 5400, partition: 5400, 50: 0 },
      [b50]: { wall: 5500, partition: 5712, 50: 0 },
    },
  },
  MY: {
    D400: {
      [b20]: { wall: 7152, partition: 0, 50: 0 },
      [b25]: { wall: 7152, partition: 0, 50: 0 },
      [b35]: { wall: 0, partition: 0, 50: 0 },
      [b50]: { wall: 0, partition: 0, 50: 0 },
    },
    D500: {
      [b20]: { wall: 0, partition: 0, 50: 0 },
      [b25]: { wall: 5300, partition: 5300, 50: 7248 },
      [b35]: { wall: 5400, partition: 5400, 50: 7248 },
      [b50]: { wall: 0, partition: 0, 50: 0 },
    },
    D600: {
      [b20]: { wall: 0, partition: 0, 50: 0 },
      [b25]: { wall: 0, partition: 0, 50: 0 },
      [b35]: { wall: 5300, partition: 5300, 50: 0 },
      [b50]: { wall: 5400, partition: 5400, 50: 0 },
    },
  },
};

export const BRIDGES = [
  {
    id: 1210100,
    name: "Перемычка брусковая Poritep D600 1200*100*250/1000 В3,5 ТУ",
    density: "D600",
    short: "1200*100*250/1000",
    incoming: 600,
    count: 0,
    price: 700,
    heft: "28,46",
  },
  {
    id: 1215100,
    name: "Перемычка брусковая Poritep D600 1200*150*250/1000 В3,5 ТУ",
    density: "D600",
    short: "1200*150*250/1000",
    incoming: 878,
    count: 0,
    price: 1000,
    heft: "42,19",
  },
  {
    id: 1220100,
    name: "Перемычка брусковая Poritep D600 1200*200*250/1000 В3,5 ТУ",
    density: "D600",
    short: "1200*200*250/1000",
    incoming: 1168,
    count: 0,
    price: 1300,
    heft: "55,92",
  },
  {
    id: 1510700,
    name: "Перемычка брусковая Poritep D600 1500*100*250/700 В3,5 ТУ",
    density: "D600",
    short: "1500*100*250/700",
    incoming: 750,
    count: 0,
    price: 800,
    heft: "35,46",
  },
  {
    id: 1515700,
    name: "Перемычка брусковая Poritep D600 1500*150*250/700 B3,5 ТУ",
    density: "D600",
    short: "1500*150*250/700",
    incoming: 1097,
    count: 0,
    price: 1200,
    heft: "52,19",
  },
  {
    id: 1520700,
    name: "Перемычка брусковая Poritep D600 1500*200*250/700 B3,5 ТУ",
    density: "D600",
    short: "1500*200*250/700",
    incoming: 1463,
    count: 0,
    price: 1600,
    heft: "68,92",
  },
  {
    id: 1520325,
    name: "Перемычка брусковая Poritep D600 1500*200*250/3250 В3,5 ТУ",
    density: "D600",
    short: "1500*200*250/3250",
    incoming: 1688,
    count: 0,
    price: 1800,
    heft: "72,92",
  },
  {
    id: 1530325,
    name: "Перемычка брусковая Poritep D600 1500*300*250/3250 В3,5 ТУ",
    density: "D600",
    short: "1500*300*250/3250",
    incoming: 2531,
    count: 0,
    price: 2700,
    heft: "107,38",
  },
  {
    id: 2010400,
    name: "Перемычка брусковая Poritep D600 2000*100*250/400 B3,5 ТУ",
    density: "D600",
    short: "2000*100*250/400",
    incoming: 1000,
    count: 0,
    price: 1100,
    heft: "47,92",
  },
  {
    id: 2015400,
    name: "Перемычка брусковая Poritep D600 2000*150*250/400 В3,5 ТУ",
    density: "D600",
    short: "2000*150*250/400",
    incoming: 1463,
    count: 0,
    price: 1600,
    heft: "71,38",
  },
  {
    id: 2020800,
    name: "Перемычка брусковая Poritep D600 2000*200*250/1800 В3,5 ТУ",
    density: "D600",
    short: "2000*200*250/1800",
    incoming: 2250,
    count: 0,
    price: 2400,
    heft: "98,83",
  },
  {
    id: 2020400,
    name: "Перемычка брусковая Poritep D600 2000*200*250/400 В3,5 ТУ",
    density: "D600",
    short: "2000*200*250/400",
    incoming: 1950,
    count: 0,
    price: 2100,
    heft: "94,83",
  },
  {
    id: 2030185,
    name: "Перемычка брусковая Poritep D600 2000*300*250/1850 В3,5 ТУ",
    density: "D600",
    short: "2000*300*250/1850",
    incoming: 3375,
    count: 0,
    price: 3500,
    heft: "145,75",
  },
  {
    id: 2515350,
    name: "Перемычка брусковая Poritep D600 2500*150*250/350 В3,5 ТУ",
    density: "D600",
    short: "2500*150*250/350",
    incoming: 1828,
    count: 0,
    price: 2000,
    heft: "88,38",
  },
  {
    id: 2520110,
    name: "Перемычка брусковая Poritep D600 2500*200*250/1100 В3,5 ТУ",
    density: "D600",
    short: "2500*200*250/1100",
    incoming: 2813,
    count: 0,
    price: 3000,
    heft: "121,83",
  },
  {
    id: 2520350,
    name: "Перемычка брусковая Poritep D600 2500*200*250/350 В3,5 ТУ",
    density: "D600",
    short: "2500*200*250/350",
    incoming: 2438,
    count: 0,
    price: 2600,
    heft: "121,83",
  },
  {
    id: 2530150,
    name: "Перемычка брусковая Poritep D600 2500*300*250/1500 В3,5 ТУ",
    density: "D600",
    short: "2500*300*250/1500",
    incoming: 4219,
    count: 0,
    price: 4300,
    heft: "180,75",
  },
  {
    id: 3015300,
    name: "Перемычка брусковая Poritep D600 3000*150*250/300 В3,5 ТУ",
    density: "D600",
    short: "3000*150*250/300",
    incoming: 2194,
    count: 0,
    price: 2300,
    heft: "104,38",
  },
  {
    id: 3020750,
    name: "Перемычка брусковая Poritep D600 3000*200*250/750 В3,5 ТУ",
    density: "D600",
    short: "3000*200*250/750",
    incoming: 3375,
    count: 0,
    price: 3500,
    heft: "144,83",
  },
  {
    id: 3030100,
    name: "Перемычка брусковая Poritep D600 3000*300*250/1000 B3,5 ТУ",
    density: "D600",
    short: "3000*300*250/1000",
    incoming: 5063,
    count: 0,
    price: 5200,
    heft: "215,75",
  },
];

export const cutEnd = (cell, numb = 2) => {
  let result = (+cell).toFixed(numb).toString();
  return +result;
};

export const copyResult = () => {
  let textarea = document.createElement("textarea");
  textarea.id = "temp";
  textarea.style.height = 0;
  document.body.appendChild(textarea);
  let text;
  textarea.value = document.querySelector(".result").innerText;
  // textarea.value = bufferText;
  let selector = document.querySelector("#temp");
  selector.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};
