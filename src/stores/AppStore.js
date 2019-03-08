import {extendObservable, computed, action} from 'mobx';

import {Messages} from '../Messages';
import {teachers} from '../data/data';

class AppStore {
    storeValues = {
        _teachers: [],
        _teacherName: '',
        _subjectName: '',
        _searchValue: '',
        _currentLink: '',
        _teacherID: '',
        isDataInitialized: false
    };	
    constructor() {
        extendObservable(this, this.storeValues);
    }	
    @action
    initData = () => {
        this._teachers = teachers;
        this.isDataInitialized = true;
    };
    @computed get subjectData() {
        return this.filterOnlyTeachers.filter(item => item.subject === this._subjectName && item.name.toLowerCase().includes(this.searchValue.toLowerCase()));
    }
    @computed get bestTeachers() {
        let tempTeachersArray = [...this.filterOnlyTeachers];
        return (tempTeachersArray.sort((a,b) => (a.raiting < b.raiting) ? 1 : ((b.raiting < a.raiting) ? -1 : 0)).slice(0, 8));
    }
    @computed get currentTeachers() {
        if(this._subjectName === Messages.arajatar) {
            return this.bestTeachers;
        } else {
            return this.subjectData;
        }
    }
    getKeyByValue = (object, value) => {
        for(let prop in object) {
            if(object.hasOwnProperty(prop)) {
                if(object[prop] === value)
                {return prop;}
            }
        }
    }
    get filterOnlyTeachers() {
        return this._teachers.filter(item => item.isTeacher);
    }
    findID = (id) => {
        return id.username === this._teacherID;
    }
    @computed get teacher() {
        return this._teachers.find(this.findID);
    }
    get subjectName() {
        return this._subjectName;
    }
    get searchValue() {
        return this._searchValue;
    }
    set searchValue(search) {
        this._searchValue = search;
    }
    set subjectName(subject) {
        this._subjectName = subject;
    }
    set currentLink(link) {
        this._currentLink = link;
    }
    set teacherID(id) {
        this._teacherID = id;
    }
    get teacherID() {
        return this._teacherID;
    }
}

export {AppStore};