import {teachers} from '../data/data';
import {extendObservable, computed} from 'mobx';

class UIStore {
	appProps = {
		_teachers: [],
	};
	constructor() {
		extendObservable(this, this.appProps);
		this.init();
	}
	@computed get teachersData(teacherName) {
		return this._teachers.filter(item => (item.name.substring(0, teacherName.length) === teacherName));
	}
	@computed get subjectData(subjectName) {
		return this._teachers.filter(item => (item.subject === subjectName));
	}
	set teachersData(teachers) {
		this._teachers = teachers;
	}
	init() {
		teachersData = teachers;
	}
	
}
export {UIStore};