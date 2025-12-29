const fs = require('fs');

fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
    if (err) 
        return console.log(err);
    console.log('Wrote Hello World in file helloworld.txt, just check it');
});