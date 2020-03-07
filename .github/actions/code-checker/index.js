console.log('Hello World');
	const fs = require('fs')

	fs.readFile('./././Outputs/o1/o1_1.txt', (err, data) => {
    		if (err) throw err;
    		console.log(data.toString());
	})

	fs.readFile('./././correctOutputs/co1/co1_1.txt', (err, data) => {
                if (err) throw err;
                console.log(data.toString());
        })

