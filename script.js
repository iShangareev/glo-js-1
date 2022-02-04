 let title = 'Goliaf';
 let screens = 'Простые, Сложные, Интерактивные';
 let screenPrice = 5;
 let rollback = 50;
 let fullPrice = 500;
 let adaptive = false;
 let servicePercentPrice = 0;

 alert('Погнали!');

 console.log('Мне нужен рассол');

 console.log(typeof title, typeof fullPrice, typeof adaptive);
 console.log(screens.length);
 console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/долларов/гривен/юани');
 console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/долларов/гривен/юани');
 console.log(screens.toLowerCase().split(', '));
 console.log(fullPrice * (rollback/100));


 title = prompt('Как называется ваш проект?');
 screens = prompt('Какие типы экранов нужно разработать?');
 screenPrice = Number(prompt('Сколько будет стоить данная работа?'));
 adaptive = Boolean(prompt('Нужен ли адаптив на сайте?'));

 service1 = prompt('Какой дополнительный тип услуги нужен?');
 servicePrice1 = Number(prompt('Сколько это будет стоить?'));
 service2 = prompt('Какой дополнительный тип услуги нужен?');
 servicePrice2 = Number(prompt('Сколько это будет стоить?'));

 fullPrice = screenPrice + servicePrice1 + servicePrice2;

 servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));

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

