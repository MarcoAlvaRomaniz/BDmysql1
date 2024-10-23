const express = require('express');
const app = express();
const port = 3000
const mysql = require('mysql2');

const db = mysql.createConnection({
    host:'216.246.46.162',
    password:'Sir249-5',
    user:'lmmajcul_marco',
    port:'3306',
    database:'lmmajcul_catalogosirsa',
});
db.connect((err)=>{
    if(err){
        console.log('[ERRO]:',err);
        return;
    }
    console.log('Conexion correcta');
})

app.get('/', async(req,res)=>{
   
    const query = "SELECT * from equipos";
    db.query(query,(error,result)=>{
        if(error){
            console.error(error);
            return;
        }
        console.log("todo bien",result)
        res.status(200).json({data:result});

    })
});

app.listen(port,()=>{
    console.log(`servidor corriendo`)
})