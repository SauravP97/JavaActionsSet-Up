console.log('Hello World');
	const fs = require('fs')

	fs.readFile('../../../Problems/p1.txt', (err, data) => {
    		if (err) throw err;
    		console.log(data.toString());
	})
