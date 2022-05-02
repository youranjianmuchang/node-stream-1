const { Readable } = require('stream')

const readable = new Readable()

readable.push('12345')
readable.push('67890')

readable.push(null)

// readable.pipe(process.stdout) 等于下面的data事件
readable.on('data', chunk => {
    process.stdout.write(chunk)
    console.log('输入了一次数据')
})