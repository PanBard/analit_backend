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

    "anion_analysis" : {
        "get" : "SELECT id,name,f1,f2,f3,f4, CONVERT(img1 USING utf8) as img1, CONVERT(img2 USING utf8) as img2, CONVERT(img3 USING utf8) as img3, CONVERT(img4 USING utf8) as img4, end,result FROM anion_analysis",
        "add" : "INSERT INTO anion_analysis (id,name,f1,f2,f3,f4,img1,img2,img3,img4,end) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
        "put" : "UPDATE ultimate_analysis SET name=?,f1=?,f2=?,f3=?,f4=?,img1=?,img2=?,img3=?,img4=?,end=? WHERE id=?",
        "delete" : "DELETE FROM anion_analysis WHERE id=?",
        "set_end" : "UPDATE anion_analysis SET end=? WHERE id=?",
        "set_result" : "UPDATE anion_analysis SET result=? WHERE id=?"
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
    
    "test_images" : {
        "get" : "SELECT id, CONVERT(image USING utf8) as img, label FROM test_images",
        "add" : "INSERT INTO test_images (id,image,label) VALUES (?,?,?)",
        "put" : "UPDATE test_images SET image=?,label=? WHERE id=?",
        "delete" : "DELETE FROM test_images WHERE id=?"
    },

    "cation_analysis_texts" : {
        "get" : "SELECT * FROM 	c_analysis_texts",
        "add" : "INSERT INTO c_analysis_texts (id,f1,f2,f3,f4,f5,f6,f7) VALUES (?,?,?,?,?,?,?,?)",
        "put" : "UPDATE c_analysis_texts SET f1=?,f2=?,f3=?,f4=?,f5=?,f6=?,f7=? WHERE id=?",
        "delete" : "DELETE FROM c_analysis_texts WHERE id=?"
    },

    "anion_analysis_texts" : {
        "get" : "SELECT * FROM 	a_analysis_texts",
        "add" : "INSERT INTO a_analysis_texts (id,f1,f2,f3,f4) VALUES (?,?,?,?,?)",
        "put" : "UPDATE a_analysis_texts SET f1=?,f2=?,f3=?,f4=? WHERE id=?",
        "delete" : "DELETE FROM a_analysis_texts WHERE id=?"
    },

    "all_chat_messages" : {
        "get_all" : "SELECT * FROM 	all_chat_messages",
        "get_one_conversation" : "SELECT * FROM all_chat_messages WHERE chat_id=?",
        "add" : "INSERT INTO all_chat_messages (chat_id,message,ion,author,date) VALUES (?,?,?,?,now())",
        "delete" : "DELETE FROM all_chat_messages WHERE id=?",
        "mark_as_read" : "UPDATE all_chat_messages SET mark=? WHERE id=?",
    },

}