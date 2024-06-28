const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: {
        value: 5,
        left: null,
        right: null
      },
      right: null
    }
  },
  right: {
    value: 6,
    left: null,
    right: {
      value: 7,
      left: null,
      right: null
    }
  }
}

const temp = 10

module.exports = tree