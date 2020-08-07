var db = require("./db_config")

db.connect((err)=>{
    if(err) throw err;
    let sql = "CREATE DATABASE myshop";
    db.query(sql,(err,result)=>{
        if(err) throw err
        console.log("Database created")
    })
})