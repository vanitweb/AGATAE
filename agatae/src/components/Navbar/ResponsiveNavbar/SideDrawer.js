import React from 'react';
import "./SideDrawer.css";

const SideDrawer = props => {
	let drawerClasses =  "side_drawer";

	if (props.show) {
		drawerClasses = "side_drawer open";
	}

    return (
     	<nav className={drawerClasses}>
			<ul>
				<li><a href="/">home</a></li>
				<li><a href="/register">Register</a></li>
			</ul>
		</nav>
    );
};


export { SideDrawer };