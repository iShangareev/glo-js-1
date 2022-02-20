'use strict'

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
    this.addTitle()
    startBtn.addEventListener('click', this.checkValues.bind(this), false)
    buttonPlus.addEventListener('click', this.addScreenBlock)
    inputRange.addEventListener('change', this.getRollback.bind(this), false)
  },

  addTitle: function () {
    document.title = title.textContent
  },

  start: function() {
    this.addscreens()
    this.addServices()
    this.addPrices()

    //this.logger()
    this.showResult()
  },

  showResult: function() {
    total.value = this.screenPrice
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
    fullTotalCount.value = this.fullPrice
  },

  checkValues: function() {
    let isError = false

    let selects = document.querySelectorAll('.screen .main-controls__select select')
    let inputs = document.querySelectorAll('.screen .main-controls__input input')
    let actions = [...inputs, ...selects]

    actions.forEach(el => {
      if(el.value === '') {
        isError = true
      }
    })

    if(!isError) {
      actions.forEach(el => {
        el.disabled = true
      })

      startBtn.style.display = 'none';
      resetBtn.style.display = 'block';
      resetBtn.addEventListener('click', this.reset.bind(this), false)

      this.start()
    }
  },

  reset: function() {
    const selects = document.querySelectorAll('.screen .main-controls__select select')
    const inputs = document.querySelectorAll('.screen .main-controls__input input')
    const screens = document.querySelectorAll('.screen')
    const totalAll = document.querySelectorAll('.total-input')

    const checkboxs = [...otherItemsNumber, ...otherItemsPercent]
    const actionsL = [...inputs, ...selects]
    const inputsR = [...totalAll]

    screens.forEach((el,index) => {
      if(index != 0) {
        el.remove()
      }
    })

    checkboxs.forEach(el => {
      el.querySelector('input[type=checkbox]').checked = false
    })

    actionsL.forEach(el => {
      el.value = ''
      el.disabled = false
    })

    inputsR.forEach(el => {
      el.value = '0'
    })

    rangeValue.innerHTML = '0 %'
    inputRange.value = '0'
    resetBtn.style.display = 'none';
    startBtn.style.display = 'block';
  },

  getRollback: function() {
    rangeValue.innerHTML = inputRange.value + '%'
    this.rollback = +inputRange.value
  },

  addscreens: function() {
    screens = document.querySelectorAll('.screen')

    screens.forEach((screen, index) => {
      const select = screen.querySelector('select')
      const input = screen.querySelector('input')
      let selectName = select.options[select.selectedIndex].textContent

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value
      })
    })
  },

  addServices: function() {

    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')

      if (check.checked) {
          this.servicesPercent[label.textContent] = +input.value
      }
    })

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')

      if (check.checked) {
          this.servicesNumber[label.textContent] = +input.value
      }
    })
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true)
    screens[screens.length -1].after(cloneScreen)
  },

  addPrices: function() {
    let screenCount = 0

    for(let screen of this.screens) {
      this.screenPrice += +screen.price
    }

    for(let screens of this.screens) {
      screenCount += +screens.count
      totalCount.value = screenCount
    }

    for (let key in this.servicesNumber) {
        this.servicePricesNumber += this.servicesNumber[key];
    }

    for (let key in this.servicesPercent) {
        this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
    }

    this.fullPrice =  +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;
    totalCountRollBack.value = this.fullPrice - (this.fullPrice * (this.rollback / 100))
  },

  logger: function() {
      console.log(this.fullPrice)
      console.log(this.servicePercentPrice)
      console.log(this.screens)
  },
}

appData.init()
