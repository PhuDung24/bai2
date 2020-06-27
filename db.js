var low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync'); // su dung databae lowdb
var adapter = new FileSync('db.json');
db = low(adapter);
db.defaults({ users : []}).write(	);
var shortid = require('shortid');

module.exports=db;