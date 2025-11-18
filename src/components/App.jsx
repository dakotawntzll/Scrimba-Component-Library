import React from "react"
import Badge from "./Badge.jsx"
import Banner from "./Banner.jsx"
import Card from "./Card.jsx"
import { FaCircleInfo } from "react-icons/fa6";
import TestimonialWithImage from "./Testimonial/TestimonialWithImage.jsx";


export default function App(){

	
    return (
		<main>
			<TestimonialWithImage 
				image="https://img.freepik.com/free-photo/smiley-african-woman-with-golden-earrings_23-2148747979.jpg?semt=ais_hybrid&w=740&q=80" 
				alt="Portrait of May Anderson"
				reviewer="May Anderson"
				role="Workcation, CTO"
				quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
			/>
		</main>
    )
}


{/* <div className="component-container">
	<Badge>Badge</Badge>
	<Badge color="red">Badge</Badge>
	<Badge color="yellow">Badge</Badge>
	<Badge color="green">Badge</Badge>
	<Badge color="blue">Badge</Badge>
	<Badge color="indigo">Badge</Badge>
	<Badge color="purple">Badge</Badge>
	<Badge color="pink">Badge</Badge>
</div>
<div className="component-container">
	<Badge variant="pill">Badge</Badge>
	<Badge variant="pill" color="red">Badge</Badge>
	<Badge variant="pill" color="yellow">Badge</Badge>
	<Badge variant="pill" color="green">Badge</Badge>
	<Badge variant="pill" color="blue">Badge</Badge>
	<Badge variant="pill" color="indigo">Badge</Badge>
	<Badge variant="pill" color="purple">Badge</Badge>
	<Badge variant="pill" color="pink">Badge</Badge>
</div> */}

{{/* <Banner 
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
/>  */}}

{/* <Card 
	icon={<FaCircleInfo/>}  
	title="Easy Deployment"
	text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
/> */}