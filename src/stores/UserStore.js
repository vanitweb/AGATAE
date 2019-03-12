import {extendObservable, computed, action} from 'mobx';
import {validators} from '../helpers/validate';
import {Cookies} from '../helpers/cookies';
import {teachers} from '../data/data'
class UserStore {
	
	storData = {
		authentification:{
			email: '',
			password: '',
			ValidMail: false,
			
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
		this.authentification.ValidMail = true;
    };
  
  @action
	validateAuthForm = () => {
		this.error.email = !validators.isEmailValid(this.authentification.email);
		this.error.password = !validators.isPasswordValid(this.authentification.password);
		return !this.error.email && !this.error.password;
		
	};
	
	 @action
	 logForm =() => {
	for(let teacher in teachers){
		debugger
		 if((authentification.email===teacher.email)&&(authentification.password===teacher.password)){
			debugger
			 setCookie(teacher.email, teacher.password)
			
		 }
		 
		 else {
			 debugger
			 alert("sxal mutqayin tvyalner");
		 }
		 
	}
};
};
export {UserStore};
