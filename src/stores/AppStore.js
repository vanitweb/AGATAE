import {extendObservable, computed, action} from 'mobx';

import {teachers} from '../data/data';

class AppStore {
    storeValues = {
        _teachers: [],
        _teacherName: '',
        _subjectName: 'ՄԵՐ ԱՌԱՋԱՏԱՐՆԵՐԸ',
		_searchValue: '',
		_currentLink: '/',
		_teacher: {}
    };	
    constructor() {
        extendObservable(this, this.storeValues);
    }	
    @action
    initData = () => {
        this._teachers = teachers;
    };
    @computed get subjectData() {
        /*return this._teachers.filter(item => (item.subject === this._subjectName && item.name.includes(this._searchValue) || (item.name === this._searchValue && item.subject.includes(this._subjectName))));*/
		return this._teachers.filter(item => item.subject === this._subjectName || item.name === this._searchValue);
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
	@computed get teacher() {
		return this._teacher;
	}
	@computed get subjectName() {
		return this._subjectName;
	}
    set searchValue(search) {
        this._searchValue = search;
    }
    set subjectName(subject) {
        this._subjectName = subject;
    }
	set teacher(teacherObject) {
		this._teacher = teacherObject;
	}
	set currentLink(link) {
		this._currentLink = link;
	}
}

export {AppStore};