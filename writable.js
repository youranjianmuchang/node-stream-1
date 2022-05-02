const { Writable } = require('stream')

const outStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(`用户输入：${chunk}`);
        callback()
    }
})

process.stdin.pipe(outStream)