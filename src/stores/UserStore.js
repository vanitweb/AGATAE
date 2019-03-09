import {extendObservable, computed, action} from 'mobx';
import {validators} from '../helpers/validate';
import {Cookies} from './../helpers/Cookies';
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
    	if(this.validateAuthForm()){
			 for(let teacher in teachers){
				 if((this.authentification.email===teacher.email)&&(this.authentification.password===teacher.password)){
					 setCookie(teacher.email, teacher.password)
				 }
				 else alert("sxal mutqayin tvyalner")
			 }
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
