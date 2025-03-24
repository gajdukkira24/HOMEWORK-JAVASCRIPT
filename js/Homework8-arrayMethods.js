
// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів 
// може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.

const friends = ['Mango' , 'Poly' , 'Kiwi' , 'Ajax'];

let string = ''
for(let i = 1; i < friends.length; i++) {
    string+= ", " + friends[i];
    console.log(string);
}
console.log(string.join);
console.log(friends.join(","));

// 2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

const cards= [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];
cards.splice(2, 1);
console.log(cards); 
cards.indexOf([2,3]);
cards.push('Карточка-6');
console.log(cards); 

const cardToUpdate = 'Карточка-4-оновлена';

cards[3] = cardToUpdate;


// Перетворити масив:
const arrayOriginal = ["true", "Kiwi", "Monkong", "Singu", "Mango", "Ajax", "Poly", "false"];

// на масив arrayNew:
//todo: ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"];

// не змінюючи значення елементів та використовуючи методи:
// push(), pop(), unshift(), shift(),
// slice(), splice(), concat() за власним бажанням!

let arrayNew = [];

arrayNew.push(["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"])


console.log("arrayOriginal:", arrayOriginal);
console.log("arrayNew:", arrayNew);

