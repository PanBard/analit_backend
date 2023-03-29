export const API_QUERY = {

    "cation_script_flow" : {
        "get" : "SELECT * FROM 	script_flow",
        "add" : "INSERT INTO script_flow (id,symbol,f1,f2,f3,f4,f5,f6,f7) VALUES (?,?,?,?,?,?,?,?,?)",
        "put" : "UPDATE script_flow SET symbol=?,f1=?,f2=?,f3=?,f4=?,f5=?,f6=?,f7=? WHERE id=?",
        "delete" : "DELETE FROM script_flow WHERE id=?"
    },

    "anion_script_flow" : {
        "get" : "SELECT * FROM 	a_script_flow",
        "add" : "INSERT INTO a_script_flow (id,symbol,f1,f2,f3,f4) VALUES (?,?,?,?,?,?)",
        "put" : "UPDATE a_script_flow SET symbol=?,f1=?,f2=?,f3=?,f4=? WHERE id=?",
        "delete" : "DELETE FROM a_script_flow WHERE id=?"
    },

    "ultimate_analysis" : {
        "get" : "SELECT id,name,f1,f2,f3,f4,f5,f6,f7, CONVERT(img1 USING utf8) as img1, CONVERT(img2 USING utf8) as img2, CONVERT(img3 USING utf8) as img3, CONVERT(img4 USING utf8) as img4, CONVERT(img5 USING utf8) as img5, CONVERT(img6 USING utf8) as img6, CONVERT(img7 USING utf8) as img7, end,result FROM ultimate_analysis",
        "add" : "INSERT INTO ultimate_analysis (id,name,f1,f2,f3,f4,f5,f6,f7,img1,img2,img3,img4,img5,img6,img7,end) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        "put" : "UPDATE ultimate_analysis SET name=?,f1=?,f2=?,f3=?,f4=?,f5=?,f6=?,f7=?,img1=?,img2=?,img3=?,img4=?,img5=?,img6=?,img7=?,end=? WHERE id=?",
        "delete" : "DELETE FROM ultimate_analysis WHERE id=?",
        "set_end" : "UPDATE ultimate_analysis SET end=? WHERE id=?",
        "set_result" : "UPDATE ultimate_analysis SET result=? WHERE id=?"
    },

     "cation_voice_script" : {
        "get" : "SELECT * FROM voice_script",
        "add" : "INSERT INTO voice_script (id,phase,f1,f2,f3,f4,f5,f6,f7,match_id,script) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
        "put" : "UPDATE voice_script SET phase=?,f1=?,f2=?,f3=?,f4=?,f5=?,f6=?,f7=?,match_id=?,script=? WHERE id=?",
        "delete" : "DELETE FROM voice_script WHERE id=?"
    },

    "anion_voice_script" : {
        "get" : "SELECT * FROM a_voice_script",
        "add" : "INSERT INTO a_voice_script (id,phase,f6,f7,match_id,script) VALUES (?,?,?,?,?,?)",
        "put" : "UPDATE a_voice_script SET phase=?,f6=?,f7=?,match_id=?,script=? WHERE id=?",
        "delete" : "DELETE FROM a_voice_script WHERE id=?"
    },
    
}