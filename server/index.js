const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: "root",
    password: 'password',
    database: 'cruddatabase',
})

// passes route and parameters of function
app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('inception', 'good movie');"

    db.query(sqlInsert, (err, result)=> {
        res.send("Hello Patrick")
    })
});

app.listen(3001, () => {
    console.log("running on port 3001");
});