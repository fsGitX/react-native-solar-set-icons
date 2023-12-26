import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneGPS = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" fill={color} opacity="0.5"/>
	<Path d="M12.0001 8.51172C10.0735 8.51172 8.51172 10.0735 8.51172 12.0001C8.51172 13.9267 10.0735 15.4885 12.0001 15.4885C13.9267 15.4885 15.4885 13.9267 15.4885 12.0001C15.4885 10.0735 13.9267 8.51172 12.0001 8.51172Z" fill={color}/>
	<Path d="M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V4.03469C11.4969 4.01174 11.7471 4 12 4C12.2529 4 12.5031 4.01174 12.75 4.03469V2Z" fill={color}/>
	<Path d="M19.9653 12.75C19.9883 12.5031 20 12.2529 20 12C20 11.7471 19.9883 11.4969 19.9653 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H19.9653Z" fill={color}/>
	<Path d="M11.25 19.9653C11.4969 19.9883 11.7471 20 12 20C12.2529 20 12.5031 19.9883 12.75 19.9653V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V19.9653Z" fill={color}/>
	<Path d="M4.03469 11.25C4.01174 11.4969 4 11.7471 4 12C4 12.2529 4.01174 12.5031 4.03469 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4.03469Z" fill={color}/>
</Svg>;

export default BoldDuotoneGPS;
