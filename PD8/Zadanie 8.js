//const json = '{"name": "Josh", "weight": 175, "age": 30, "eyecolor": "brown", "isHappy": true, "cars": ["Chevy", "Honda"], "favoriteBook": {"title": "The Last Kingdom", "author": "Bernard Cornwell", "rating": 8.38}}';
// name String
// weight Number
// age Number
// eyecolor String
// isHappy Boolean
// cars Array
// favoriteBook Object
// JSON jest podobny do obiektu, jest jego reprezentacją w postaci ciągu
// Jego klucze są zawsze ciągami w podwójnych cudzysłowach, tak samo jak wartości
// Wartości właściwości: string, number, object, array, boolean, null

const json = '{"name": "Mango", "age": 3, "isHappy": true}';

const metoda = JSON.parse(json);
console.log(metoda);
console.log(metoda.name);
console.log(metoda.age);
console.log(metoda.isHappy);