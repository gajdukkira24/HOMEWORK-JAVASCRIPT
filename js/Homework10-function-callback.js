// Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек.
//  Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:

function processArray(array, callback) {
    return callback(array);
  }
  
  const sum = (arr) => arr.reduce((total, num) => total + num, 0);
  const min = (arr) => Math.min(...arr);
  const max = (arr) => Math.max(...arr);
  
  const numbers1 = [10, 20, 30, 40];
  const numbers2 = [5, -3, 12, 7];
  const numbers3 = [100, 200, 50, 400];
  
  console.log("Сума:", processArray(numbers1, sum));        
  console.log("Мінімум:", processArray(numbers2, min));    
  console.log("Максимум:", processArray(numbers3, max));   
  


//   2. Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними. 
//   Використайте її для виконання наступних операцій:
// Додавання.
// Віднімання.
// Множення.
// Ділення.

function operate(a, b, callback) {
    return callback(a, b);
  }
  

  const add = (a, b) => a + b;
  const subtraction = (a, b) => a - b;
  const multiplication = (a, b) => a * b;
  const division = (a, b) => b !== 0 ? a / b : 
  
 
  console.log("додаваня:", operate(10, 40, add));             
  console.log("Різниця:", operate(20, 2, subtraction));   
  console.log("Множення:", operate(6, 8, multiplication));
  console.log("Ділення:", operate(40, 4, division));      
  