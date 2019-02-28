import React from 'react';
import {observer} from 'mobx-react';
import {DropdownToggle, Dropdown, NavLink, DropdownMenu} from 'reactstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

@observer
class NavbarDropdown extends React.Component {
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
	onClick = (event) => {
		console.log(event.currentTarget.getAttribute('data-option'));
		console.log(event.currentTarget.getAttribute('data-link'));
	}
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
                        <NavLink data-option={option} data-link="/lavaguynner" onClick={this.onClick} to='/lavaguynner' tag={Link}>{option}</NavLink>
                    ))}
                </DropdownMenu>
            </Dropdown> 
        ); 
    }	
}

export {NavbarDropdown};