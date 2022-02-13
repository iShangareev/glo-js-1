const books = document.querySelectorAll('.book')
const body = document.querySelector('body')
const headerBooks = document.querySelectorAll('.book h2 a')
const ad = document.querySelector('.adv')
const chapterTwo = books[0].querySelectorAll('li')
const chapterFive = books[5].querySelectorAll('li')
const chapterSix = books[2].querySelectorAll('li')
let elem = document.createElement('li')
elem.innerHTML = "Глава 8: За пределами ES6"

books[0].insertAdjacentElement('beforebegin', books[1]);
books[5].insertAdjacentElement('afterend', books[2]);
books[5].insertAdjacentElement('beforebegin', books[3]);

body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

headerBooks[4].innerHTML = 'Книга 3. this и Прототипы Объектов';

ad.remove()

chapterTwo[9].insertAdjacentElement('afterend', chapterTwo[2]);
chapterTwo[4].insertAdjacentElement('beforebegin', chapterTwo[6]);
chapterTwo[4].before(chapterTwo[8]);

chapterFive[1].after(chapterFive[9]);
chapterFive[2].before(chapterFive[3]);
chapterFive[2].before(chapterFive[4]);
chapterFive[7].after(chapterFive[5]);


chapterSix[9].before(elem);


console.log(chapterSix)


