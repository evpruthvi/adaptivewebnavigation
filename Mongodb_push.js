var csv = require('fast-csv')
var fs = require('fs')
var stream = fs.createReadStream("Book1.xlsx");

var csvStream = csv()
    .on("data", function(data){
        console.log(data);
    })
    .on("end", function(){
        console.log("done");
    });

stream.pipe(csvStream);















// const mongo = require('mongodb');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://harsha:1234@ds113736.mlab.com:13736/stack_overflow');
//
// var dataSchema = mongoose.Schema({
//     user_id:{
//         type:String,
//         index: true
//     },
//     data_type:{type:String},
//     title:{type:String},
//     content:{type:String},
//     timestamp:{type:Number},
//     vote:{type:Number},
//     reputation:{type:Number},
//     accept_rate:{type:Number},
//     tag:{type:[]}
// });
//
// var mongooseData = mongoose.model('data', dataSchema);
//
// var tags = ['asdf','we','e']
//
//
// var newItem = new mongooseData({
//     user_id:'test',
//     data_type:'asdf',
//     title:'asdf',
//     content:'asdfas',
//     timestamp:1419984103,
//     vote:234,
//     reputation:2134,
//     accept_rate:23,
//     tag:tags
// }).save(function(err,newLog){
//     if(err) throw err;
// });
