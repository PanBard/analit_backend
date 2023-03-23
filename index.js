const col = ["id","ion_name","valence","ion_symbol","ion_type"]

const HOST ='localhost'
const USER ='zbychu'
const PASSWORD ='password'
const DATABASE = 'zobaczymy'
// const ROUTS = require('.routs.js')  
// console.log(ROUTS)
 


import express, { json } from 'express'
import { createPool } from 'mysql'
import bodyParser from 'body-parser'
import cors from 'cors'
import { routs,test } from './routs.js'

console.log(routs()) 

const db = createPool({    
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
})


const app = express()
const numer_portu = 4001

app.use(cors())
app.use(json())
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
app.post("/api/insert_detected_imades", (req,res)=>{
    // console.log(req)
     const id = req.body.id 
     const image = req.body.image
     const name = req.body.name
    
 
     const sqlINSERT =  'INSERT INTO detected_images (iddetected_images,name,detected_imagescol) VALUES (?,?,?)';
 
     db.query(sqlINSERT, [id,name,image], (err,result)=>{console.log(err)})
 });

//wstawianie danych do bazy danych
app.post("/api/insert_script_flow", (req,res)=>{
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


app.post("/api/insert_analysis", (req,res)=>{
   console.log(req)
    const id = req.body.id 
    const f1 = req.body.f1
    const f2 = req.body.f2
    const f3 = req.body.f3
    const f4 = req.body.f4
    const f5 = req.body.f5
    const f6 = req.body.f6
    const f7 = req.body.f7
    const end = req.body.end

    const sqlINSERT =  'INSERT INTO analysis (idanalysis,f1,f2,f3,f4,f5,f6,f7,end) VALUES (?,?,?,?,?,?,?,?,?)';

    db.query(sqlINSERT, [id,f1,f2,f3,f4,f5,f6,f7,end], (err,result)=>{console.log(err)})
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

app.get("/api/get/detected_imades", (req,res)=>{
    const sqlINSERTe =  "SELECT iddetected_images, name, CONVERT(detected_imagescol USING utf8) as img FROM detected_images";
    
    db.query(sqlINSERTe, (err,result)=>{
    
        res.send(result)
        // console.log(result)
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

app.get("/api/get/analysis", (req,res)=>{
    const sqlINSERTe =  "SELECT * FROM 	analysis";
    
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
app.delete("/api/delete_script_flow/:id", (req,res)=>{
    const name = req.params.id

    const sqlDELETE =  "DELETE FROM script_flow WHERE id=?";

    db.query(sqlDELETE, name, (err, result)=>{
       if (err) console.log(err);
    });
});


app.delete("/api/delete_analysis/:id", (req,res)=>{
    const name = req.params.id

    const sqlDELETE =  "DELETE FROM analysis WHERE idanalysis=?";

    db.query(sqlDELETE, name, (err, result)=>{
       if (err) console.log(err);
    });
});


// aktualizowanie danych w bazie danych

app.put("/api/update_script_flow", (req,res)=>{
    // console.log(req)
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
    const sqlDELETE =  "UPDATE script_flow SET symbol=?,f1=?,f2=?,f3=?,f4=?,f5=?,f6=?,f7=? WHERE id=?";

    db.query(sqlDELETE, [ symbol,f1,f2,f3,f4,f5,f6,f7,id], (err, result)=>{
        console.log( symbol,f1,f2,f3,f4,f5,f6,f7,id)
       if (err) console.log(err);
    });
});

app.put("/api/update_analysis", (req,res)=>{
    // console.log(req)
    const id = req.body.id 
    const f1 = req.body.f1
    const f2 = req.body.f2
    const f3 = req.body.f3
    const f4 = req.body.f4
    const f5 = req.body.f5
    const f6 = req.body.f6
    const f7 = req.body.f7
    const end = req.body.end
   
    // const sqlDELETE =  "UPDATE script_flow SET ion_name=? WHERE id=?";
    const sqlDELETE =  "UPDATE script_flow SET f1=?,f2=?,f3=?,f4=?,f5=?,f6=?,f7=?, end=? WHERE id=?";

    db.query(sqlDELETE, [ f1,f2,f3,f4,f5,f6,f7,id,end], (err, result)=>{
        // console.log( f1,f2,f3,f4,f5,f6,f7,id)
       if (err) console.log(err);
    });
});





