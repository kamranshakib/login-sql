const express = require('express')
const mysql = require('mysql');
const app = express()
app.use(express.urlencoded({extended : true}))
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))