let arr = ['1234', '2235', '1236', '1237', '4238', '1239', '12310'];
let newArr = [];

for (const num of arr) {
  if (num.charAt(0) === '2' || num.charAt(0) === '4') {
    newArr.push(num);
  }
}

console.log(newArr);


let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  console.log( 'Делители этого числа: 1 и ' + i );
}
