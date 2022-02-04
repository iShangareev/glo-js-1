//lesson002
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

// lesson 003-1

let lang = prompt('Введите en или ru');
const weekEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const weekRu = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
let arr = [];


if (lang === 'en') {

  console.log(weekEn);

} else if (lang === 'ru') {

  console.log(weekRu);

}

switch (lang) {
  case 'en':
    console.log(weekEn);
    break;
  case 'ru':
    console.log(weekRu);
    break;
}

arr['en'] = weekEn;
arr['ru'] = weekRu;

console.log(arr[lang]);


// lesson 003-2

let namePerson = prompt('Введите Имя');

namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Александр' ? console.log('преподаватель'): console.log('студент');
