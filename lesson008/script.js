const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},

  start: function() {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();

    appData.logger()
  },

  isNumber: function(num) {
   return !isNaN(parseFloat(num)) && isFinite(num)
  },

  asking: function() {
    do {
      appData.title = prompt('Как называется ваш проект?', 'Как называется ваш проект?');
    }	while (!appData.title || +appData.title.match(/[^a-zA-Zа-яА-Я]/i));

    for (let i = 0; i < 2; i++) {
      let name = ''
      let price = 0

      do {
        name = prompt('Какие типы экранов нужно разработать?');
      }	while (!name || +name.match(/[^a-zA-Zа-яА-Я]/i));

      do {
        price = prompt('Сколько будет стоить данная работа?');
      }	while (!appData.isNumber(price));

      appData.screens.push({id: i, name: name, price: price})
    }

    for (let i = 0; i < 2; i++) {
      let name = ''
      let price = 0

      do {
        name = prompt('Какой дополнительный тип услуги нужен?');
      }	while (!name || +name.match(/[^a-zA-Zа-яА-Я]/i));

      do {
         price = prompt('Сколько это будет стоить?');
      } while (!appData.isNumber(price));

      appData.services[name] = +price
    }

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },

  addPrices: function() {
    for(let screen of appData.screens) {
      appData.screenPrice += +screen.price
    }

    for (let key in appData.services) {
        appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function() {
      appData.fullPrice =  +appData.screenPrice + appData.allServicePrices;
  },

  getServicePercentPrices: function() {
     appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
  },

  getTitle: function() {
     appData.title.trim().charAt(0).toUpperCase() + appData.title.trim().slice(1).toLowerCase();
  },

  getRollbackMessage: function(price) {
    if (price >= 30000) {
      return 'Даем скидку в 10%';
    } else if (price >= 15000 && price < 30000) {
      return 'Даем скидку в 5%';
    } else if (price < 15000 && price >= 0) {
      return 'Скидка не предусмотрена';
    } else if (price < 0) {
      return 'Что то пошло не так';
    }
  },

  logger: function() {
      console.log(appData.fullPrice)
      console.log(appData.servicePercentPrice)
      console.log(appData.screens)
  },
}

appData.start()

