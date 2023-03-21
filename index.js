const col = ["id","ion_name","valence","ion_symbol","ion_type"]

const HOST ='localhost'
const USER ='zbychu'
const PASSWORD ='password'
const DATABASE = 'zobaczymy'





const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

// console.log(column_db["columns"]) 

const db = mysql.createPool({    
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
})


const app = express()
const numer_portu = 4001

app.use(cors())
app.use(express.json())
// app.use (bodyParser.urlencoded({extended: true})) // zeby cos chodzilo

app.get("/", (req,res)=>{ //req - require , res - response
    res.send("Serwer testowy działający na porcie:"+numer_portu+"działa!!!");
})

app.get("/api/testy", (req,res)=>{ //req - require , res - response
    const sqlINSERT =  "CREATE TABLE IF NOT EXISTS custoko (name VARCHAR(255), address VARCHAR(255))"
            db.query(sqlINSERT, (err,result)=>{
                if(err) console.log('error: ',err)
                if(result) {
                    console.log('rezultat: ',result)
                    res.send('API respond:' + 'Create tabela')}
                })
            
})



app.get("/api/create_new_table", (req,res)=>{ //req - require , res - response
    const sqlINSERT =  "CREATE TABLE IF NOT EXISTS custoko (name VARCHAR(255), address VARCHAR(255))"
            db.query(sqlINSERT, (err,result)=>{
                if(err) console.log('error: ',err)
                if(result) {
                    console.log('rezultat: ',result)
                    res.send('API respond:' + 'Create tabela')}
                })
            
})


app.listen(numer_portu, ()=>{
    console.log(" Najsik - server (TESTOWY_BAZY_DANYCH) jedzie na porcie:",numer_portu)
})


//wstawianie danych do bazy danych
app.post("/api/insert", (req,res)=>{
   console.log(req)
    const id = req.body.id 
    const symbol = req.body.symbol
    const f1 = req.body.f1
    const f2 = req.body.f2
    const f3 = req.body.f3
    const f4 = req.body.f4
    const f5 = req.body.f5
    const f6 = req.body.f6
    const f7 = req.body.f7

    const sqlINSERT =  'INSERT INTO script_flow (id,symbol,f1,f2,f3,f4,f5,f6,f7) VALUES (?,?,?,?,?,?,?,?,?)';

    db.query(sqlINSERT, [id,symbol,f1,f2,f3,f4,f5,f6,f7], (err,result)=>{console.log(err)})
});

//pobieranie danych z bazy danych
app.get("/api/get/ions", (req,res)=>{
    const sqlINSERTe =  "SELECT * FROM 	ions";
    
    db.query(sqlINSERTe, (err,result)=>{

        res.send(result)
        console.log(result)

    })
    
});

//pobieranie danych z bazy danych
app.get("/api/get/moje", (req,res)=>{
    const sqlINSERTe =  "SELECT * FROM 	tasks";
    
    db.query(sqlINSERTe, (err,result)=>{
    
        res.send(result)
        console.log(result)
        if (err) console.log(err);
    })
    
});


app.get("/api/get/script_flow", (req,res)=>{
    const sqlINSERTe =  "SELECT * FROM 	script_flow";
    
    db.query(sqlINSERTe, (err,result)=>{
    
        res.send(result)
        console.log(result)
        if (err) console.log(err);
    })
    
});


//wszystkie tabele
app.get("/api/get/all_tables", (req,res)=>{
    const sqlINSERTe =  "SHOW TABLES";
    
    db.query(sqlINSERTe, (err,result)=>{
    
        res.send(result)
        console.log(result)
        if (err) console.log(err);
    })
    
});
//nowa tabela
// app.get("/api/create_new_table", (req,res)=>{

 
//             const sqlINSERT =  "CREATE TABLE nowa ( task_id INT AUTO_INCREMENT, title VARCHAR(255) NOT NULL, start_date DATE, due_date DATE,status TINYINT NOT NULL, priority TINYINT NOT NULL, description TEXT, PRIMARY KEY (task_id) )"
//             db.query(sqlINSERT,nazwa, (err,result)=>{console.log(result)})
//             res.send(result)
//             const name = req.params.nazwa
// });



//usuwanie danych z bazy danych
app.delete("/api/delete/:id", (req,res)=>{
    const name = req.params.id

    const sqlDELETE =  "DELETE FROM script_flow WHERE id=?";

    db.query(sqlDELETE, name, (err, result)=>{
       if (err) console.log(err);
    });
});



// aktualizowanie danych w bazie danych

app.put("/api/update", (req,res)=>{
    console.log(req)
    const id = req.body.id 
    const symbol = req.body.symbol
    const f1 = req.body.f1
    const f2 = req.body.f2
    const f3 = req.body.f3
    const f4 = req.body.f4
    const f5 = req.body.f5
    const f6 = req.body.f6
    const f7 = req.body.f7
   
    // const sqlDELETE =  "UPDATE script_flow SET ion_name=? WHERE id=?";
    const sqlDELETE =  "UPDATE script_flow SET (symbol=?,f1=?,f2=?,f3=?,f4=?,f5=?,f6=?,f7=?) WHERE id=?";

    db.query(sqlDELETE, [ symbol,f1,f2,f3,f4,f5,f6,f7,id], (err, result)=>{
       if (err) console.log(err);
    });
});




