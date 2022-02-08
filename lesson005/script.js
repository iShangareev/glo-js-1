let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 50;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function() {
  title = prompt('Как называется ваш проект?', 'Как называется ваш проект?');
  screens = prompt('Какие типы экранов нужно разработать?', 'Какие типы экранов нужно разработать?');
  screenPrice = +prompt('Сколько будет стоить данная работа?', 1000);

	do {
		screenPrice = prompt('Сколько будет стоить данная работа?', 1000);
	}
  while (!isNumber(screenPrice));

  adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function() {
  let sum = 0;
  let newSum;

  for (let i = 0; i < 2; i++) {

    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?', 'Какой дополнительный тип услуги нужен 1?')
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?', 'Какой дополнительный тип услуги нужен 2?')
    }

    newSum = +(prompt('Сколько это будет стоить? 2 раза должно быть', 1000));

    if(isNumber(newSum)) {
      sum += newSum;
    }
  }

  return sum
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
}

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
}


function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getTitle = function() {
  return title.trim().charAt(0).toUpperCase() + title.trim().slice(1).toLowerCase();
}

const getServicePercentPrices = function() {
  return Math.ceil(fullPrice - (fullPrice * (rollback/100)))
};

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices()


console.log(showTypeOf(title));
console.log(showTypeOf(screenPrice));
console.log(showTypeOf(adaptive));
console.log('allServicePrices', allServicePrices);
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);

