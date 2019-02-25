import React from 'react';
import {observer} from 'mobx-react';
import {DropdownToggle, Dropdown, NavLink, DropdownMenu} from 'reactstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

@observer
class NavbarDropdown extends React.Component {
<<<<<<< HEAD
	static propTypes = {
	    nav: PropTypes.object
	};	
	static contextTypes = {
	    uiStore: PropTypes.shape({
	        setOpenedDropdown: PropTypes.func
	    })
	};	
	onToggle = () => {
	    this.context.uiStore.setOpenedDropdown(this.props.nav.name);
	};	
	render() {
	    const {nav} = this.props;
	    const {uiStore} = this.context;
	    return(
	      <Dropdown nav isOpen={uiStore.navbarOpenedDropdown == nav.name} toggle={this.onToggle} >
           <DropdownToggle nav caret>
          {nav.name}
         </DropdownToggle>
         <DropdownMenu >
         {nav.options.map((option) => (
         <NavLink  to='/lavaguynner' tag={Link}>{option}</NavLink>
	                ))}
	     </DropdownMenu>
    </Dropdown> 
	    ); 
	}	
=======
    static propTypes = {
        nav: PropTypes.object
    };	
    static contextTypes = {
        uiStore: PropTypes.shape({
            setOpenedDropdown: PropTypes.func
        })
    };	
    onToggle = () => {
        this.context.uiStore.setOpenedDropdown(this.props.nav.name);
    };	
    render() {
        const {nav} = this.props;
        const {uiStore} = this.context;
        return(
            <Dropdown nav isOpen={uiStore.navbarOpenedDropdown == nav.name} toggle={this.onToggle}>
                <DropdownToggle nav caret>
                    {nav.name}
                </DropdownToggle>
                <DropdownMenu >
                    {nav.options.map((option) => (
                        <NavLink to='/lavaguynner' tag={Link}>{option}</NavLink>
                    ))}
                </DropdownMenu>
            </Dropdown> 
        ); 
    }	
>>>>>>> 8b27a982ba560d6f1b1775c41fb903c1e8e98879
}

export {NavbarDropdown};