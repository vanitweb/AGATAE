const validators = {
	isEmailValid: function(value) {
		debugger;
		return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
	},
	isPasswordValid: function(value) {

		debugger;
		return value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i);
	},
	isConfirmedPasswordValid: function(value, pass) {
		return value === pass;
	},
	/*isCorrectNumber: function(value) {
		return value.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
	},*/
};

export {validators};

