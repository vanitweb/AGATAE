import {extendObservable, action} from 'mobx';

import {validators} from '../helpers/validate';
import {setCookie} from '../helpers/cookies';
import {teachers} from '../data/data';

class UserStore {    
    storData = {
        authentification:{
            email: '',
            password: ''            
        },
        userData: {
            name: '',
            surname: '',
            email: '',
            phoneNumber: '',
            createPassword: '',
            confirmPassword: '',
            isMember: false,
            isTeacher: false            
        },        
        error: {}        
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
    submitRegistrForm() {
        if(this.validateUserData()){
            this.registerForm();
        }
        else {alert('Ոչ կոռեկտ էլեկտրոնային հասցե կամ գաղտնաբառ');}
    }    
    submitLogForm(){
        if(this.validateAuthForm()){
            this.logForm();
        }
        else {alert('Ոչ կոռեկտ էլեկտրոնային հասցե կամ գաղտնաբառ');}
    }
    
    logTeachers = (teacher) => {
        return((this.authentification.email===teacher.email)&&(this.authentification.password===teacher.password));
    };    
    registorTeachers = (teacher) => {
        return(this.authentification.email===teacher.email);
    };  
  @action
    validateAuthForm = () => {
        this.error.email = !validators.isEmailValid(this.authentification.email);
        this.error.password = !validators.isPasswordValid(this.authentification.password);
        return !this.error.email && !this.error.password;
        
    };
  @action
    logForm =() => {
        let user = teachers.find(this.logTeachers);
        if(user === undefined) {
            alert('Մուտքային տվյալերը սխալ են');
        }
        else {
            setCookie(this.authentification.email, this.authentification.password);
        }
    };    
    registerForm = () => {
        let user = teachers.find(this.registorTeachers);
        if (user === undefined){
            this.userData.name = teacher.name;
            this.userData.surname = teacher.surname;
            this.userData.email = teacher.email;
            this.userData.phoneNumber = teacher.phoneNumber;
            this.userData.createPassword = teacher.createPassword;
            this.userData.confirmPassword = teacher.confirmPassword;
            this.userData.isMember = teacher.isMember;
            this.userData.isTeacher = teacher.isTeacher;
        }
        else {
            alert('tvyal email-ov arden grancvac user ka, xndrum em ayl email greq');
        }
    }    
    @action
        validateUserData = () => {
            this.error.name = !validators.isCorrectName(this.userData.name);
            this.error.surname = !validators.isCorrectName(this.userData.surname);
            this.error.email = !validators.isCorrectName(this.userData.email);
            this.error.phoneNumber = !validators.isCorrectName(this.userData.phoneNumber);
            this.error.createPassword = !validators.isCorrectName(this.userData.createPassword);
            this.error.confirmPassword = !validators.isCorrectName(this.userData.confirmPassword);
            return !this.error.name && !this.error.surname && !this.error.email &&
                !this.error.phoneNumber && !this.error.createPassword && !this.error.confirmPassword;
        };
}
export {UserStore};