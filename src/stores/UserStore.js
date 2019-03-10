import {extendObservable, computed, action} from 'mobx';
import {validators} from '../helpers/validate';
import {setCookie} from '../helpers/cookies';
import {teachers} from '../data/data'
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
	
    submitForm(){
		debugger
    	if(this.validateAuthForm()){
			debugger
		 this.logForm();
		}
		else alert("voch korekt login kam password");
    };
	
	logTeachers = (teacher) => {
		debugger
		return((this.authentification.email===teacher.email)&&(this.authentification.password===teacher.password))
	}
	setCookies = (teacher) => {
		debugger
		setCookie(this.authentification.email, this.authentification.password);
	}
  
  @action
	validateAuthForm = () => {
		this.error.email = !validators.isEmailValid(this.authentification.email);
		this.error.password = !validators.isPasswordValid(this.authentification.password);
		return !this.error.email && !this.error.password;
		
	};
	
	 @action
	logForm =() => {
		debugger
		let y = teachers.find(this.logTeachers);
		debugger
		if(y === undefined) {
			alert("sxal mutqayin tvyalner")
		}
		
		else {
			debugger
			setCookie(this.authentification.email, this.authentification.password);
		}
	 }
		 
 
};
export {UserStore};
