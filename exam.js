const read = require ('./read')
const add = require ('./add')
const write = require ('./write')

const data = process.argv


if (data[2]){
    note = {
        Employee: data [3],
        Role: data [4],
        Department: data [5]
    }
    var oldNote = read()
    add (note, oldNote)
    
}
if (data[2] == 'read'){
    present(read())
}