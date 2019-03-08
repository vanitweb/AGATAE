import {extendObservable, computed} from 'mobx';
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
    @computed
        get isValid() {
        return !this.errors.email && !this.errors.pass;
    };  
  
  
	validateAuthForm = () => {
		this.error.email = !validators.isEmailValid(this.authentification.email);
		this.error.pass = !validators.isPasswordValid(this.authentification.pass);
		
	};
};
export {UserStore};
