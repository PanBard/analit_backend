const col = ["id","ion_name","valence","ion_symbol","ion_type"]

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

// console.log(column_db["columns"]) 

const db = mysql.createPool({
    // host:'mysql.agh.edu.pl',
    // user:'pastusz2',
    // password:'YguM6C1tJnz6bszK',
    // database:'pastusz2'
    
    host:'localhost',
    port: 3306,
    user:'root',
    password:'root',
    database:'zobaczymy'
})


const app = express()
const numer_portu = 3001

app.use(cors())
app.use(express.json())
// app.use (bodyParser.urlencoded({extended: true})) // zeby cos chodzilo

app.get("/", (req,res)=>{ //req - require , res - response
    res.send("Serwer testowy działający na porcie:"+numer_portu+"działa!!!");
})


app.listen(numer_portu, ()=>{
    console.log(" Najsik - server (TESTOWY_BAZY_DANYCH) jedzie na porcie:",numer_portu)
})


//wstawianie danych do bazy danych
app.post("/api/insert", (req,res)=>{
   
    const ajdi = req.body.id 
    const nazwa_jonu = req.body.ion_name
    const wartosciowosc = req.body.valence
    const symbol_jonu = req.body.ion_symbol
    const typ_jonu = req.body.ion_type

    const sqlINSERT =  `INSERT INTO ions (${col[0]}, ${col[1]}, ${col[2]}, ${col[3]},${col[4]}) VALUES (?,?,?,?,?)`;

    db.query(sqlINSERT, [ajdi, nazwa_jonu, wartosciowosc, symbol_jonu, typ_jonu], (err,result)=>{console.log(result)})
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
        res
        res.send(result)
        console.log(result)

    })
    
});



//usuwanie danych z bazy danych
app.delete("/api/delete/:id", (req,res)=>{
    const name = req.params.id

    const sqlDELETE =  "DELETE FROM ions WHERE id=?";

    db.query(sqlDELETE, name, (err, result)=>{
       if (err) console.log(err);
    });
});



// aktualizowanie danych w bazie danych

app.put("/api/update", (req,res)=>{
    const ajdi = req.body.id
    const nazwa = req.body.ion_name

    const sqlDELETE =  "UPDATE ions SET ion_name=? WHERE id=?";

    db.query(sqlDELETE, [nazwa,ajdi], (err, result)=>{
       if (err) console.log(err);
    });
});







//// testowe poloczenie by wpisac cos do bazy danych
// app.get("/db", (req,res)=>{ //req - require , res - response
//     const sqlINSERT = "INSERT INTO komentarze (imieOsoby,opiniaOsobie) VALUES ('jazda','nierobie')"
//     db.query(sqlINSERT, (err,result)=>{
//         res.send("wyslano dane do bazy");
//     })
// })





//w package.json dodalismy "start": "node index.js" i "devStart":"nodemon index.js" by wszystko smigalo po zapisaniu pliku - wystarczy wpisac npm run devStart