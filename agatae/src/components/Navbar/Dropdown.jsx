import React from 'react';
import { Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import {Lavaguynner} from '../Lavaguynner/Lavaguynner';
import navData from '../../data/navData';

class Dropdown extends React.Component {
    render (){
        return(
            <CardDeck>
                    {arrayOfLavTeachers.map((item,i) => {
                        return (
                            <Dropdown nav  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <CardImg top width="100%" src={arrayOfLavTeachers[i].photo}/>
                                <CardBody key={i}>
                                    <CardTitle key={i}>{arrayOfLavTeachers[i].name}</CardTitle>
                                    <CardSubtitle key={i}>{arrayOfLavTeachers[i].subject}</CardSubtitle>
                                    <Button key={i} color="info">{arrayOfLavTeachers[i].aboutMe}</Button>
                                </CardBody>
                            </Dropdown>
                        )
                    })}
            </CardDeck>
        )
    }
}

export {Dropdown};

<div>
          <Dropdown nav key ="a" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>Կրթություն
            </DropdownToggle>
            <DropdownMenu>
            <NavLink href="/lavaguynner">Հայերեն</NavLink>
            <NavLink href="/lavaguynner">Ռուսերեն</NavLink>
            <NavLink href="/lavaguynner">Անգլերեն</NavLink>
            </DropdownMenu>
          </Dropdown>
          </div>
           <Dropdown nav  key ="b" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>Արվեստ
            </DropdownToggle>
            <DropdownMenu>
              <NavLink href="/lavaguynner">Պար</NavLink>
              <NavLink href="/lavaguynner">Երգ</NavLink>
              <NavLink href="/lavaguynner">Երաժշտություն</NavLink>
            </DropdownMenu>
          </Dropdown>
           <Dropdown nav  key ="c" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>Սպորտ
            </DropdownToggle>
            <DropdownMenu>
              <NavLink href="/lavaguynner">Կառատե</NavLink>
              <NavLink href="/lavaguynner">Ձյուդո</NavLink>
              <NavLink href="/lavaguynner">Շախմատ</NavLink>
            </DropdownMenu>
          </Dropdown>