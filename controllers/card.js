const fs = require('fs')
const file = fs.readFileSync('users.json', 'utf8')


const fullDataJ = JSON.parse(file)
const summaryDataJ = JSON.parse(JSON.stringify(fullDataJ, ['id', '$oid', 'first_name', 'last_name', 'image']))


module.exports.summaryData = function (req, res) {
    let outData = []
    let page = req.query.page || 0
    if (page > 1) {
        outData = outData.concat(summaryDataJ[req.query.page * 9 - 9])
        for (let i = 1; i < 9; i++) {
            outData = outData.concat(summaryDataJ[i + req.query.page * 9 - 9])
        }
    } else {
        outData = outData.concat(summaryDataJ[0])
        for (let i = 1; i < 9; i++) {
            outData = outData.concat(summaryDataJ[i + req.query.page * 9 - 9])

        }
    }
    res.status(200).json(outData)
}

module.exports.fullData = function (req, res) {
    let outData = []
    for (key in fullDataJ) {
        if (fullDataJ[key].id.$oid == req.params.id)
            outData = fullDataJ[key]
    }
    res.status(200).json(outData)

}
