import { IoCheckmarkCircle } from "react-icons/io5";
import { IoWarning } from "react-icons/io5";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";

export default function Banner({title, text, variant}){

	let icon = <FaCircleXmark />
 
	if (variant.toLowerCase() === "neutral" ) {
		icon = <i className="neutral"><FaCircleInfo/></i>
		title = title ? title : "Update available"

	} else if (variant.toLowerCase() === "success" ) {
		icon = <i className="success"><IoCheckmarkCircle /></i>
		title = title ? title : "Congratulations!"

	} else if (variant.toLowerCase() === "warning" ) {
		icon = <i className="warning"><IoWarning/></i>
		title = title ? title : "Attention"

	} else {
		icon = <i className="error"><FaCircleXmark/></i>
		title = title ? title : "There is a problem with your application"
	}



	return (
		<div role="status" className={`banner ${variant.toLowerCase()}`}>
			{icon}
			<div>
				<span className="banner-title">{title}</span>
				{text ? <span className="banner-text">{text}</span> : null}
			</div>
		</div>
	)
}