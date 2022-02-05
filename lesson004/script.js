 let rollback = 50;
 let title = prompt('Как называется ваш проект?');
 let screens = prompt('Какие типы экранов нужно разработать?');
 let screenPrice = Number(prompt('Сколько будет стоить данная работа?'));
 let adaptive = Boolean(prompt('Нужен ли адаптив на сайте?'));
 let service1 = prompt('Какой дополнительный тип услуги нужен?');
 let servicePrice1 = Number(prompt('Сколько это будет стоить?'));
 let service2 = prompt('Какой дополнительный тип услуги нужен?');
 let servicePrice2 = Number(prompt('Сколько это будет стоить?'));


 const showTypeOf = function (variable) {
   console.log(variable, typeof variable);
 };

 const getRollbackMessage = function(price) {
   if (price > 30000) {
     return 'Даем скидку в 10%';
   }  else if (price >= 15000 && price <= 30000) {
     return 'Даем скидку в 5%';
   } else if (price < 15000 && price >= 0) {
     return 'Скидка не предусмотрена';
   } else if (price < 0) {
     return 'Что то пошло не так';
   }
 };

 const getAllServicePrices = function() {
  let allServicePrices = servicePrice1 + servicePrice2;
  return allServicePrices;
 };

 function getFullPrice() {
   let fullPrice = screenPrice + getAllServicePrices();
   return fullPrice;
 };

 const getTitle = function() {
   return title.trim().charAt(0).toUpperCase() + title.trim().slice(1).toLowerCase();
 };

 const getServicePercentPrices = function() {
   let servicePercentPrice = Math.ceil(getFullPrice() - (getFullPrice() * (rollback/100)));
   return servicePercentPrice;
 };

 showTypeOf(title);
 showTypeOf(screenPrice);
 showTypeOf(adaptive);

 console.log(screens);
 console.log(getRollbackMessage(getFullPrice()));
 console.log(getServicePercentPrices());

