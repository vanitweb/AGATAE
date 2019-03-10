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
    	if(this.validateAuthForm()){
		    this.logForm();
		}
		else alert("Ոչ կոռեկտ էլեկտրոնային հասցե կամ գաղտնաբառ");
    };
	
	logTeachers = (teacher) => {
		debugger
		return((this.authentification.email===teacher.email)&&(this.authentification.password===teacher.password))
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
			alert("Մուտքային տվյալերը սխալ են")
		}
		else {
			debugger
			setCookie(this.authentification.email, this.authentification.password);
		}
	}
};
export {UserStore};
