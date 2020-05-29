// simple moving average


  
  
  export default (data, size) => {
    const length = data.length
  
    if (!size) {
      return data.reduce((a, b) => a + b) / length
    }
  
    if (size <= 1) {
      return data.slice()
    }
  
    if (size > length) {
      return Array(length)
    }
  
    const prepare = size - 1
    let ret: any = []
    let sum = 0
    let i = 0
    let counter = 0
    let datum
  
    for (; i < length && counter < prepare; i ++) {
      datum = data[i]
  
      if (!isNaN(datum)) {
        sum += datum
        counter ++
      }
    }
  
    for (; i < length; i ++) {
      datum = data[i]
  
      if (!isNaN(datum)) {
        sum += datum
      }
  
      if (!isNaN(data[i - size])) {
        sum -= data[i - size]
      }
  
      ret[i] = sum / size
    }
  
    return ret
  }