export const routs =()=> {
    return 'zwrocone'
}


export const test = () => {
    return (app.get("/api/testy", (req,res)=>{ //req - require , res - response
        const sqlINSERT =  "CREATE TABLE IF NOT EXISTS custoko (name VARCHAR(255), address VARCHAR(255))"
                db.query(sqlINSERT, (err,result)=>{
                    if(err) console.log('error: ',err)
                    if(result) {
                        console.log('rezultat: ',result)
                        res.send('API respond:' + 'Create tabela')}
                    })
                
    }))

}

