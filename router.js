//配置路由信息
// var fs = require('fs');
var express = require('express');
var router = express.Router();
// var fs = require('fs');
var Student = require('./student');

router.get('/student',function (req,res) {
    Student.find(function (err,students) {
        res.render('index.html',{
            students:students
        });
    })
});

router.get('/students/new',function (req,res) {
    res.render('new.html');
});

router.post('/students/new',function (req,res) {
     new Student(req.body).save(function (err) {
        if(err){
            return res.status(500).send('Server error1');
        }
        res.redirect('/student');
    });
});

router.get('/students/edit',function (req,res) {
    Student.findById(req.query.id.replace(/"/g,''),function (err,student) {
        if(err){
            return res.status(500).send('Server Error2');
        }
        res.render('edit.html',{
            student:student
        })
    });
});

router.post('/students/edit',function (req,res) {
    var id = req.body.id.replace(/"/g,"");
    Student.findByIdAndUpdate(id,req.body,function (err) {
        if(err){
            return res.status(500).send('Server Error3');
        }
        // console.log(req.body);

        res.redirect('/student');
    });
});

router.get('/students/delete',function (req,res) {
    var id = req.query.id.replace(/"/g,"");
    Student.findByIdAndRemove(id,function (err) {
        if(err){
            return res.status(500).send('Server Error4');
        }
        res.redirect('/student');
    });
});

module.exports = router;