const fs = require('fs')
file = process.argv.slice(2)[0] || null

if(!file) return console.warn("file arg not specified")
fs.readFile(file,(err,data)=>{
    if(err) return console.error("Something was wrong reading the file")
    console.log(data.toString())
})