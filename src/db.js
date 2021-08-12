  export let Categories = [
    { id: 1, name: "Телефоны"},
    { id: 2, name: "Компьютеры"},
    { id: 3, name: "Комплектующие", parent_id:2},
    { id: 4, name: "Аксессуары", parent_id:1}
  ];

  export let Products = [
    { id: 5, name: "Iphone 10", count: 5, price: 600, country: "China", category_id: 1},
    { id: 6, name: "Redmi Note 10", count: 2, price: 300, country: "China", category_id: 1},
    { id: 7, name: "MacBook Air", count: 17, price: 1500, country: "USA", category_id: 2},
    { id: 8, name: "ASUS", count: 2, price: 437, country: "Korea", category_id: 2},
    { id: 9, name: "Lenovo", count: 5, price: 223, country: "Japan", category_id: 2},
    { id: 10, name: "Blood5 keyboard", count: 233, price: 30, country: "China", category_id: 3},
    { id: 11, name: "JBL headphones", count: 70, price: 13, country: "China", category_id: 4}
  ];

  export let Reviews = [
    { id: 12, username: "Vasya", rate: 3, product_id: 7, text: "Все очень плохо"},
    { id: 13, username: "Petya", rate: 5, product_id: 11, text: "Все очень хорошо"},
    { id: 14, username: "Lena", rate: 5, product_id: 5, text: "Работает и слава Богу"},
    { id: 15, username: "Masha", rate: 1, product_id: 5, text: "Фигня, Redmi лучше:)"},
    { id: 16, username: "Masha", rate: 1, product_id: 5, text: "Согласен с предыдущим оратором"},
    { id: 17, username: "Yana", rate: 1, product_id: 10},
    { id: 18, username: "Robert", rate: 4, product_id: 8}
  ];