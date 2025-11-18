import { ImQuotesLeft } from "react-icons/im";

export default function TestimonialWithImage({image, alt, reviewer, role, quote}){
	return (
		<section className="testimonial">
			<div className="image-wrapper">
				<img 
					src={image} 
					alt={alt ? alt : `Image of ${reviewer}`}
				/>
			</div>

			<div className="text-wrapper">
				<i><ImQuotesLeft /></i>
				<span className="quote">{quote}</span>
				{reviewer ? <span className="reviewer">{reviewer}</span> : null}
				{role ? <span className="role">{role}</span> : null}
			</div>

		</section>
	)
}