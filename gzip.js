const fs = require('fs')
const zlib = require('zlib')

const file = process.argv[2] // 获取输入的参数, 命令node gzip.js ./big_file.txt中下标2就是文件路径

fs.createReadStream(file)
    .pipe(zlib.createGzip()) // 使用gzip压缩
    .pipe(fs.createWriteStream(file + '.gz')) // 输出在当前文件夹下