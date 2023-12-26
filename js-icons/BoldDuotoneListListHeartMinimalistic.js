import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneListListHeartMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 11C2.25 10.5858 2.58579 10.25 3 10.25H9C9.41421 10.25 9.75 10.5858 9.75 11C9.75 11.4142 9.41421 11.75 9 11.75H3C2.58579 11.75 2.25 11.4142 2.25 11ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z" fill={color} fillRule="evenodd" opacity="0.5"/>
	<Path d="M13 11.7148C13 13.4674 15.1633 15.3304 16.4901 16.3082C16.9442 16.643 17.1713 16.8103 17.5 16.8103C17.8287 16.8103 18.0558 16.643 18.5099 16.3083C19.8367 15.3304 22 13.4674 22 11.7148C22 9.03759 19.5249 8.03807 17.5 10.1062C15.4751 8.03807 13 9.03759 13 11.7148Z" fill={color}/>
</Svg>;

export default BoldDuotoneListListHeartMinimalistic;
