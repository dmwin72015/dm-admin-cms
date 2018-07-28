function moneyNumFormat(num) {
  if (num != null) {
    return data.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
  }
  return num
}

const importFilters = Vue => {
  Vue.filter('moneyNumFormat', moneyNumFormat)
}

export default importFilters
export { moneyNumFormat }
