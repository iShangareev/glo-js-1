const weekRu = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];


let date = new Date()
let dayWeek = date.getDay()

let arr = weekRu(function(data){
  if (data === 'Суббота' || data === 'Воскресенье') {
   return data.italics()
  } else if(weekRu[dayWeek] === data) {
   return data.bold()
  }

  return data;
})

console.log(arr)
