const { Readable } = require('stream')

const readable = new Readable({
    read(size) {
        const char = String.fromCharCode(this.currentInt++)
        this.push(char)
        if (this.currentInt > 90) {
            this.push(null)
        }
    }
})

readable.currentInt = 65

readable.pipe(process.stdout)
