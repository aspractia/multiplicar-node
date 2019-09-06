const fs = require('fs');


let base = 5;
let data = "";

for (let i = 1; i <= 10; i++) {
    data += base + " x " + i + " = " + (base * i) + "\n";
}


let callback = (err) => {

    if (err)
        throw err;

    console.log("El archivo ha sido creado");

}

fs.writeFile('tabla.txt', data, 'utf8', callback);