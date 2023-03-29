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

app.get("/", (req,res)=>{ //req - require , res - response
    res.send("Serwer testowy działający na porcie:"+numer_portu+"działa!!!");
})


app.listen(numer_portu, ()=>{
    console.log(" Najsik - server (TESTOWY_BAZY_DANYCH) jedzie na porcie:",numer_portu)
})











// ###################### ULT_ANALYSIS start ############################

//get all
app.get(API_ROUTS.cation_analysis.get, (req,res)=>{  
    db.query(API_QUERY.ultimate_analysis.get, (err,result)=>{
            res.send(result)
            if (err) console.log('error przy pobieraniu ultimate_analysis');})
    });

// insert image
app.post(API_ROUTS.cation_analysis.post, (req,res)=>{
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
        if (err) console.log('prolemos przy post ultimate_analysis: ',err.sqlMessage)})
    }); 


 // update
 app.put(API_ROUTS.cation_analysis.put, (req,res)=>{
    
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
    const LABELS = [name,f1,f2,f3,f4,f5,f6,f7,img1,img2,img3,img4,img5,img6,img7,end]
    const q = ['name','f1',"f2","f3",'f4','f5','f6','f7','img1','img2','img3','img4','img5','img6','img7','end']
    let not_null_array = []
    let current_set=''
    LABELS.map((lab,index)=>{
        if(typeof lab !== 'undefined') {not_null_array.push(lab); current_set=current_set+q[index]+'=?,'}
    })
    const ero = current_set.substring(0, current_set.length - 1);
    not_null_array.push(id) 
    let CUSTOM_QUERY=`UPDATE ultimate_analysis SET ${ero} WHERE id=?`;
    console.log('customquery',CUSTOM_QUERY)
    
    db.query(CUSTOM_QUERY, not_null_array, (err, result)=>{
        if (result) {console.log('PUT STATUS:',result.serverStatus);res.send(`PUT item - id: ${id}`)}
        if (err) console.log('error w put',err.sqlMessage);
});
});

// SET_END analysis
app.put(API_ROUTS.cation_analysis.set_end, (req,res)=>{
    const id = req.body.id 
    const end = req.body.end
    db.query(API_QUERY.ultimate_analysis.set_end, [end,id] , (err, result)=>{
        if (result) {console.log('SET_END STATUS:',result.serverStatus);res.send(`SET_END in analysis - id: ${id}`)}
        if (err) console.log('error w SET_END',err.sqlMessage);
});
});


// SET_RESULT analysis
app.put(API_ROUTS.cation_analysis.set_result, (req,res)=>{
    const id = req.body.id 
    const result = req.body.result
    db.query(API_QUERY.ultimate_analysis.set_result, [result,id] , (err, result)=>{
        if (result) {console.log('SET_RESULTSTATUS:',result.serverStatus);res.send(`SET_RESULT in analysis - id: ${id}`)}
        if (err) console.log('error w SET_RESULT',err.sqlMessage);
});
});



app.delete(API_ROUTS.cation_analysis.delete, (req,res)=>{
    const id = req.params.id
    db.query(API_QUERY.ultimate_analysis.delete, id, (err, result)=>{
    if (result.serverStatus==2)  {console.log('DELETE_RESULT:',result.serverStatus); res.send(`deleted item - id: ${id}`)}
    if (err) console.log('problem delete ult',err.sqlMessage)})
});

// ###################### ULT_ANALYSIS end ############################




// _________________________ SHUFFLE start _____________________________________

app.put(API_ROUTS.shuffle.get, (req,res)=>{
    
    const phase = req.body.phase
    let label = req.body.label
    console.log('label = ',label)
    let CUSTOM_QUERY=`SELECT * FROM script_flow WHERE ${'f'+phase} = '${label}'`;
    console.log('------------------------',CUSTOM_QUERY)
    
    db.query(CUSTOM_QUERY,  (err, result)=>{
        if (result) {console.log('GET shuffle STATUS:',result.serverStatus);res.send(result)}
        if (err) console.log('error w shuffle',err.sqlMessage);
});
});


// _________________________ SHUFFLE end _____________________________________




// CUSTOM QUERY ------------------- start

app.post(API_ROUTS.custom_query.get, (req,res)=>{  
    const QUERY = req.body.query
    db.query(QUERY, (err,result)=>{
            if (result) {console.log('custom qery STATUS:',result.serverStatus);res.send(result)}
            if (err) console.log('error at custom query',err.sqlMessage);})
    });


// CUSTOM QUERY ------------------- start




//------- cation script flow - start

//get all cation script flow
app.get(API_ROUTS.cation_script_flow.get, (req,res)=>{
    db.query(API_QUERY.cation_script_flow.get, (err,result)=>{
        if(result) { res.send(result);   console.log('DOWNLAOD_script_flow:',result.serverStatus)}
        if (err) console.log('prolemos przy post get/script_flow: ',err.sqlMessage);
    })
});


