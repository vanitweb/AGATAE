import {extendObservable} from 'mobx';
import {validators} from '../helpers/validate';
class UserStore {
	
	storData = {
		authentification:{
			email: '',
			pass: '',
			
		},
		userData: {
			name: '',
			surname: '',
			email: '',
			phoneNumber: '',
			createPassword: '',
			confirmPassword: '',
			isMember: false,
			isTeacher: false,

			
		},
		
		error: {},
		
	}; 
	constructor() {
        extendObservable(this, this.storData);
    }
	setAuthField = (name, value) => {
		this.authentification[name] = value;
	};
	setUserDataField = (name, value) => {
		this.userData[name] = value;
	};
	validateAuthForm = () => {
		validators.isEmailValid(this.authentification.email);
		validators.isPasswordValid(this.authentification.pass);
		validators.isConfirmedPassword(this.userData.confirmPassword, this.userData.createPassword);
		validators.isCorrectNumber(this.userData.phoneNumber);
	}

};
export {UserStore};
