const title  = document.getElementsByTagName('h1')[0];
const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]
const buttonPlus = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')
const inputRange = document.querySelector('.rollback input[type=range]')
const rangeValue = document.querySelector('.rollback .range-value')
const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollBack = document.getElementsByClassName('total-input')[4]
let statusIputs = ''

let screens = document.querySelectorAll('.screen')

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  init: function() {
    appData.addTitle()
    startBtn.addEventListener('click', appData.checkValues)
    buttonPlus.addEventListener('click', appData.addScreenBlock)
    inputRange.addEventListener('change', appData.getRollback)
  },
  addTitle: function () {
    document.title = title.textContent
  },
  start: function() {
    appData.addscreens()
    appData.addServices()
    appData.addPrices()

    //appData.logger()
    appData.showResult()
  },

  showResult: function() {
    total.value = appData.screenPrice
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
    fullTotalCount.value = appData.fullPrice
  },

  checkValues: function() {
    let isError = false

    selects = document.querySelectorAll('.screen .main-controls__select select')
    inputs = document.querySelectorAll('.screen .main-controls__input input')
    let actions = [...inputs, ...selects]

    actions.forEach(el => {
      if(el.value === '') {
        isError = true
      }
    })

    if(!isError) {
      appData.start()
    }
  },

  getRollback: function() {
    rangeValue.innerHTML = inputRange.value + '%'
    appData.rollback = +inputRange.value
  },

  addscreens: function() {
    screens = document.querySelectorAll('.screen')

    screens.forEach(function (screen, index) {
      const select = screen.querySelector('select')
      const input = screen.querySelector('input')
      selectName = select.options[select.selectedIndex].textContent

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value
      })
    })
  },

  addServices: function() {
    otherItemsPercent.forEach(function(item) {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')

      if (check.checked) {
          appData.servicesPercent[label.textContent] = +input.value
      }
    })

    otherItemsNumber.forEach(function(item) {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')

      if (check.checked) {
          appData.servicesNumber[label.textContent] = +input.value
      }
    })
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true)
    screens[screens.length -1].after(cloneScreen)
  },

  addPrices: function() {
    let screenCount = 0

    for(let screen of appData.screens) {
      appData.screenPrice += +screen.price
    }

    for(let screens of appData.screens) {
      screenCount += +screens.count
      totalCount.value = screenCount
    }

    for (let key in appData.servicesNumber) {
        appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
        appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
    }

    appData.fullPrice =  +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;
    totalCountRollBack.value = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
  },

  logger: function() {
      console.log(appData.fullPrice)
      console.log(appData.servicePercentPrice)
      console.log(appData.screens)
  },
}

appData.init()


