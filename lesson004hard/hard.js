let str = 'Текст'

const getString = function(str) {
  if (typeof str !== 'string') {

    return 'Значение не строка';

  } else if (typeof str == 'string' && str.length <= 30) {

    return str.trim();

  } else if (typeof str == 'string' && str.length > 30) {

    return str.slice(0, 30) + '...';

  }
}

console.log(getString(str))
