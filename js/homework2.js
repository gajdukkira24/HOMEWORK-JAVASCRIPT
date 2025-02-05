//1. Створити змінні celsius, fahrenheit для зберігання 
//температури за Цельсієм та Фаренгейтом. Перевести температуру
// з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.

let celsius = 25; 
let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);




//2. Створити змінну daysInMonth для зберігання кількості днів у місяці. Обчислити кількість
// hoursInMonth годин та minutesInMonth хвилин у цьому місяці
// за допомогою оператора множення та вивести результат в консоль.

const daysInMonth = 30 ;
const hoursInMonth =daysInMonth * 24;
console.log(hoursInMonth);
const minutesInMonth =hoursInMonth * 60 ;
console.log(minutesInMonth);




//3. Створити змінні health, energy для зберігання рівня здоров'я та енергії гравця в грі.
// Зменшити рівень здоров'я та енергії гравця за допомогою операторів
// віднімання та вивести результат в консоль.

let health = 100;
let energy =100;
let  healthEnergy = health - 20 ;
let  healthenergy = energy - 20 ;
console.log(healthEnergy, healthenergy)







//4. Створити змінну totalPrice для зберігання суми покупки в магазині. Застосувати
// знижку discount в розмірі 10% до цієї суми за допомогою оператора множення.
// Результат зберегти в змінній discountedPrice та вивести результат в консоль.

let totalPrice = 500;  
let discount = 0.1;  

let discountedPrice = totalPrice * (1 - discount);  
console.log( discountedPrice);

//5. Створити змінну const floatNumber = 12.78 для зберігання числа з плаваючою комою.
// Використати метод Math.floor() для округлення числа до меншого. Результат зберегти в
// змінній roundedDown та вивести результат в консоль.

const floatNumber = 12.78 ;
const  roundedDown = Math.floor(floatNumber);
console.log(roundedDown);



///6. Створити змінну const floatString = "45.67"  для зберігання рядка, який містить числа
// з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число.
// Результат зберегти в змінній parsedFloat та вивести результат в консоль.

 const floatString = "45.67";
 const parsefloat = parseFloat(floatString);
 console.log(parsefloat);




//7. Створити змінну const intString = "123" для зберігання рядка, який містить ціле число.
// Використати метод parseInt() для перетворення рядка у ціле число. Результат зберегти в 
// змінній parsedIntта вивести результат в консоль.

const intString = "123"
const parseint =parseInt(intString);
console.log(parseint);





//8. Створити змінну number для зберігання числа. Використати метод Math.sqrt() для обчислення
// квадратного кореня числа. Результат зберегти в змінній sqrtNumber та вивести результат в консоль.

const number = 20;
const sqrtNumber =  Math.sqrt(number);
console.log(sqrtNumber);


//9. Створити змінну const stringNumber = "256" для зберігання  рядка з числом 
//у вигляді рядка. Використати метод parseInt() для перетворення рядка у ціле 
//число. Результат зберегти в змінній convertedstring та вивести результат в консоль.

const stringNumber = "256";
const convertedstring =parseInt(stringNumber);
console.log(convertedstring);



// Задача №1.
// Знайти максимальне число з 10,58,39,-150,0


// Задача №2.
// Округлити число 58.858 до числа 58
const floatnumber =  58.858;
const  parsedfloat = Math.floor(floatnumber);
console.log(parsedfloat);

// задача №3
// Напиши скрип,який генерує випадкове число від 10 до 80
// Math.random() * (max - min) + min
// const max = 80;
// const min = 10;

const max = 80;
 const min = 10;
 const  randomNumber = Math.random() * (max - min) + min
 console.log( randomNumber);