//wstawianie cation script flow
app.post(API_ROUTS.cation_script_flow.post, (req,res)=>{
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
     db.query(API_QUERY.cation_script_flow.add, [id,symbol,f1,f2,f3,f4,f5,f6,f7], (err,result)=>{console.log(err)})
 });


// update cation script flow
app.put(API_ROUTS.cation_script_flow.put, (req,res)=>{
    const id = req.body.id 
    const symbol = req.body.symbol
    const f1 = req.body.f1
    const f2 = req.body.f2
    const f3 = req.body.f3
    const f4 = req.body.f4
    const f5 = req.body.f5
    const f6 = req.body.f6
    const f7 = req.body.f7
    db.query(API_QUERY.cation_script_flow.put, [ symbol,f1,f2,f3,f4,f5,f6,f7,id], (err, result)=>{
        console.log( symbol,f1,f2,f3,f4,f5,f6,f7,id)
       if (err) console.log(err);
    });
});

// delete cation script flow
app.delete(API_ROUTS.cation_script_flow.delete, (req,res)=>{
    const name = req.params.id
    db.query(API_QUERY.cation_script_flow.delete, name, (err, result)=>{
       if (err) console.log(err);
    });
});

//------- cation script flow - end





//------- anion script flow - start --------------------

//get all anion script flow
app.get(API_ROUTS.anion_script_flow.get, (req,res)=>{
    db.query(API_QUERY.anion_script_flow.get, (err,result)=>{
        if(result) { res.send(result);   console.log('DOWNLAOD_anion script_flow:')}
        if (err) console.log('prolemos przy post get/ anion script_flow: ',err.sqlMessage);
    })
});


//wstawianie anion script flow
app.post(API_ROUTS.anion_script_flow.post, (req,res)=>{
    console.log(req)
     const id = req.body.id 
     const symbol = req.body.symbol
     const f1 = req.body.f1
     const f2 = req.body.f2
     const f3 = req.body.f3
     const f4 = req.body.f4
     db.query(API_QUERY.anion_script_flow.add, [id,symbol,f1,f2,f3,f4], (err,result)=>{
        if (result)  {console.log('INSERT_ANION:',result.serverStatus); res.send(`inserted item to anion_script - id: ${id}`)}
        if (err) console.log('problem anion insert',err.sqlMessage)   
    })
 });


// update anion script flow
app.put(API_ROUTS.anion_script_flow.put, (req,res)=>{
    const id = req.body.id 
    const symbol = req.body.symbol
    const f1 = req.body.f1
    const f2 = req.body.f2
    const f3 = req.body.f3
    const f4 = req.body.f4

    db.query(API_QUERY.anion_script_flow.put, [ symbol,f1,f2,f3,f4,id], (err, result)=>{
        if (result)  {console.log('PUT_ANION:',result.serverStatus); res.send(`putted item to anion_script - id: ${id}`)}
        if (err) console.log('problem anion put',err.sqlMessage)   
    });
});

// delete anion script flow
app.delete(API_ROUTS.anion_script_flow.delete, (req,res)=>{
    const id = req.params.id
    db.query(API_QUERY.anion_script_flow.delete, id, (err, result)=>{
        if (result)  {console.log('DEL_ANION:',result.serverStatus); res.send(`deleted item from anion_script - id: ${id}`)}
        if (err) console.log('problem anion delete',err.sqlMessage)   
    });
});

//------- anion script flow - end ----------------------



// _______+++++++++++________ cation voice_script start __________+++++++++++______________

//get all
app.get(API_ROUTS.cation_voice_script.get, (req,res)=>{  
    db.query(API_QUERY.cation_voice_script.get, (err,result)=>{
            res.send(result)
            if (err) console.log('error przy pobieraniu voice_script',err.sqlMessage);})
    });

//insert script
app.post(API_ROUTS.cation_voice_script.post, (req,res)=>{
    // console.log(req)
        const id = req.body.id 
        const phase = req.body.phase 
        const f1 = req.body.f1
        const f2 = req.body.f2
        const f3 = req.body.f3
        const f4 = req.body.f4
        const f5 = req.body.f5
        const f6 = req.body.f6
        const f7 = req.body.f7
        const match_id = req.body.match_id
        const script = req.body.script
    
        db.query(API_QUERY.cation_voice_script.add, [id,phase,f1,f2,f3,f4,f5,f6,f7,match_id,script], (err,result)=>{
            if (result) {console.log('INSERT (Voice) STATUS:',result.serverStatus);res.send(`inserted voice_script - id: ${id}`)}
            if (err) console.log('error przy wysylaniu voice_script',err.sqlMessage)})
    });

