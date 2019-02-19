import {teachers} from '../data/data';
import {extendObservable, action} from 'mobx';

class UIStore {
	appProps = {
		_teachers: [],
	};
	constructor() {
		extendObservable(this, this.appProps);
		this.init();
	}
	get teachersData(key) {
		return this._teachers;
	}
	set teachersData(teachers) {
		this._teachers = teachers;
	}
	init() {
		teachersData = teachers;
	}
}
export {UIStore};