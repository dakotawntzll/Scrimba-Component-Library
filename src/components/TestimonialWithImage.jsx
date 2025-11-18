import { ImQuotesLeft } from "react-icons/im";

export default function TestimonialWithImage({image, alt, reviewer, role, quote}){

	const defaultImg =  
	"https://images.unsplash.com/photo-1573497019418-b400bb3ab074?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

	return (
		<section className="testimonial-wrapper">
			<div className="testimonial">
				<div className="image-wrapper">
					<img 
						src={image ? image : defaultImg} 
						alt={alt ? alt : `Image of ${reviewer}`}
					/>
				</div>

				<div className="text-wrapper">
					<i><ImQuotesLeft /></i>
					<span className="quote">{quote}</span>
					
					{reviewer ? <span className="reviewer">{reviewer}</span> : null}
					{role ? <span className="role">{role}</span> : null}
				</div>

			</div>
		</section>
	)
}