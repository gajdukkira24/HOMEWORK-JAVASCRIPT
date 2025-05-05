// Завдання 1
// Напиши скрипт, який, для об'єкта user, послідовно:
// - додає поле mood зі значенням 'happy'
// - замінює значення hobby на 'skydiving'
// - замінює значення premium на false
// - виводить вміст об'єкта user в форматі ключ:значення -використовуючи Object.keys() і for...of
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// user.mood = 'happy';
// user.hobby ='skydiving';
// user.premium = false ;
// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }
 

// // Завдання 2
// // Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
// const countProps = function (obj) {
//         return Object.keys(obj).length;
      
      
// };
// console.log(countProps({})); 
// console.log(countProps({ name: 'Mango', age: 2 })); 
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); 

// // Завдання 3
// // Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого
// //  (який виконав більше всіх задач). Співробітники і
// //  кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
//  const findBestEmployee = function (employees) {
//     let maxTasks = 0;
//     let bestEmployee = '';
  
//     for (const name in employees) {
//       if (employees[name] > maxTasks) {
//         maxTasks = employees[name];
//         bestEmployee = name;
//       }
//     }
  
//     return bestEmployee;
  
// };
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); 

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); 

// // Завдання 4
// // Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників
// //  і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
// const countTotalSalary = function (employees) {
   
//         let total = 0;
      
//         for (const name in employees) {
//           total += employees[name];
//         }
      
//         return total;
      
      
// };
// console.log(countTotalSalary({})); 
// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); 

// // Завдання 5
// // Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості.
// //  Повертає масив значень певної властивості prop з кожного об'єкта в масиві.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроїд', price: 400, quantity: 7 },
//   { name: 'Захоплення', price: 1200, quantity: 2 },
// ];
// let total = 0;
// const getAllPropValues = function (arr, prop) {
//     const result = [];

//     for (const item of arr) {
//       if (prop in item) {
//         result.push(item[prop]);
//       }
//     }
  
//     return result;
//   };
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); // []


// // Завдання 6
// // Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту
// //  (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// // Викличи функції для перевірки працездатності твоєї реалізації.
// const calculateTotalPrice = function (allProdcuts, productName) {

// };

// console.log(calculateTotalPrice(products, 'Радар')); 
// console.log(calculateTotalPrice(products, 'Дроїд')); 


// 1
// Напиши сценарій керування особистим кабінетом інтернет-банку.
// Є об'єкт account в якому необхідно реалізувати методи 
// для роботи з балансом та історією транзакцій.
/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  /*
   * Кожна транзакція - це об'єкт з властивостями: 
  id, type і amount
   */
  const account = {
    // Поточний баланс рахунку
    balance: 0,
    // Історія транзакцій
    transactions: [],
    /*
     * Метод створює і повертає об'єкт транзакції.
     * Приймає суму і тип транзакції.
     */
    createTransaction(amount, type) {},
    /*
     * Метод відповідає за додавання суми до балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
    deposit(amount) {},
    /*
     * Метод відповідає за зняття суми з балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій.
     *
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливо, недостатньо коштів.
     */
    withdraw(amount) {},
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {},
    /*
     * Метод шукає і повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {},
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {},
  };
  
  // console.log(account.getBalance());
  // account.deposit(100);
  // console.log(account.getBalance());
  // account.deposit(10);
  // console.log(account.getBalance());
  // account.withdraw(20);
  // console.log(account.getBalance());
  // account.withdraw(40);
  // console.log(account.getBalance());
  
  // console.log('Transaction 1: ');
  // console.log(account.getTransactionDetails(1));
  // console.log('Transaction 3: ');
  // console.log(account.getTransactionDetails(3));
  // console.log('Transaction 4: ');
  // console.log(account.getTransactionDetails(4));
  
  // console.log('Withdrawals: ' + account.getTransactionTotal(Transaction.WITHDRAW));
  // console.log('Deposits: ' + account.getTransactionTotal(Transaction.DEPOSIT));
  