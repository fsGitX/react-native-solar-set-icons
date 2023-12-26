import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearBusinessCourseDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22.0001 18L14.6204 10.6653C13.6227 9.67375 13.1239 9.17795 12.5052 9.17802C11.8864 9.17809 11.3877 9.674 10.3903 10.6658L10.1509 10.9038C9.1526 11.8965 8.65344 12.3929 8.03428 12.3926C7.41512 12.3924 6.91632 11.8957 5.91873 10.9023L2.00006 7M22.0001 18V12.4542M22.0001 18H16.4179" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearBusinessCourseDown;
