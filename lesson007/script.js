const appData = {
	 title: '',
	 screens: '',
	 screenPrice: 0,
	 adaptive: true,
	 rollback: 50,
	 allServicePrices: 0,
	 fullPrice: 0,
	 servicePercentPrice: 0,
	 service1: '',
	 service2: '',

	 asking: function() {
			appData.title = prompt('Как называется ваш проект?', 'Как называется ваш проект?');
			appData.screens = prompt('Какие типы экранов нужно разработать?', 'Какие типы экранов нужно разработать?');

			do {
				appData.screenPrice = prompt('Сколько будет стоить данная работа?', 1000);
			}	while (!appData.isNumber(appData.screenPrice));

			appData.adaptive = confirm('Нужен ли адаптив на сайте?');
	 },

   isNumber: function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
   },

   getAllServicePrices: function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      let price = 0

      if (i === 0) {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'Какой дополнительный тип услуги нужен 1?')
      } else if (i === 1) {
        appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'Какой дополнительный тип услуги нужен 2?')
      }

      do {
        price = prompt('Сколько будет стоить данная услуг?');
      } while (!appData.isNumber(price));

      sum += +price;
    }

    return sum;
   },

   getRollbackMessage: function(price) {
      if (price > 30000) {
        return 'Даем скидку в 10%';
      }  else if (price >= 15000 && price <= 30000) {
        return 'Даем скидку в 5%';
      } else if (price < 15000 && price >= 0) {
        return 'Скидка не предусмотрена';
      } else if (price < 0) {
        return 'Что то пошло не так';
      }
   },

   getFullPrice: function() {
      return +appData.screenPrice + appData.allServicePrices;
   },

   getTitle: function() {
      return appData.title.trim().charAt(0).toUpperCase() + appData.title.trim().slice(1).toLowerCase();
   },

   getServicePercentPrices: function() {
    return Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback/100)))
   },

   logger: function() {
     for (let data in appData) {
       console.log(data);
     }
   },

   start: function() {
      appData.asking()
      appData.allServicePrices = appData.getAllServicePrices();
      appData.fullPrice = appData.getFullPrice();
      appData.servicePercentPrice = appData.getServicePercentPrices();
      appData.title = appData.getTitle();
      appData.logger()
   }
	}


appData.start()

