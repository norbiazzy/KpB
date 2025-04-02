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

export const GJEL = 'GJEL'
export const POROTERM = 'POROTERM'
export const sizes = {
    '8': {
        GJEL: {
            perPal: 72,
            perCar: 1056,
            price: 0,
        },
        POROTERM: {
            perPal: 120,
            perCar: 2640,
            price: 83.61
        }
    },
    '12': {
        GJEL: {
            perPal: 72,
            perCar: 1056,
            price: 122.80,
        },
        POROTERM: {
            perPal: 80,
            perCar: 1760,
            price: 125.15,
        }
    },
    '20': {
        GJEL: {
            perPal: 72,
            perCar: 1056,
            price: 128.33,
        },
        POROTERM: {
            perPal: 72,
            perCar: 1368,
            price: 150.20,
        }
    },
    '25': {
        GJEL: {
            perPal: 72,
            perCar: 1056,
            price: 148.00,
        },
        POROTERM: {
            perPal: 60,
            perCar: 1320,
            price: 158.74,
        }
    },
    '38t': {
        GJEL: {
            perPal: 72,
            perCar: 1056,
            price: 166,
        },
        POROTERM: {
            perPal: 60,
            perCar: 1320,
            price: 176.57,
        }
    },
    '38': {
        GJEL: {
            perPal: 72,
            perCar: 1056,
            price: 148,
        },
        POROTERM: {
            perPal: 60,
            perCar: 1320,
            price: 142.19,
        }
    },
    '44': {
        GJEL: {
            perPal: 48,
            perCar: 1056,
            price: 166,
        },
        POROTERM: {
            perPal: 50,
            perCar: 1100,
            price: 161.55,
        }
    },
    '51': {
        GJEL: {
            perPal: 48,
            perCar: 912,
            price: 197,
        },
        POROTERM: {
            perPal: 50,
            perCar: 1100,
            price: 197.97,
        }
    },
}

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
            [b25]: { wall: 5472, partition: 5568, 50: 7440 },
            [b35]: { wall: 5760, partition: 5664, 50: 7440 },
            [b50]: { wall: 0, partition: 0, 50: 0 },
        },
        D600: {
            [b20]: { wall: 0, partition: 0, 50: 0 },
            [b25]: { wall: 0, partition: 0, 50: 0 },
            [b35]: { wall: 5472, partition: 5568, 50: 0 },
            [b50]: { wall: 5760, partition: 5664, 50: 0 },
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
            [b25]: { wall: 5424, partition: 5520, 50: 7392 },
            [b35]: { wall: 5616, partition: 5712, 50: 7392 },
            [b50]: { wall: 0, partition: 0, 50: 0 },
        },
        D600: {
            [b20]: { wall: 0, partition: 0, 50: 0 },
            [b25]: { wall: 0, partition: 0, 50: 0 },
            [b35]: { wall: 5424, partition: 5520, 50: 0 },
            [b50]: { wall: 5616, partition: 5712, 50: 0 },
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
            [b25]: { wall: 5280, partition: 5376, 50: 7248 },
            [b35]: { wall: 5472, partition: 5568, 50: 7248 },
            [b50]: { wall: 0, partition: 0, 50: 0 },
        },
        D600: {
            [b20]: { wall: 0, partition: 0, 50: 0 },
            [b25]: { wall: 0, partition: 0, 50: 0 },
            [b35]: { wall: 5280, partition: 5376, 50: 0 },
            [b50]: { wall: 5472, partition: 5568, 50: 0 },
        },
    },
};