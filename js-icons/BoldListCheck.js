import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldListCheck = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 5.75C2 5.33579 2.33579 5 2.75 5H20.75C21.1642 5 21.5 5.33579 21.5 5.75C21.5 6.16421 21.1642 6.5 20.75 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75ZM2 9.75C2 9.33579 2.33579 9 2.75 9H20.75C21.1642 9 21.5 9.33579 21.5 9.75C21.5 10.1642 21.1642 10.5 20.75 10.5H2.75C2.33579 10.5 2 10.1642 2 9.75ZM20.2113 12.6586C20.5379 12.9134 20.5961 13.3847 20.3414 13.7113L16.4414 18.7113C16.3022 18.8897 16.0899 18.9958 15.8636 18.9999C15.6373 19.004 15.4213 18.9057 15.2757 18.7324L13.1757 16.2324C12.9093 15.9152 12.9504 15.4421 13.2676 15.1757C13.5848 14.9093 14.0579 14.9504 14.3243 15.2676L15.8284 17.0582L19.1586 12.7887C19.4134 12.4621 19.8847 12.4039 20.2113 12.6586ZM2 13.75C2 13.3358 2.33579 13 2.75 13H9.75C10.1642 13 10.5 13.3358 10.5 13.75C10.5 14.1642 10.1642 14.5 9.75 14.5H2.75C2.33579 14.5 2 14.1642 2 13.75ZM2 17.75C2 17.3358 2.33579 17 2.75 17H9.75C10.1642 17 10.5 17.3358 10.5 17.75C10.5 18.1642 10.1642 18.5 9.75 18.5H2.75C2.33579 18.5 2 18.1642 2 17.75Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldListCheck;
