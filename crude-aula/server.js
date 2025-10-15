const connection = mysql.create
const express = require("express")
const mysql = require("mysql2")
const app = express()
const port = 3000

app.get('/', (req, res) =>
      res.send("Ola mundo"))

const connection.connect()

app.post('/clientes')

app.listen(port, () => {
    console.log("API funcioando")
})
