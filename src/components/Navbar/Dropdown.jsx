import React from 'react';
import { Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import {Lavaguynner} from '../Lavaguynner/Lavaguynner';
import navData from '../../configs/navData';

class Dropdown extends React.Component {
    render (){
        return(
            <CardDeck>
                {arrayOfLavTeachers.map((item,i) => {
                    return (
                        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <CardImg top width="100%" src={arrayOfLavTeachers[i].photo}/>
                            <CardBody key={i}>
                                <CardTitle key={i}>{arrayOfLavTeachers[i].name}</CardTitle>
                                <CardSubtitle key={i}>{arrayOfLavTeachers[i].subject}</CardSubtitle>
                                <Button key={i} color="info">{arrayOfLavTeachers[i].aboutMe}</Button>
                            </CardBody>
                        </Dropdown>
                    );
                })}
            </CardDeck>
        );
    }
}

export {Dropdown};

