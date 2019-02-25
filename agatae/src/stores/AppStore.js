import {extendObservable, computed, action} from 'mobx';

import {teachers} from '../data/data';

class AppStore {
    storeValues = {
        _teachers: [],
        _teacherName: '',
        _subjectName: ''
    };	
    constructor() {
        extendObservable(this, this.storeValues);
    }	
    @action
    initData = () => {
        this._teachers = observable(teachers);
    };
    @computed get teachersData() {
        return this._teachers.filter(item => (item.name.substring(0, this._teacherName.length) === this._teacherName));
    }
    @computed get subjectData() {
        return this._teachers.filter(item => (item.subject === this._subjectName));
    }
    @computed get bestTeachers() {
        let tempTeachersArray = [...this._teachers];
        return (tempTeachersArray.sort((a,b) => (a.raiting > b.raiting) ? 1 : ((b.raiting > a.raiting) ? -1 : 0)).slice(0, 8));
    }
    set teachersData(teachers) {
        this._teachers = teachers;
    }
    set teacherName(teacher) {
        this._teacherName = teacher;
    }
    set subjectName(subject) {
        this._subjectName = subject;
    }
}

export {AppStore};