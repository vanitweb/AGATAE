import React, {Component} from 'react';
import {Cards} from "./Cards";



class Lavaguynner extends Component {
	arrayOfLavTeachers = [
	{
		photo: ".../../assets/images/mix/art.jpg",
		name: "Ադրինե Սեթաղյան",
		subject: "Արվեստ",
		aboutMe: "Անձնական ինֆորմացիա"
	},
		{
		photo: "../../assets/images/mix/education.jpg",
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