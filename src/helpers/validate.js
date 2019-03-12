
const validators = {
    isEmailValid: function(value) {
<<<<<<< HEAD
=======
        debugger;
>>>>>>> 96c5e8a891d15e9ded79bb4091883907681ab577
        return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    },
    isPasswordValid: function(value) {

<<<<<<< HEAD
        return value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i);
    },
    isConfirmedPasswordValid: function(value, pass) {
        return value === pass;
    },
    /*isCorrectNumber: function(value) {
        return value.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
    },*/
    isCorrectName: function(value) {
        return value;
    }
    
=======
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
    }
	
>>>>>>> 96c5e8a891d15e9ded79bb4091883907681ab577
};

export {validators};

