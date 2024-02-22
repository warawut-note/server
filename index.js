const express = require ('express')
const app = express()
const POST = process.env.POST || 4000

app.get('/',(req,res) => {
    res.json ({msg: 'Hello World'})

})
app.listen (POST, () => {
    console.log ('Example app listening on port ${port}')
})