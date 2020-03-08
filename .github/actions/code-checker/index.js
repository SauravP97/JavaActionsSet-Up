
function checkCodeCorrectness(i, j){

	const fs = require('fs');

	var opFolder = "o"+i;
	var opFile = opFolder+"_"+j+".txt";
	var copFolder = "co"+i;
	var copFile = copFolder+"_"+j+".txt";

	fs.readdir('./../../../Outputs/'+opFolder, (err, data) => {
	if(err){
		console.log(err);
		return;
	}
	else{
		if(j==1){
			console.log('Running for Problem '+i);
		}
		fs.readFile('./../../../Outputs/'+opFolder+'/'+opFile, (err, data) => {
			if(err){
				return;
			}
			else{
				var outputString = data.toString();;
				fs.readFile('./../../../correctOutputs/'+copFolder+'/'+copFile, (err1, data1) => {
					if(err1){
						checkCodeCorrectness(i+1,1);
					}
					else{
						var correctOutputString = data1.toString();
						var response = checkTestCase(outputString, correctOutputString);
						console.log("Test Case "+j+" : "+response);
						checkCodeCorrectness(i,j+1);
					}
				})
			}
		})
	}
	})
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

checkCodeCorrectness(1,1);
