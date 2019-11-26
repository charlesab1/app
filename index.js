const express = require('express'); 
const app = new express();
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.json();
const mongoose = require('mongoose');
mongoose.connect( "mongodb+srv://charles:Mcsa8598@cluster0-0ehbv.mongodb.net/test?retryWrites=true&w=majority",  
{ useUnifiedTopology: true, useNewUrlParser: true } );

const cors = require('cors');
app.use(cors());

app.use(express.static(__dirname + '/dist/app'));

app.get('/',(req,res) => { 
	res.sendFile(__dirname + '/dist/app/index.html'); 
});




const Student = mongoose.model('student',{
    name: String,
    password: String,
	accounttype: String
});

app.get('/student', (req, res) => {
    Student.find({},(err, data) => {
    if(err) res.json({"msg":"Invalid Request"});
        res.json(data);
    });
});

app.post('/student', urlEncoded, (req, res) => {
    var student = new Student({
        name: req.body.name,
        password: req.body.password,
		accounttype: req.body.accounttype
    });
    student.save((err, data) => {
        if(err) res.json({"msg":"Invalid Request"});
        res.json(data);
    });
});

app.put('/student/:id', urlEncoded, (req, res) => {
    Student.updateOne({_id:req.params.id},{
        name: req.body.name,
        password: req.body.password,
		accounttype: req.body.accounttype
    }, (err, data) => {
        if(err) res.json({msg:'Invalid request'});
            res.json(data);
    });
});

app.delete('/student/:id', (req, res) => {
    Student.deleteOne({_id:req.params.id},(err,data) => {
    if(err) res.json({msg:'Invalid Request'});
        res.json(data);
    });
});




const Subject = mongoose.model('subject',{
    subjectname: String,
	day: String,
	time: String,
	room: String,
	unit: String
});

app.get('/subject', (req, res) => {
    Subject.find({},(err, data) => {
    if(err) res.json({"msg":"Invalid Request"});
        res.json(data);
    });
});

app.post('/subject', urlEncoded, (req, res) => {
    var subject = new Subject({
        subjectname: req.body.subjectname,
		day: req.body.day,
		time: req.body.time,
		room: req.body.room,
		unit: req.body.unit
    });
    subject.save((err, data) => {
        if(err) res.json({"msg":"Invalid Request"});
        res.json(data);
    });
});

app.put('/subject/:id', urlEncoded, (req, res) => {
    Subject.updateOne({_id:req.params.id},{
        subjectname: req.body.subjectname,
		day: req.body.day,
		time: req.body.time,
		room: req.body.room,
		unit: req.body.unit
		
    }, (err, data) => {
        if(err) res.json({msg:'Invalid request'});
            res.json(data);
    });
});

app.delete('/subject/:id', (req, res) => {
    Subject.deleteOne({_id:req.params.id},(err,data) => {
    if(err) res.json({msg:'Invalid Request'});
        res.json(data);
    });
});









const Register = mongoose.model('register',{
    stud_id: String,
	stud_type: String,
	name: String,
	status: String,
	college: String,
	course: String,
	yr_section: String,
	age: String,
	gender: String,
	subjectcode: String,
	day: String,
	time: String,
	room: String,
	unit: String,
	subjectcode1: String, day1: String, time1: String, room1: String, unit1: String,
	subjectcode2: String, day2: String, time2: String, room2: String, unit2: String,
	subjectcode3: String, day3: String, time3: String, room3: String, unit3: String,
	subjectcode4: String, day4: String, time4: String, room4: String, unit4: String
});

app.get('/register', (req, res) => {
    Register.find({},(err, data) => {
    if(err) res.json({"msg":"Invalid Request"});
        res.json(data);
    });
});

app.post('/register', urlEncoded, (req, res) => {
    var register = new Register({
        stud_id: req.body.stud_id,
		stud_type: req.body.stud_type,
		name: req.body.name,
		status: req.body.status,
		college: req.body.college,
		course: req.body.course,
		yr_section: req.body.yr_section,
		age: req.body.age,
		gender: req.body.gender,
		subjectcode: req.body.subjectcode,
		day: req.body.day,
		time: req.body.time,
		room: req.body.room,
		unit: req.body.unit,
		subjectcode1: req.body.subjectcode1, day1: req.body.day1, time1: req.body.time1, room1: req.body.room1, unit1: req.body.unit1,
		subjectcode2: req.body.subjectcode2, day2: req.body.day2, time2: req.body.time2, room2: req.body.room2, unit2: req.body.unit2,
		subjectcode3: req.body.subjectcode3, day3: req.body.day3, time3: req.body.time3, room3: req.body.room3, unit3: req.body.unit3,
		subjectcode4: req.body.subjectcode4, day4: req.body.day4, time4: req.body.time4, room4: req.body.room4, unit4: req.body.unit4
		
		
    });
    register.save((err, data) => {
        if(err) res.json({"msg":"Invalid Request"});
        res.json(data);
    });
});

app.put('/register/:id', urlEncoded, (req, res) => {
    Register.updateOne({_id:req.params.id},{
        stud_id: req.body.stud_id,
		stud_type: req.body.stud_type,
		name: req.body.name,
		status: req.body.status,
		college: req.body.college,
		course: req.body.course,
		yr_section: req.body.yr_section,
		age: req.body.age,
		gender: req.body.gender,
		subjectcode: req.body.subjectcode,
		day: req.body.day,
		time: req.body.time,
		room: req.body.room,
		unit: req.body.unit,
		subjectcode1: req.body.subjectcode1, day1: req.body.day1, time1: req.body.time1, room1: req.body.room1, unit1: req.body.unit1,
		subjectcode2: req.body.subjectcode2, day2: req.body.day2, time2: req.body.time2, room2: req.body.room2, unit2: req.body.unit2,
		subjectcode3: req.body.subjectcode3, day3: req.body.day3, time3: req.body.time3, room3: req.body.room3, unit3: req.body.unit3,
		subjectcode4: req.body.subjectcode4, day4: req.body.day4, time4: req.body.time4, room4: req.body.room4, unit4: req.body.unit4
		
    }, (err, data) => {
        if(err) res.json({msg:'Invalid request'});
            res.json(data);
    });
});

app.delete('/register/:id', (req, res) => {
    Register.deleteOne({_id:req.params.id},(err,data) => {
    if(err) res.json({msg:'Invalid Request'});
        res.json(data);
    });
});




const PORT = process.env.PORT || 80;

app.listen(PORT, () => { 
	console.log(`Server running at port ${PORT}`); 
});


