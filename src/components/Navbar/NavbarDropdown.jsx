import React from 'react';
import {observer} from 'mobx-react';
import {DropdownToggle, Dropdown, NavLink, DropdownMenu} from 'reactstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Const} from '../../Const';

@observer
class NavbarDropdown extends React.Component {
    static propTypes = {
        nav: PropTypes.object
    };	
    static contextTypes = {
        uiStore: PropTypes.shape({
            setOpenedDropdown: PropTypes.func
        }),
        appStore: PropTypes.object.isRequired
    };	
    onToggle = () => {
        this.context.uiStore.setOpenedDropdown(this.props.nav.name);
    };	
    onClick = (event) => {
        this.context.appStore.subjectName = event.currentTarget.getAttribute('data-option');
        this.context.appStore.currentLink = event.currentTarget.getAttribute('data-link');
        this.context.appStore.searchValue = '';
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
                        <NavLink onClick={this.onClick} data-option={option} data-link='/lavaguynner' to={`/teachers/${Const[option]}`} tag={Link}>{option}</NavLink>
                    ))}
                </DropdownMenu>
            </Dropdown> 
        ); 
    }	
}

export {NavbarDropdown};