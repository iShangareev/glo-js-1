const num  = 266219;
let total = 1;

const getNum = () => {

  String(num)
  .split("")
  .forEach(function(item) {
    total *= Number(item)
  });

  return Number(String(total**3).slice(0,2))

}

console.log(getNum());
