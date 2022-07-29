const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})


app.listen(process.env.PORT || 6969, () => {
    console.log(`Your server is now running on ${process.env.PORT || 6969}`)
})