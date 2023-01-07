const read = require ('./read')
const add = require ('./add')


const data = process.argv


if (data[1]){
    note = {
        Employee: data [2],
        Role: data [3],
        Department: data [4]
    }
    var oldNote = read()
    add (note, oldNote)
    
}
if (data[1] == 'read'){
    present(read())
}