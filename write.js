const fs = require ('fs')
const write = function (data){
    fs.writeFileSync ('data.txt', data)
}
module.exports = write