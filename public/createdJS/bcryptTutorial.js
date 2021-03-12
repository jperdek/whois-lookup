var bcryptjs = require("bcryptjs");

convertBCrypt= function(salt, inputText) {
	//const salt1 = bcryptjs.genSaltSync(salt);
	return bcryptjs.hash(inputText, salt);
}

module.exports = {
	convertBCrypt: convertBCrypt
}
