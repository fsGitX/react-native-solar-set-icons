import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineMusicNote2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.75 2C13.75 4.8995 16.1005 7.25 19 7.25C19.4142 7.25 19.75 7.58579 19.75 8C19.75 8.41421 19.4142 8.75 19 8.75C16.8795 8.75 14.9875 7.77225 13.75 6.243V18C13.75 20.6234 11.6234 22.75 9 22.75C6.37665 22.75 4.25 20.6234 4.25 18C4.25 15.3766 6.37665 13.25 9 13.25C10.2572 13.25 11.4003 13.7384 12.25 14.5359V2H13.75ZM12.25 18C12.25 16.2051 10.7949 14.75 9 14.75C7.20507 14.75 5.75 16.2051 5.75 18C5.75 19.7949 7.20507 21.25 9 21.25C10.7949 21.25 12.25 19.7949 12.25 18Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineMusicNote2;
