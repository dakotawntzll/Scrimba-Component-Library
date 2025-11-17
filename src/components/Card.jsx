
import { IoCloudUploadOutline } from "react-icons/io5";

export default function Card({
	icon = <IoCloudUploadOutline />, 
	title = "Alert", 
	text = ""
}){

	
	return (
		<div className="card">
			<i className="card-icon">{icon}</i>
			<span className="card-title">{title}</span>
			<span className="card-text">{text}</span>
		</div>
	)
}