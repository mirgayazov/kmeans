const fs = require('fs')

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  let arr = data.split('\r\n')
  arr = arr.map(str => {
    return (
      [
      Number(str.split('\t')[2]),
      Number(str.split('\t')[3]),
      str.split('\t')[4]]
    )
    // return (
    //   [Number(str.split('\t')[0]),
    //   Number(str.split('\t')[1]),
    //   Number(str.split('\t')[2]),
    //   Number(str.split('\t')[3]),
    //   str.split('\t')[4]]
    // )
  })
  fs.writeFile('3.txt', JSON.stringify(arr), err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })
})