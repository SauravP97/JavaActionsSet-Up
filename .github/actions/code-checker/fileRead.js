const fs = require('fs');

fs.readFile('./../../../Outputs/o1/o1_1.txt', (err, data) => {
                                if (err) throw err;
                                var outputString = data.toString();
                                console.log(outputString);
                        })

console.log("read 1 finished");

                        fs.readFile('./../../../correctOutputs/co1/co1_1.txt', (err, data) => {
                                if (err) throw err;
                                var correctOutputString = data.toString();
                                console.log( correctOutputString);
                        })


console.log("read 2 finished");
