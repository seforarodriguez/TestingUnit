var module = module || {};

function sum(one, two) {
  return one + two;
};

function difference(one, two) {
  return one - two;
};

function product(one, two) {
  return one * two;
};

function quotient(one, two) {
  return one / two;
};

var inPut = document.getElementsById('input');

//checking that the it has less than 100 words
function checkWordCount(inputMessage) {
	var input = inputMessage;
	var newInput = input.split(" ");
	if (newInput.length >= 100) {
		console.log("input with less than 100", newInput);
		return false;
	};
};

function duplicateCheck(duplicatedInput) {
	var dividedInput = duplicatedInput.split(" ");
	if (dividedInput[0] === dividedInput[1]) {
		return false;
	};
};

function verifyAlphaNumeric(nonAlphanumericInput) {
	var nonAlphanumbericCharc = "~!@#$%^&*{}_+|\?/><:";
	for (var i = 0; i < nonAlphanumericInput.length; i++) {
		if (nonAlphanumbericCharc.indexOf(nonAlphanumericInput.charAt(i)) !== -1){
			return false;
		}; 
	};
};

checkWordCount(inPut); 
duplicateCheck(inPut);
verifyAlphaNumeric(input); 



module.exports = { sum, difference, product, quotient, checkWordCount, duplicateCheck, verifyAlphaNumeric};
