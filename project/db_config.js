var mysql = require("mysql")

var db = mysql.createConnection({
    host: "localhost",
    user: "sh0brun",
    password: "sh0brun",
    database : "myshop"
})

// db.connect((err)=>{
//     if(err) throw err;
//     console.log("Connected");
// })

module.exports = db