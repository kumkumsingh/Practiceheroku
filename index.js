const express = require('express')
const app = express()
const port = process.env.PORT || 4000

//app.listen('listen to my port',port)
app.listen(port , () => console.log('listening to my port check check2',port))

//app.listen(port, () => console.log("listening on port " + port))
