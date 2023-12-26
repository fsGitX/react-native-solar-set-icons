import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneTicketSale = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.005 4H9.99502C6.21439 4 4.32407 4 3.14958 5.17157C2.34091 5.97823 2.08903 7.12339 2.01058 8.98947C1.99502 9.35954 1.98724 9.54458 2.05634 9.66802C2.12545 9.79147 2.40133 9.94554 2.95308 10.2537C3.56586 10.5959 3.98007 11.2497 3.98007 12C3.98007 12.7503 3.56586 13.4041 2.95308 13.7463C2.40133 14.0545 2.12545 14.2085 2.05634 14.332C1.98724 14.4554 1.99502 14.6405 2.01058 15.0105C2.08903 16.8766 2.34091 18.0218 3.14958 18.8284C4.32407 20 6.21438 20 9.99502 20H14.005C17.7856 20 19.6759 20 20.8504 18.8284C21.6591 18.0218 21.911 16.8766 21.9894 15.0105C22.005 14.6405 22.0128 14.4554 21.9437 14.332C21.8745 14.2085 21.5987 14.0545 21.0469 13.7463C20.4341 13.4041 20.0199 12.7503 20.0199 12C20.0199 11.2497 20.4341 10.5959 21.0469 10.2537C21.5987 9.94554 21.8745 9.79147 21.9437 9.66803C22.0128 9.54458 22.005 9.35954 21.9894 8.98947C21.911 7.12339 21.6591 5.97823 20.8504 5.17157C19.6759 4 17.7856 4 14.005 4Z" fill={color} opacity="0.5"/>
	<Path d="M15.5475 8.46967C15.8411 8.76256 15.8411 9.23744 15.5475 9.53033L9.53254 15.5303C9.23892 15.8232 8.76286 15.8232 8.46924 15.5303C8.17562 15.2374 8.17562 14.7626 8.46924 14.4697L14.4842 8.46967C14.7778 8.17678 15.2539 8.17678 15.5475 8.46967Z" fill={color}/>
	<Path d="M14.5146 15.5C15.0683 15.5 15.5171 15.0523 15.5171 14.5C15.5171 13.9477 15.0683 13.5 14.5146 13.5C13.9609 13.5 13.5121 13.9477 13.5121 14.5C13.5121 15.0523 13.9609 15.5 14.5146 15.5Z" fill={color}/>
	<Path d="M9.50214 10.5C10.0558 10.5 10.5046 10.0523 10.5046 9.5C10.5046 8.94772 10.0558 8.5 9.50214 8.5C8.94848 8.5 8.49965 8.94772 8.49965 9.5C8.49965 10.0523 8.94848 10.5 9.50214 10.5Z" fill={color}/>
</Svg>;

export default BoldDuotoneTicketSale;