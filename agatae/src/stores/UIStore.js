import {teachers} from '../data/data';
import {extendObservable, computed, action} from 'mobx';

class UIStore {
	appProps = {
	    navbarOpenedDropdown: ''
	};
	constructor() {
	    extendObservable(this, this.appProps);
	}
	@action
	setOpenedDropdown = (name) => {
	    if(name === this.navbarOpenedDropdown) {
	        this.navbarOpenedDropdown = '';
	    } else {
	        this.navbarOpenedDropdown = name;
	    }
	    // this.navbarOpenedDropdown = name === this.navbarOpenedDropdown ? '' : name;
	}
	
}
export {UIStore};