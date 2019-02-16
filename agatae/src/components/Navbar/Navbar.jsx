import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
	return <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to='/art' activeClassName={s.activeLink}>Արվեստ</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
			<NavLink to='/sport' activeClassName={s.activeLink}>Սպորտ</NavLink>
        </div>
        <div className={s.item}>
        <NavLink to='/science' activeClassName={s.activeLink}> Գիտություն</NavLink>
        </div>
        <div className={s.item}>
        <NavLink to='/ather' activeClassName={s.activeLink}>Այլ</NavLink>
        </div>
        <div className={s.item}>
        <NavLink to='/aboutUs' activeClassName={s.activeLink} className={s.item}>Մեր մասին</NavLink>
        </div>
       </nav>
}
export default Navbar