// 1. Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта
// : "Кава", "Чай" або "Сік". Використайте switch

const drink ="Чай";

switch (drink) {
   case "Кава":
     console.log("Кава не поганий вибір");
      break;
   case "Чай":
     console.log("Чай чудовий вибір");
      break;
   case "Сік":
     console.log("Сік поганий вибір бо часто розводять з водою");
     break;
   default:
     console.log("Вкажіть напій!");
 }



// 2. Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення
//  про робочий день, якщо вихідний — про вихідний.

const daysInMonth = "Субота"
switch (daysInMonth) {
    case "Понеділок":
      console.log("Робочий день");
       break;
    case "Вівторок":
      console.log("Робочий день");
       break;
    case "Середа":
      console.log("Робочий день");
      case "Четверг":
        console.log("Робочий день");
         break;
      case "П`ятниця":
        console.log("Робочий день");
        break;
        case "Субота":
          console.log("Вихідний");
          break;
          case "Неділя":
            console.log("Вихідний");
      break;
    default:
      console.log(" виведіть повідомлення  про день");
  }




// 3. Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і
//  виводьте відповідне повідомлення.
const month = 7;
switch (month) {
    case 12: 
    case 1: 
    case 2:
        console.log("Зима");
        break;
    case 3: 
    case 4: 
    case 5:
        console.log("Весна");
        break;
    case 6: 
    case 7: 
    case 8:
        console.log("Літо");
        break;
    case 9: 
    case 10: 
    case 11:
        console.log("Осінь");
        break;
    default:
        console.log("Некоректний номер місяця");
}



// 4. Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного
//  кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".
const color = "червоний";

switch (color) {
   case  "червоний":
     console.log("стоп");
      break;
   case "зелений":
     console.log("йти");
      break;
      case  "жовтий":
     console.log("чекати");
      break;
   default:
     console.log("Виберіть колір");
 }


// 5. Створіть змінні для зберігання двох чисел та оператора 
// (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть
//  попередження.



const num1 = 10; 
const num2 = 5;  
const operator = "/"; 

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if (num2 === 0) {
            console.log("Помилка: ділення на нуль!");
            break;
        }
        result = num1 / num2;
        break;
    default:
        console.log("Некоректний оператор");
        break;
}

if (result !== undefined) {
    console.log(`Результат: ${result}`);
}
