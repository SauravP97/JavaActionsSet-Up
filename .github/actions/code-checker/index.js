console.log('Hello World');

function cheeckCodeCorrectness(){
	const fs = require('fs');
	var i = 1;
	while(true){
		var j = 1;
		console.log('Checking For Problem '+i);
		while(true){
			var opFolder = "o"+i;
			var opFile = opFolder+"_"+j+".txt";
			var copFolder = "co"+i;
			var copFile = copFolder+"_"+j+".txt";

			var outputString = '';
			var correctOutputString = '';

			fs.readFile('./././Outputs/'+opFolder+'/'+opFile, (err, data) => {
                		if (err){
					console.log(err);
                                        return;
				}
                		outputString = data.toString();
        		})
			fs.readFile('./././correctOutputs/'+copFolder+'/'+copFile, (err, data) => {
                		if (err){
					console.log(err);
					return;
				}
                		correctOutputString = data.toString();
        		})

			if(correctOutputString.length == 0){
				console.log('died');
				return;
			}

			var result = checkTestCase(outputString, correctOutputString);
			console.log("Test Case "+j+" : "+result);
			j++;
		}
		i++;
	}
}

function checkTestCase(outputString, correctOutputString){

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

	return "Test Case Passed";
}

cheeckCodeCorrectness();
