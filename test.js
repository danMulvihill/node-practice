console.log("2+5.6: "+2+5);
console.log("\tParseInt: "+parseInt(2+5.6));
console.log("\t\tParseFloat: "+parseFloat(2+5.6));

//create a file:

var fs = require('fs');
fs.writeFile(__dirname+"/index.html","<h2>Hello HTML</h2>", function(error){
    if(error){
        return console.log(error);
    }else{
        return console.log("File created");
    }
});