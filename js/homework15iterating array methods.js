// Отримати загальну суму балансу (поле balance) всіх користувачів.
const calculateTotalBalance = users =>
    users.reduce((total, user) => total + user.balance, 0);

const users = [
  { name: 'User1', balance: 5000 },
  { name: 'User2', balance: 7000 },
  { name: 'User3', balance: 8916 },
];
  
  
  console.log(calculateTotalBalance(users)); // 20916


//  Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.//
const users1 = [
    {
      name: 'Sharlene Bush',
      friends: ['Briana Decker', 'Goldie Gentry']
    },
    {
      name: 'Elma Head',
      friends: ['Goldie Gentry']
    },
    {
      name: 'Sheree Anthony',
      friends: ['Briana Decker', 'Goldie Gentry']
    },
    {
      name: 'John Doe',
      friends: ['Alice Smith']
    }
  ];
  
  const getUsersWithFriend = (users, friendName) => {
    return users
      .filter(user => user.friends.includes(friendName))
      .map(user => user.name);
  };
  
  console.log(getUsersWithFriend(users1, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users1, 'Goldie Gentry')); // [ 'Sharlene Bush', 'Elma Head', 'Sheree Anthony' ]
  

//   Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)
const users2 = [
    {
      name: 'Moore Hensley',
      friends: ['Sharron Pace'],
    },
    {
      name: 'Sharlene Bush',
      friends: ['Briana Decker', 'Goldie Gentry'],
    },
    {
      name: 'Elma Head',
      friends: ['Goldie Gentry'],
    },
    {
      name: 'Carey Barr',
      friends: ['Jordan Sampson', 'Eddie Strong'],
    },
    {
      name: 'Blackburn Dotson',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
    },
    {
      name: 'Sheree Anthony',
      friends: ['Goldie Gentry', 'Briana Decker'],
    },
    {
      name: 'Ross Vazquez',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    },
  ];
  
  const getNamesSortedByFriendsCount = users => {
    return users
      .slice()
      .sort((a, b) => a.friends.length - b.friends.length)
      .map(user => user.name);
  };
  
  console.log(getNamesSortedByFriendsCount(users2));
  