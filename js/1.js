// class 강아지 {
//   constructor(name, color) {
//     this.type = name;
//     this.color = color;
//   }
//   한살먹기() {
//     if (this instanceof 고양이) {
//       this.age++;
//     }
//   }
// }
// let 강아지1 = new 강아지('말티즈', 'white');
// let 강아지2 = new 강아지('진돗개', 'brown');

// class 고양이 extends 강아지 {
//   constructor(name, color, age) {
//     super(name, color);
//     this.age = age;
//   }
// }
// let 고양이1 = new 고양이('코숏', 'white', 5);

// class Unit {
//   constructor() {
//     this.공격력 = 5;
//     this.체력 = 100;
//   }
//   get battlePoint() {
//     return this.공격력 + this.체력;
//   }
//   set heal(num) {
//     this.체력 = Number(this.체력 + num);
//   }
// }
// let 인스턴스1 = new Unit();
// 인스턴스1.heal = 50;

// const data = {
//   odd: [],
//   even: [],
//   classification(...rest) {
//     rest.forEach((a, i) => {
//       if (a % 2 == 0) {
//         this.even.push(a);
//       } else {
//         this.odd.push(a);
//       }
//     });
//   },
//   get Sort() {
//     let full = [...this.even, ...this.odd];
//     full = full.sort((a, b) => {
//       if (a < b) {
//         return -1;
//       } else if (a > b) {
//         return 1;
//       } else {
//         return 0;
//       }
//     });
//     return full;
//   },
// };
