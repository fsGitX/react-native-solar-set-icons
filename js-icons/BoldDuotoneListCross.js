import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneListCross = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H21C21.4142 9.25 21.75 9.58579 21.75 10C21.75 10.4142 21.4142 10.75 21 10.75H3C2.58579 10.75 2.25 10.4142 2.25 10ZM2.25 14C2.25 13.5858 2.58579 13.25 3 13.25H11C11.4142 13.25 11.75 13.5858 11.75 14C11.75 14.4142 11.4142 14.75 11 14.75H3C2.58579 14.75 2.25 14.4142 2.25 14ZM2.25 18C2.25 17.5858 2.58579 17.25 3 17.25H11C11.4142 17.25 11.75 17.5858 11.75 18C11.75 18.4142 11.4142 18.75 11 18.75H3C2.58579 18.75 2.25 18.4142 2.25 18Z" fill={color} fillRule="evenodd" opacity="0.5"/>
	<Path d="M14.4697 12.9697C14.7626 12.6768 15.2374 12.6768 15.5303 12.9697L17.5 14.9393L19.4697 12.9697C19.7626 12.6768 20.2374 12.6768 20.5303 12.9697C20.8232 13.2626 20.8232 13.7374 20.5303 14.0303L18.5607 16L20.5303 17.9697C20.8232 18.2626 20.8232 18.7374 20.5303 19.0303C20.2374 19.3232 19.7626 19.3232 19.4697 19.0303L17.5 17.0607L15.5303 19.0303C15.2374 19.3232 14.7626 19.3232 14.4697 19.0303C14.1768 18.7374 14.1768 18.2626 14.4697 17.9697L16.4393 16L14.4697 14.0303C14.1768 13.7374 14.1768 13.2626 14.4697 12.9697Z" fill={color}/>
</Svg>;

export default BoldDuotoneListCross;
