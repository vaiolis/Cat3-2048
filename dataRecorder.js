//var cluster = require('cluster');
//var numCPUs = require('os').cpus().length;
var Spreadsheet = require('edit-google-spreadsheet');
//var reloadingModule=require("./reloadingModule.js");
var fileFetcher=require("./fileFetcher.js");

var http = require('http');
var url=require('url');






  // Worker processes have a http server.
      
  http.createServer(function (req, res) {

var url_parts = url.parse(req.url, true);
var query = url_parts.query;
var rowNum=query.row;
var colNum=query.col;
Spreadsheet.load({
  debug: true,
  username: 'mingyichen95@gmail.com',
  password: 'myc95410',
//  spreadsheetName: 'Cat Data',
 spreadsheetId: '0AlauiLYq1wd-dFZyZC1RVVdsMmh1UW5QT2RHSG9yRXc',
  worksheetName: 'Sheet1'
  
//   worksheetId: '0'

}, function run(err, spreadsheet) {
  if(err) throw err;

  var oldArray=fileFetcher.sheet; 
  var value=oldArray[rowNum][colNum];
  value++;
  var newArray={};
  newArray[rowNum]={};
  newArray[rowNum][colNum]=value;
  spreadsheet.add(newArray);
  
  spreadsheet.send(function(err) {
    if(err) throw err;

//       console.log("Found rows:", );
//    console.log("updated file");
   fileFetcher=require.reload("./fileFetcher.js");
  
  });
  

  
});





}).listen(1599);






