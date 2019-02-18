import React, {Component} from 'react';
import {Cards} from "./Cards";
import art from '../../../assets/images/mix/art.png';


class Lavaguynner extends Component {
	arrayOfLavTeachers = [
	{
		photo:  {art},
		name: "Ադրինե Սեթաղյան",
		subject: "Արվեստ",
		aboutMe: "Անձնական ինֆորմացիա"
	},
		{
		photo: "../../assets/images/mix/education.png",
		name: "Թուխիկ Ղարագյոզյան",
		subject: "Կրթություն",
		aboutMe: "Անձնական ինֆորմացիա"
	},
		{
		photo: "../../assets/images/mix/science.jpg",
		name: "Գոռ Մանուկյան",
		subject: "Գիտություն",
		aboutMe: "Անձնական ինֆորմացիա"
	},
		{
		photo: "../../assets/images/mix/sport.jpg",
		name: "Էդգար Նիկողոսյան",
		subject: "Սպորտ",
		aboutMe: "Անձնական ինֆորմացիա"
	},
		{
		photo: "../../assets/images/mix/other.jpg",
		name: "Արուսիկ Ափինյան",
		subject: "Այլ",
		aboutMe: "Անձնական ինֆորմացիա"
	}
];
	
	
	
	render() {
		console.log(this.arrayOfLavTeachers);
		return(
			<div className="container">
				<Cards arrayOfLavTeachers={this.arrayOfLavTeachers}/>
			</div>
		)
	}
}

export {Lavaguynner};