// aktualizowanie danych w bazie danych
app.put(API_ROUTS.cation_voice_script.put, (req,res)=>{
    // console.log(req)
    const id = req.body.id 
    const phase = req.body.phase 
    const f1 = req.body.f1
    const f2 = req.body.f2
    const f3 = req.body.f3
    const f4 = req.body.f4
    const f5 = req.body.f5
    const f6 = req.body.f6
    const f7 = req.body.f7
    const match_id = req.body.match_id
    const script = req.body.script

    db.query(API_QUERY.cation_voice_script.put, [ phase,f1,f2,f3,f4,f5,f6,f7,match_id,script,id], (err, result)=>{
        if (result) {console.log('UPDATE (Voice) STATUS:',result.serverStatus);res.send(`updated voice_script - id: ${id}`)}
        if (err) console.log('error while updating voice_script',err.sqlMessage)
    });
});



app.delete(API_ROUTS.cation_voice_script.delete, (req,res)=>{
    const id = req.params.id
    db.query(API_QUERY.cation_voice_script.delete, id, (err, result)=>{
    if (result.serverStatus==2)  {console.log('DELETE_RESULT_VOICE:',result.serverStatus); res.send(`deleted item from voice_script - id: ${id}`)}
    if (err) console.log('problem delete voicescript',err.sqlMessage)})
});


//get required script
app.put(API_ROUTS.cation_voice_script.get_required_script, (req,res)=>{
    
    const phase = req.body.phase
    const match_id = req.body.match_id
    
    let CUSTOM_QUERY=`SELECT * FROM voice_script WHERE phase = ${phase} AND match_id LIKE '%,${match_id},%'`;
    console.log('------------------------',CUSTOM_QUERY)
    
    db.query(CUSTOM_QUERY,  (err, result)=>{
        if (result) {console.log('GET required script STATUS:',result.serverStatus);res.send(result)}
        if (err) console.log('error w required script',err.sqlMessage);
});
});

// _______+++++++++++________ cation voice_script end __________+++++++++++______________









// _______+++++++++++________ anion voice_script start __________+++++++++++______________

//get all
app.get(API_ROUTS.anion_voice_script.get, (req,res)=>{  
    db.query(API_QUERY.anion_voice_script.get, (err,result)=>{
            res.send(result)
            if (err) console.log('error przy pobieraniu voice_script',err.sqlMessage);})
    });

//insert script
app.post(API_ROUTS.anion_voice_script.post, (req,res)=>{
    // console.log(req)
        const id = req.body.id 
        const phase = req.body.phase 
        const f6 = req.body.f6
        const f7 = req.body.f7
        const match_id = req.body.match_id
        const script = req.body.script
    
        db.query(API_QUERY.anion_voice_script.add, [id,phase,f6,f7,match_id,script], (err,result)=>{
            if (result) {console.log('INSERT (Voice) STATUS:',result.serverStatus);res.send(`inserted voice_script - id: ${id}`)}
            if (err) console.log('error przy wysylaniu voice_script',err.sqlMessage)})
    });

// aktualizowanie danych w bazie danych
app.put(API_ROUTS.anion_voice_script.put, (req,res)=>{
    // console.log(req)
    const id = req.body.id 
    const phase = req.body.phase 
    const f6 = req.body.f6
    const f7 = req.body.f7
    const match_id = req.body.match_id
    const script = req.body.script

    db.query(API_QUERY.anion_voice_script.put, [ phase,f6,f7,match_id,script,id], (err, result)=>{
        if (result) {console.log('UPDATE (Voice) STATUS:',result.serverStatus);res.send(`updated voice_script - id: ${id}`)}
        if (err) console.log('error while updating voice_script',err.sqlMessage)
    });
});



app.delete(API_ROUTS.anion_voice_script.delete, (req,res)=>{
    const id = req.params.id
    db.query(API_QUERY.anion_voice_script.delete, id, (err, result)=>{
    if (result.serverStatus==2)  {console.log('DELETE_RESULT_VOICE:',result.serverStatus); res.send(`deleted item from voice_script - id: ${id}`)}
    if (err) console.log('problem delete voicescript',err.sqlMessage)})
});


//get required script
app.put(API_ROUTS.anion_voice_script.get_required_script, (req,res)=>{
    
    const phase = req.body.phase
    const match_id = req.body.match_id
    
    let CUSTOM_QUERY=`SELECT * FROM a_voice_script WHERE phase = ${phase} AND match_id LIKE '%,${match_id},%'`;
    console.log('------------------------',CUSTOM_QUERY)
    
    db.query(CUSTOM_QUERY,  (err, result)=>{
        if (result) {console.log('GET required script STATUS:',result.serverStatus);res.send(result)}
        if (err) console.log('error w required script',err.sqlMessage);
});
});

// _______+++++++++++________ anion voice_script end __________+++++++++++______________

