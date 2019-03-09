import {extendObservable, computed, action} from 'mobx';
import {validators} from '../helpers/validate';
class UserStore {
	
	storData = {
		authentification:{
			email: '',
			password: '',
			
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
   /* @computed
        get isValid() {
        return !this.errors.email && !this.errors.pass;
    };  */
    submitForm(){
    	
    			if (this.validateAuthForm()) {
    				alert("Valid");
    			}else{
    				alert("InValid");
    			}
    }
  
  @action
	validateAuthForm = () => {
		this.error.email = !validators.isEmailValid(this.authentification.email);
		this.error.password = !validators.isPasswordValid(this.authentification.password);
		return !this.error.email && !this.error.password;
		
	};
};
export {UserStore};
