require("dotenv").config()
const express = require("express");
const ibmdb = require("ibm_db");
const async = require('async');
const cors = require('cors');

const bodyParser=require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT
const host = process.env.DB_HOST
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const dbname = process.env.DB_DATABASE
const dbport = process.env.DB_PORT


app.listen(port, 
    ()=> console.log(`Server Started on port ${port}...`))



let cn = "DATABASE="+dbname+";HOSTNAME="+host+";PORT="+dbport+";PROTOCOL=TCPIP;UID="+user+";PWD="+password+";Security=SSL;SSLServerCertificate=DigiCertGlobalRootCA.arm;";


ibmdb.open(cn, function (err,conn) {
    console.log("querying")
    if (err){
        //return response.json({success:-1, message:err});
        console.log("1")
        console.log(err)
    }
    conn.query("SELECT * FROM QGJ93840.USER ", function (err, data) {
        if (err){
            //return response.json({success:-2, message:err});
            console.log("2")
            console.log(err)
        }
        else{
            console.log("3")
            console.log(data)
      }
    })
});


app.get('/checkLogin', function(request, response){
    const { username, password } = request.query;
    ibmdb.open(cn, async function (err,conn) {
        console.log("querying")
        if (err){
            //return response.json({success:-1, message:err});
            console.log(err)
            return response.json({success:-1, message:err});
        } else {
            conn.query(`SELECT * FROM QGJ93840.USER WHERE USERNAME = '${username}' and PASSWORD = '${password}'`, function (err, data) {
            if (err){
                console.log(err);
                return response.json({success:-2, message:err});
            }
            else{
                console.log(data)
                conn.close(function () {
                    return response.json({success:1, message:'Data Received!', data:data});
                });
            }
          });
        }
    });
});

app.get('/users', function(request, response){
    ibmdb.open(cn, async function (err,conn) {
        console.log("querying")
        if (err){
            //return response.json({success:-1, message:err});
            console.log("1")
            console.log(err)
            return response.json({success:-1, message:err});
        } else {
            conn.query(`SELECT * FROM QGJ93840.USER`, function (err, data) {
            if (err){
                console.log(err);
                return response.json({success:-2, message:err});
            }
            else{
                conn.close(function () {
                    console.log('done');
                    return response.json({success:1, message:'Data Received!', data:data});
                });
            }
          });
        }
    });
});

app.post('/newPeripheral', function(request, response){
    ibmdb.open(cn, async function (err,conn) {
        console.log("posting")
        if (err){
            console.log(err)
            return response.json({success:-1, message:err});
        } else {
            var params = request.body['device_params']
            var q = "INSERT INTO QGJ93840.DEVICES" +
                    " VALUES (DEFAULT, '" + params['device_type'] + "', '" + params['brand'] + "', '" +
                    params['model'] + "', " + params['serial_number'] + ", DEFAULT, DEFAULT, DEFAULT, DEFAULT )";
            console.log(q);
            conn.query(q, function (err, data) {
            if (err){
                console.log(err);
                return response.json({success:-2, message:err});
            }
            else{
                conn.close(function () {
                    console.log('done');
                    return response.json({success:1, message:'Data entered!'});
                });
            
            }
          });
        }
    });
});

app.post('/getDevices', function(request, response){
    var params = request.body
    var limit = params['limit']
    var offset = (params['page']-1) * limit
    // var limit = 10
    // var offset = (1-1) * limit
    ibmdb.open(cn, async function (err,conn) {
        console.log("querying")
        if (err){
            //return response.json({success:-1, message:err});
            console.log("1")
            console.log(err)
            return response.json({success:-1, message:err});
        } else {
            conn.query("SELECT * FROM QGJ93840.DEVICES LIMIT "+ offset + "," + limit, function (err, data) {
                if (err){
                console.log(err);
                return response.json({success:-2, message:err});
            }
            else{
                conn.close(function () {
                    console.log("Using query: SELECT * FROM QGJ93840.DEVICES LIMIT "+ offset + "," + limit)
                    console.log('done');
                    return response.json({success:1, message:'Data Received!', data:data});
                });
            }
          });
        }
    });
});

app.get('/countDevices', function(request, response){
    ibmdb.open(cn, async function (err,conn) {
        console.log("querying")
        if (err){
            //return response.json({success:-1, message:err});
            console.log("1")
            console.log(err)
            return response.json({success:-1, message:err});
        } else {
            conn.query("SELECT COUNT(*) FROM QGJ93840.DEVICES", function (err, data) {
                if (err){
                console.log(err);
                return response.json({success:-2, message:err});
            }
            else{
                conn.close(function () {
                    console.log('done');
                    console.log(data)
                    return response.json({success:1, message:'Data Received!', data:{"count": data[0]["1"]}});
                });
            }
          });
        }
    });
});