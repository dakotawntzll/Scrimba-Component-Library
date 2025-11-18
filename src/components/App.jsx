import React from "react"
import Badge from "./Badge.jsx"
import Banner from "./Banner.jsx"
import Card from "./Card.jsx"
import { FaCircleInfo } from "react-icons/fa6";
import TestimonialWithImage from "./TestimonialWithImage.jsx";


export default function App(){

	
    return (
		<main>

			<Card 
				icon={<FaCircleInfo/>}  
				title="Easy Deployment"
				text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
			/>
			
			<div className="component-container">
				<Badge>Badge</Badge>
				<Badge color="red">Badge</Badge>
				<Badge color="yellow">Badge</Badge>
				<Badge color="green">Badge</Badge>
				<Badge color="blue">Badge</Badge>
				<Badge color="indigo">Badge</Badge>
				<Badge color="purple">Badge</Badge>
				<Badge color="pink">Badge</Badge>
			</div>

			<Banner 
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." 
				variant="success"
			/>
			<Banner 
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." 
				variant="warning"
			/>
			<Banner 
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." 
				variant="error"
			/>
			<Banner 
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." 
				variant="neutral"
				title="Wow"
			/> 
			
			<TestimonialWithImage 
				alt="Portrait of May Anderson"
				reviewer="May Anderson"
				role="Workcation, CTO"
				quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
			/>
		</main>
    )
}
