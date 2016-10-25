//
//1 - Takes in one parameter from the command line, the name of a country. Note:
//command line arguments can be read from the global array process.argv
//2 - Reads and parses the countries.json file.
//Note: you must use readFile and not readFileSync.
//3 - Outputs information about that specific country.
// Must be in the following format: Country: Top Level Domain:

var fs = require ('fs');

 // async version

 // var parsedCountry=JSON.parse(fs.readFileSync('countries.json'));
 //
 //
 //
 //
 //   for(var i = 0; i < parsedCountry.length; i++) {
 //      if (parsedCountry[i].name === process.argv[2]) {
 //         console.log(parsedCountry[i]);
 //
 //      }
 //   }

 // sync version

 fs.readFile('countries.json', function(error,data){
    if (error){
      throw error;
   }
   var parsedCountry = JSON.parse(data);

   for (var i = 0 ; i < parsedCountry.length; i++){
     if( parsedCountry[i].name === process.argv[2]){
        console.log(parsedCountry[i]);
     }
   }
});
