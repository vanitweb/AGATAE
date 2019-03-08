import React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    DropdownToggle,
    Dropdown,
    NavLink,
    DropdownMenu
} from 'reactstrap';

import {Constants} from '../../Constants';

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
    }
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    onMouseEnter() {
        this.setState({dropdownOpen: true});
    }
    onMouseLeave() {
        this.setState({dropdownOpen: false});
    }
    render() {
        const {nav} = this.props;
        const {uiStore} = this.context;
        return(
            <Dropdown nav
                isOpen={uiStore.navbarOpenedDropdown === nav.name}
                toggle={this.onToggle}
                onMouseOver={this.onMouseEnter} 
                onMouseLeave={this.onMouseLeave} 
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}>
                <DropdownToggle nav caret>
                    {nav.name}
                </DropdownToggle>
                <DropdownMenu >
                    {nav.options.map((option) => (
                        <NavLink key={option} onClick={this.onClick} data-option={option} to={`/teachers/${Constants[option]}`} tag={Link}>{option}</NavLink>
                    ))}
                </DropdownMenu>
            </Dropdown> 
        ); 
    }	
}

export {NavbarDropdown};