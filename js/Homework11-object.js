// 1 Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", 
// який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm()
//  щоб поповнити рахунок або отримати готівку та prompt() 
//  щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 

const bankAccount = {
    ownerName: "Kira",
    accountNumber: "+380971179474",
    balance: 5500,

    deposit(amount) {
        if (amount <= 0) {
            alert("Сума повинна бути більшою за 0");
        } else {
            this.balance += amount;
            alert(` Поповнено на ${amount} грн. Баланс: ${this.balance} грн.`);
        }
    },

    withdraw(amount) {
        if (amount > this.balance) {
            alert(" Недостатньо коштів на рахунку!");
        } else {
            this.balance -= amount;
            alert(` Знято ${amount} грн. Залишок: ${this.balance} грн.`);
        }
    }
};
const isDeposit = confirm("Хочеш поповнити рахунок? ( Так,or Зняти гроші)");

const amount = Number(prompt("Введи суму:"));

if (isDeposit) {
    bankAccount.deposit(amount);
} else {
    bankAccount.withdraw(amount);
}

console.log(bankAccount);






// 2  Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає 
// "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія.
//  Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче
//   0 градусів Цельсія” і навпаки

const weather = {
    temperature: "-2°C",
    humidity: "30%",
    windSpeed: "18km",


}
const temperature = "-2°C";
const checkWeather = temperature >= 0 ? 'true' : 'false';
console.log(checkWeather);
console.log(weather);


if (temperature < 0) {
    console.log("Температура вища за 0°C");
} else {
    console.log("Температура нижче за 0°C");
}






// 3 Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login",
//  який буде перевіряти правильність введеного email та password. 

const objectUser = {
    name: "Kira",
    email: "kiragajdukgg@gmail.com",
    password: 123456789,


}
let login = "kiragajdukgg@gmail.com";
let password = 123456789;
if (login.length >= 5 && login.includes('@') > login.indexOf('@') && password.length >= 6) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}


if (login) {
    objectUser.login;
} else {
    objectUser.password;
}
console.log(objectUser);



// 4 Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating".
//  Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. 
//  Вивести значення властивостей в консоль. 

const movie = {
    title: "Squid Game 2",
    director: "Hwang Dong-hyuk",
    year: 2024,
    rating: 8,

    isHighRated() {
        return this.rating > 8;
    }
};


console.log("Назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік:", movie.year);
console.log("Рейтинг:", movie.rating);


if (movie.isHighRated()) {
    console.log(" Фільм має високий рейтинг (більше 8)");
} else {
    console.log(" Фільм має рейтинг 8 ");
}
