import express, { json } from 'express'
import { createPool } from 'mysql'
import bodyParser from 'body-parser'
import cors from 'cors'
import { API_QUERY } from './api_query.js'
import { API_ROUTS } from './api_routs.js'

const HOST ='localhost'
const USER ='zbychu'
const PASSWORD ='password'
const DATABASE = 'zobaczymy'



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
app.use (bodyParser.urlencoded({extended: true})) // zeby cos chodzilo




// ###################### ULT_ANALYSIS start ############################

//get all
app.get(API_ROUTS.ultimate_analysis.get, (req,res)=>{  
    db.query(API_QUERY.ultimate_analysis.get, (err,result)=>{
            res.send(result)
            if (err) console.log('error przy pobieraniu ultimate_analysis');})
    });

// insert image
app.post(API_ROUTS.ultimate_analysis.post, (req,res)=>{
    // console.log(req)
    const id = req.body.id 
    const name = req.body.name
    const f1 = req.body.f1
    const f2 = req.body.f2
    const f3 = req.body.f3
    const f4 = req.body.f4
    const f5 = req.body.f5
    const f6 = req.body.f6
    const f7 = req.body.f7
    const img1 = req.body.img1
    const img2 = req.body.img2
    const img3 = req.body.img3
    const img4 = req.body.img4
    const img5 = req.body.img5
    const img6 = req.body.img6
    const img7 = req.body.img7
    const end = req.body.end
    const SQL_QUERY =  API_QUERY.ultimate_analysis.add;
    db.query(SQL_QUERY, [id,name,f1,f2,f3,f4,f5,f6,f7,img1,img2,img3,img4,img5,img6,img7,end], (err,result)=>{
        if (result) {console.log('INSERT STATUS:',result.serverStatus);res.send(`inserted item - id: ${id}`)}
        if (err) console.log('prolemos przy post ultimate_analysis')})
    }); 


    // update
app.put(API_ROUTS.ultimate_analysis.put, (req,res)=>{
    const id = req.body.id 
    const name = req.body.name
    const f1 = req.body.f1
    const f2 = req.body.f2
    const f3 = req.body.f3
    const f4 = req.body.f4
    const f5 = req.body.f5
    const f6 = req.body.f6
    const f7 = req.body.f7
    const img1 = req.body.img1
    const img2 = req.body.img2
    const img3 = req.body.img3
    const img4 = req.body.img4
    const img5 = req.body.img5
    const img6 = req.body.img6
    const img7 = req.body.img7
    const end = req.body.end
    db.query(API_QUERY.ultimate_analysis.put, [name,f1,f2,f3,f4,f5,f6,f7,img1,img2,img3,img4,img5,img6,img7,end,id], (err, result)=>{
        if (err) console.log(err);
});
});








app.delete(API_ROUTS.ultimate_analysis.delete, (req,res)=>{
    const id = req.params.id
    db.query(API_QUERY.ultimate_analysis.delete, id, (err, result)=>{
    if (result.serverStatus==2)  {console.log('DELETE_RESULT:',result.serverStatus); res.send(`deleted item - id: ${id}`)}
    if (err) console.log(err)})
});

// ###################### ULT_ANALYSIS end ############################

















// ###################### IMAGES

//get all
app.get(API_ROUTS.images.get, (req,res)=>{
    const SQL_QUERY = API_QUERY.images.get;
    
    db.query(SQL_QUERY, (err,result)=>{
            res.send(result)
            // console.log(result)
            if (err) console.log(err);})
    });

// insert image
app.post(API_ROUTS.images.post, (req,res)=>{
    // console.log(req)
    const id = req.body.id 
    const img1 = req.body.f1
    const img2 = req.body.f2
    const img3 = req.body.f3
    const img4 = req.body.f4
    const img5 = req.body.f5
    const img6 = req.body.f6
    const img7 = req.body.f7
    const SQL_QUERY =  API_QUERY.images.add;
    db.query(SQL_QUERY, [id, img1,img2,img3,img4,img5,img6,img7], (err,result)=>{console.log(err)})
    });

// update images
app.put(API_ROUTS.images.put, (req,res)=>{
    // console.log(req)
    const id = req.body.id 
    const img1 = req.body.f1
    const img2 = req.body.f2
    const img3 = req.body.f3
    const img4 = req.body.f4
    const img5 = req.body.f5
    const img6 = req.body.f6
    const img7 = req.body.f7
    db.query(API_QUERY.images.put, [img1,img2,img3,img4,img5,img6,img7,id], (err, result)=>{
        if (err) console.log(err);
    });
});

// delete image
app.delete(API_ROUTS.images.delete, (req,res)=>{
    const id = req.params.id
    db.query(API_QUERY.images.delete, id, (err, result)=>{
       if (err) console.log(err);
    });
});

// ###################### IMAGES






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





