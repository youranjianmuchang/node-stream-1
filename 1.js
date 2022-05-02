const fs = require('fs')
const stream = fs.createWriteStream('./big_file.txt')

for(let i=1;i<=10000;i++){
    stream.write(`第${i}行内容，内容是=========================================\n`)
}
stream.end()
console.log('done')