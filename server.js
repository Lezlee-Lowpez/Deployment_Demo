const express = require('express')
const app = express()

//middleware - this runs anytime a request comes in - anytime anyone uses the 
//server
//.static - serves static files 
app.use(express.static(`${__dirname}/public`))

app.listen(4000, () => console.log("Running on 4000"))