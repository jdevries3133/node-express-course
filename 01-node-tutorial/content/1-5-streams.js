//streams are use to read and write big things:
//writeable
//readable
//duplex
//transform
//sreams extend the event emitters class! streams are an adv topic, but let's learn about them.

//as our files grow, we can get errors that files are too big.

//go to repo 15-create-big-file. to see how he does it here.

//he reads with a loop!

//how to red the giant stream is in file 16 from the repo.
//here is some giant file reading! the pipe pushes from the read stream to the write stream. 
var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)
