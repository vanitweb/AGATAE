
const validators = {
	isEmailValid: function(value) {
		debugger;
		return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
	},
	isPasswordValid: function(value) {

		debugger;
		return value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i);
	},
	
	isCorrectName: function(value) {
    	debugger;
    	return value.match(/([A-Z])\w+/);
    },
    isCorrectSurName: function(value) {
    	return value.match(/([A-Z])\w+/);

    },
    isCorrectPhoneNumber: function(value) {
    	return value.match(/^([+]?[0-9\s-\(\)]{3,25})*$/);
    },

    isCorrectPassword: function(value) {
    	const usersPassword = value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i);
    	return usersPassword;
    },
    isConfirmedPasswordValid: function(value) {
		return value === usersPassword;
	},
	
};

export {validators};

