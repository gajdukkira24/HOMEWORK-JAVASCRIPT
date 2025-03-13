
// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.


const arr1 = [23 , 35, 24, 29];
console.log(arr1[0],arr1[1],arr1[2],arr1[3],[arr1.length -1 ]);
arr1[2]= 10;
console.log(arr1);
// Створити масив із трьох рядків. Додати до масиву ще одну рядків.

const arr2  = ["orange" , "banana" , "lemon " , "watermelon" ]
arr2.push("kivi");
console.log(arr2[0], arr2[1] , arr2[2], arr2[3] , arr2[4]);


// Створити скрипт який поверне суму всіх чисел в масиві.

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
const array = [49, 222, 120, 23, 29];
for(let i = 0 ; i < array.length ; i += 1){
        console.log(array[i]);
}
    

// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

const arreys = ["apple", "banana", "kiwi", "watermelon", "cherry"];

for (let i = 0; i <  arreys.length; i++) {
    if ( arreys[i].length > 5) {
        console.log( arreys[i]);
    }
}


// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

const numbers = [23, 67, 89, 12, 45, 99, 34, 78, 56, 100];

let max = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i]; 
    }
}

console.log("Максимальне число:", max);

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
