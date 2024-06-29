const express = require("express");
const myrouter = express.Router();
const connect = require("../db/dbConnect");

myrouter.get("/tasks", function (req, res) {
  connect.query("select * from tasks", function (err, data, fields) {
    if (err) {
      res.send(err);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

myrouter.get("/tasks/:id", function (req, res) {
  connect.query(
    "select * from tasks where id=?",
    [req.params.id],
    function (err, data, fields) {
      if (err) {
        res.send(err);
      } else {
        res.json(data[0]);
      }
    }
  );
});

myrouter.post("/tasks", function (req, res) {
  connect.query(
    "insert into tasks values(?,?,?)",
    [req.body.id, req.body.details, req.body.status],
    function (err, data, fields) {
        if(err)
            {   
                res.send(err)
            }
        else{
            res.json(data)
        }
    }
  );
});

myrouter.put("/tasks/:id",function(req,res){
    connect.query("update tasks set status=?,details =? where id=?",[req.body.status,req.body.details,req.params.id],function(err,data,fields){
        if(err){
            res.send(err)
        }
        else{
            res.status(200).send(data)

        }
    })
})


module.exports = myrouter;
