module.exports = {
  valueToDesc (value) {
    switch (value) {
      case 0: 
        return 'zero'
      case 1:
        return 'um'
      case 2:
        return 'dois'
      case 3:
        return 'três'
      case 4:
        return 'quatro'
      case 5:
        return 'cinco'
    }
  },

  descToValue (desc) {
    switch (desc) {
      case 'zero':
        return 0
      case 'um':
        return 1
      case 'dois':
        return 2
      case 'três':
        return 3
      case 'quatro':
        return 4
      case 'cinco':
        return 5
    }
  }
}