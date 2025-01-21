const express = require('express')
const mysql = require('mysql');
const app = express()
app.use(express.urlencoded({extended : true}))
const port = 3000
var cont = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'adminform'
})

var id = 0;
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
});

app.post('/',(req,res)=>{
    let {EmailAdmin, passwordAdmin} = req.body;
    id = id + 1;
    cont.query(`insert into admintable2 values (${id}, '${EmailAdmin}', '${passwordAdmin}')`)
    res.redirect('/')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))