export default function Button ({children, color = "", variant = ""}){

	const className = `btn ${color.toLowerCase()} ${variant.toLowerCase()}`

	return (
		<button className={className}>{children}</button>
	)
}