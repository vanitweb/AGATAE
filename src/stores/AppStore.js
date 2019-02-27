import {extendObservable, computed, action} from 'mobx';

import {teachers} from '../data/data';

class AppStore {
    storeValues = {
        _teachers: [],
        _teacherName: '',
        _subjectName: 'Մաթեմատիկա',
		_searchValue: '',
		_currentLink: ''
    };	
    constructor() {
        extendObservable(this, this.storeValues);
    }	
    @action
    initData = () => {
        this._teachers = teachers;
    };
    @computed get teachersData() {
        return this._teachers.filter(item => (item.name.substring(0, this._teacherName.length) === this._teacherName));
    }
    @computed get subjectData() {
        return this._teachers.filter(item => (item.subject === this._subjectName && item.name.includes(this._searchValue) /*|| item.name === this._searchValue*/));
    }
    @computed get bestTeachers() {
        let tempTeachersArray = [...this._teachers];
        return (tempTeachersArray.sort((a,b) => (a.raiting > b.raiting) ? 1 : ((b.raiting > a.raiting) ? -1 : 0)).slice(0, 8));
    }
	@computed get currentTeachers() {
		if(this._currentLink === '/') {
			return this.bestTeachers;
		} else {
			return this.subjectData;
		}
	}
    set searchValue(search) {
        this._searchValue = search;
    }
    set subjectName(subject) {
        this._subjectName = subject;
    }
}

export {AppStore};