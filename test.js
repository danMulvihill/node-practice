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

//gets a file from the Web and writes on hard drive.

var https = require('https');

var photoLoc = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Turdus-migratorius-002.jpg/791px-Turdus-migratorius-002.jpg"

https.get(photoLoc, function(response){
    response.pipe(fs.createWriteStream(__dirname+"/bird.jpg"));
});