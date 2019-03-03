const validators = {
	isEmailValid: function(value) {
		return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
	},
	isPasswordValid: function(value) {
		return value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{9,})$/i);
	},
	isConfirmedPasswordValid: function(value, pass) {
		return value === pass;
	},
	/*isCorrectNumber: function(value) {
		return value.match(^\+[1-9]{1}[0-9]{7,11}$);
	},*/
};

export {validators};

