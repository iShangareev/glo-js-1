 const title = "Goliaf";
 const screens = "Простые, Сложные, Интерактивные";
 const screenPrice = 5;
 const rollback = 50;
 const fullPrice = 500;
 const adaptive = false;

 alert('Погнали!');

 console.log('Мне нужен рассол');

 console.log(typeof title, typeof fullPrice, typeof adaptive);
 console.log(screens.length);
 console.log("Стоимость верстки экранов " + screenPrice + " рублей/долларов/гривен/юани");
 console.log("Стоимость разработки сайта " + fullPrice + " рублей/долларов/гривен/юани");
 console.log(screens.toLowerCase().split(","));
 console.log(fullPrice * (rollback/100));
