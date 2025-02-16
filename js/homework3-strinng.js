//  1. Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
const result= 5+5+`5`;
console.log(result);



//  2. Створіть змінну email з вашою електронною адресою. Напишіть скрипт,
//  який перевіряє чи містить змінна email символ @ (за доп метода includes()  або indexOf()) та
//  рахує загальну кількість символів. Результат виведіть в консоль.

const email ="gajdukkira232@gmail.com"
console.log(email .includes("@"));
const emailCheck =email.length;
console.log( emailCheck);


// 3. Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName.
//  До змінної fullName додати ‘Viktor’. fullName вивести в консоль.(працюємо з конкатенацією)

let word1 ="my";
let word2 ="name";
let word3 = "is"
let fullName = word1 + " " + word2 + " " + word3;

console.log(fullName+ " "  + "Victor");




//  4. Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. 
// За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»
const userName = "Катерина";
const payment ="! До сплати 700 гривень";
const thanks = "Дякуємо," ;
const messageThanks = alert(thanks + " " + userName + " " + payment );
console.log(messageThanks );








// Додаткові для практики:
// 5. Створити змінну, яка містить рядок з вашим ім'ям та прізвищем.
//  Використовуючи метод .indexOf(), знайти і вивести в консоль 
// позицію, на якій знаходиться пробіл між ім'ям та прізвищем.

const myName ="Кіра Гайдук";
console.log(myName .indexOf(" "));




// 6. Написати скрипт пошуку в рядку. Дано:
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';
const string1 = 'Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!';
const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
const string3 = 'Рекламна кампанія #jsIsAwesome';

const userWord = prompt("Будь ласка, введіть слово для пошуку:");

if (userWord) {
  const lowerUserWord = userWord.toLowerCase();

}


// 1. зробити дві змінні: 
// ПЕРШУ - <myFavoriteGameName> зі значенням вашої улюбленої гри(наприклад "minecraft")
// та ДРУГУ - <myFavoriteGameText> зі значенням рядка = "my favorite game's name" 
// 2.
// За доромогою властивості або метода рядка 
// отримати ОСТАННІЙ символ змінної <myFavoriteGameName>
// та записати це значення у ТРЕТЮ змінну <lastCharacter>.
// 3.
// Зробити перетворення значення змінної <lastCharacter> 
// на ВЕЛИКУ(заглавну літеру).
// 4.
// Вивести в консоль повідомлення, використовуючи 
// значення ВСІХ ТРЬОХ змінних у такому форматі:
// "The last letter in <myFavoriteGameText> "<myFavoriteGameName>" is "<lastCharacter>" !" 
// Використовуйте шаблонний рядок!!

// приклад рядка, що має вийти
// The last letter in my favorite game's name "minecraft" is "T" !