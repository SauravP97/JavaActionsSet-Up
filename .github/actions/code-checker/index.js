console.log('Hello World');

function checkTestCase(){

	const fs = require('fs')

	var outputString = "";
	var correctOutputString = "";

	fs.readFile('./././Outputs/o1/o1_1.txt', (err, data) => {
    		if (err) throw err;
    		outputString = data.toString();
	})

	fs.readFile('./././correctOutputs/co1/co1_1.txt', (err, data) => {
                if (err) throw err;
		correctOutputString = data.toString();
        })

	outputString = outputString.trim();
	correctOutputString = correctOutputString.trim();

	if(outputString.length != correctOutputString.length){
		return "Test Case Failed";
	}

	var failed = false;
	var i = 0;

	while(i < correctOutputString.length){
		var char1 = correctOutputString.charAt(i);
		var char2 = outputString.charAt(i);
		if(char1 != char2){
			return "Test Case Failed";
		}
		i++;
	}

	return "Test Case Passes";
}

console.log(checkTestCase());
