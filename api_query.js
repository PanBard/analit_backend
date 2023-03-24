export const API_QUERY = {

    "images" : {
        "get" : "SELECT id, CONVERT(img1 USING utf8) as img1, CONVERT(img2 USING utf8) as img2, CONVERT(img3 USING utf8) as img3, CONVERT(img4 USING utf8) as img4, CONVERT(img5 USING utf8) as img5, CONVERT(img6 USING utf8) as img6, CONVERT(img7 USING utf8) as img7 FROM images",
        "add" : "INSERT INTO images (id,img1,img2,img3,img4,img5,img6,img7) VALUES (?,?,?,?,?,?,?,?)",
        "put" : "UPDATE images SET img1=?,img2=?,img3=?,img4=?,img5=?,img6=?,img7=? WHERE id=?",
        "delete" : "DELETE FROM images WHERE id=?"
    },
    "ultimate_analysis" : {
        "get" : "SELECT id,name,f1,f2,f3,f4,f5,f6,f7, CONVERT(img1 USING utf8) as img1, CONVERT(img2 USING utf8) as img2, CONVERT(img3 USING utf8) as img3, CONVERT(img4 USING utf8) as img4, CONVERT(img5 USING utf8) as img5, CONVERT(img6 USING utf8) as img6, CONVERT(img7 USING utf8) as img7, end FROM ultimate_analysis",
        "add" : "INSERT INTO ultimate_analysis (id,name,f1,f2,f3,f4,f5,f6,f7,img1,img2,img3,img4,img5,img6,img7,end) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        "put" : "UPDATE ultimate_analysis SET name=?,f1=?,f2=?,f3=?,f4=?,f5=?,f6=?,f7=?,img1=?,img2=?,img3=?,img4=?,img5=?,img6=?,img7=?,end=? WHERE id=?",
        "delete" : "DELETE FROM ultimate_analysis WHERE id=?"
    }
    
}