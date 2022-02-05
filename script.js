 let rollback = 50;
 let title = prompt('Как называется ваш проект?');
 let screens = prompt('Какие типы экранов нужно разработать?');
 let screenPrice = Number(prompt('Сколько будет стоить данная работа?'));
 let adaptive = Boolean(prompt('Нужен ли адаптив на сайте?'));
 let service1 = prompt('Какой дополнительный тип услуги нужен?');
 let servicePrice1 = Number(prompt('Сколько это будет стоить?'));
 let service2 = prompt('Какой дополнительный тип услуги нужен?');
 let servicePrice2 = Number(prompt('Сколько это будет стоить?'));
 let fullPrice = screenPrice + servicePrice1 + servicePrice2;
 let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));

 alert('Погнали!');
 console.log('Мне нужен рассол');
 console.log(typeof title, typeof fullPrice, typeof adaptive);
 console.log(screens.length);
 console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/долларов/гривен/юани');
 console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/долларов/гривен/юани');
 console.log(screens.toLowerCase().split(', '));
 console.log(fullPrice * (rollback/100));
 console.log(servicePercentPrice);

if (fullPrice > 30000) {

  console.log( 'Даем скидку в 10%' );

}  else if (fullPrice >= 15000 && fullPrice <= 30000) {

  console.log( 'Даем скидку в 5%' );

} else if (fullPrice < 15000 && fullPrice >= 0) {

  console.log( 'Скидка не предусмотрена' );

} else if (fullPrice < 0) {

  console.log( 'Что то пошло не так' )

}

