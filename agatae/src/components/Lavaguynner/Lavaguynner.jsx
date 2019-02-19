import React, {Component} from 'react';
import {Cards} from "./Cards";
import art from '../../../assets/images/mix/art.png';
import education from '../../../assets/images/mix/education.png';
import science from '../../../assets/images/mix/science.png';
import sport from '../../../assets/images/mix/sport.png';
import other from '../../../assets/images/mix/other.png';

class Lavaguynner extends Component {
	arrayOfLavTeachers = [
	{
		photo: art,
		name: "Ադրինե Սեթաղյան",
		subject: "Արվեստ",
		aboutMe: "Անձնական ինֆորմացիա"
	},
		{
		photo: education,
		name: "Թուխիկ Ղարագյոզյան",
		subject: "Կրթություն",
		aboutMe: "Անձնական ինֆորմացիա"
	},
		{
		photo: science,
		name: "Գոռ Մանուկյան",
		subject: "Գիտություն",
		aboutMe: "Անձնական ինֆորմացիա"
	},
		{
		photo: sport,
		name: "Էդգար Նիկողոսյան",
		subject: "Սպորտ",
		aboutMe: "Անձնական ինֆորմացիա"
	},
		{
		photo: other,
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