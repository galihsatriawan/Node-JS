var db = require("./db_config")

db.connect((err)=>{
    if(err) throw err
    let sql = `
            CREATE TABLE tb_users
            (
                id int NOT NULL AUTO_INCREMENT,
                name VARCHAR(255),
                PRIMARY KEY(id)
            )
    `;
    db.query(sql,(err,result)=>{
        if(err) throw err
        console.log("Table created")
    })
})