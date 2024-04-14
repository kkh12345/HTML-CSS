// // 배열
// 관련있는 데이터들을 하나로 묶어서 하나의 변수 아래 저장하는 것

let fruit = ['banana', 'apple', 'grape'];
console.log(fruit);
console.log(fruit[1]);
fruit[0] = 'cherry';
console.log(fruit[0]);

fruit.pop(); //끝에걸 없애줌
console.log(fruit);
fruit.push('fruit');
console.log(fruit);

//아이템 있는지 없는지 확인
console.log(fruit.includes('apple'));
console.log(fruit.includes('grape'));

// 인덱스 번호 확인해주는 함수
console.log(fruit.indexOf('apple'));

//slice : 배열 아이템을 잘라내는 역할(시작점,끝점-끝점 미포함) 잘라낸 값 반환. 기존 배열은 건드리지 않음

console.log(fruit.slice(2));
console.log(fruit.slice(1));
console.log(fruit.slice(0, 2));
let extra = fruit.slice(0, 2);
console.log(extra);
console.log('original fruit', fruit);

//splice : 배열 아이템 잘라내는 역할 (시작점, 개수) 잘라낸 값 반환. 기존 배열 건드림
console.log(fruit.splice(2, 1));
