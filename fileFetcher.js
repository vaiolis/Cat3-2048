var Spreadsheet = require('edit-google-spreadsheet');


   
Spreadsheet.load({
  debug: true,
  username: 'mingyichen95@gmail.com',
  password: '******',
 spreadsheetId: '0AlauiLYq1wd-dFZyZC1RVVdsMmh1UW5QT2RHSG9yRXc',
  worksheetName: 'Sheet1'
}, 
function run(err, spreadsheet) {
 if(err) throw err;



  spreadsheet.receive({getValues:true},function(err, rows, info) {
      if(err) throw err;
      var number;
      module.exports.sheet=rows;
//      number.toString();
//      console.log("Found rows:", rows);
     
  
//      

      // Found rows: { '3': { '5': 'hello!' } }
    });


//queryId=JSON.stringify(queryId);


  spreadsheet.send(function(err) {
    if(err) throw err;

//       console.log("Found rows:", );
//    console.log("got file");
//  });
  

  
});
});

