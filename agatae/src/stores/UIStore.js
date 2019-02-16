import {teachers} from '../data/data';
import {extendObservable, action} from 'mobx';

class UIStore {
	appProps = {
		_teachers: [],
	};
	constructor() {
		extendObservable(this, this.appProps);
	}
	getTeachers() {
		this.teachers = teachers;
	}
	set teachers(teachers) {
		this._teachers = teachers;
	}
}

export {UIStore};