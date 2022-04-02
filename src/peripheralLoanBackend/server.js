require("dotenv").config()
const express = require("express")
const ibmdb = require("ibm_db");

const app = express()

const port = process.env.PORT
const host = process.env.DB_HOST
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const dbname = process.env.DB_DATABASE
const dbport = process.env.DB_PORT

app.listen(port, 
    ()=> console.log(`Server Started on port ${port}...`))



let cn = "DATABASE="+dbname+";HOSTNAME="+host+";PORT="+dbport+";PROTOCOL=TCPIP;UID="+user+";PWD="+password+";Security=SSL;SSLServerCertificate=ssl_certificate.arm;";

ibmdb.open(cn, function (err,conn) {
    console.log("querying")
    if (err){
        //return response.json({success:-1, message:err});
        console.log(err)
    }
    conn.query("SELECT * FROM user;", function (err, data) {
        if (err){
            //return response.json({success:-2, message:err});
            console.log(err)
        }
        else{
            console.log(data)
      }
    })
});