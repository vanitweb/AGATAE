import {teachers} from '../data/data';
import {extendObservable, computed} from 'mobx';

class UIStore {
	appProps = {
		_teachers: [],
		_teacherName: "",
		_subjectName: ""
	};
	constructor() {
		extendObservable(this, this.appProps);
		this.init();
	}
	@computed get teachersData() {
		return this._teachers.filter(item => (item.name.substring(0, this._teacherName.length) === this._teacherName));
	}
	@computed get subjectData() {
		return this._teachers.filter(item => (item.subject === this._subjectName));
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
	init() {
		this.teachersData = teachers;
	}
	
}
export {UIStore};