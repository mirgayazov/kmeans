const fs = require('fs')

fs.readFile('fishersIrises.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    let arr = data.split('\r\n')
    arr = arr.map(str => {
        return (
            [
                Number(str.split('\t')[0]),
                Number(str.split('\t')[1]),
                Number(str.split('\t')[2]),
                Number(str.split('\t')[3]),
                str.split('\t')[4]
            ]
        )
    })
    fs.writeFile('fishersIrises.js', 'let fishersIrises = ' +
        JSON.stringify(arr) + '\nmodule.exports = fishersIrises', err => {
            if (err) {
                console.error(err)
                return
            }
        }
    )
})