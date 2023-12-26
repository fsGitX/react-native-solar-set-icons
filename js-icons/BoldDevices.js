import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDevices = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 14.5C2 13.0955 2 12.3933 2.33706 11.8889C2.48298 11.6705 2.67048 11.483 2.88886 11.3371C3.39331 11 4.09554 11 5.5 11C6.90446 11 7.60669 11 8.11114 11.3371C8.32952 11.483 8.51702 11.6705 8.66294 11.8889C9 12.3933 9 13.0955 9 14.5V18.5C9 19.9045 9 20.6067 8.66294 21.1111C8.51702 21.3295 8.32952 21.517 8.11114 21.6629C7.60669 22 6.90446 22 5.5 22C4.09554 22 3.39331 22 2.88886 21.6629C2.67048 21.517 2.48298 21.3295 2.33706 21.1111C2 20.6067 2 19.9045 2 18.5V14.5Z" fill={color}/>
	<Path d="M22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22C12.3009 22 10.9846 22 9.94386 21.8929C10.2787 21.368 10.3977 20.8107 10.4502 20.2949C10.5001 19.8039 10.5001 19.2114 10.5 18.566L10.5 18.5V14.5L10.5 14.434C10.5001 13.7886 10.5001 13.1961 10.4502 12.7051C10.396 12.1723 10.2708 11.5953 9.91014 11.0555C9.65479 10.6733 9.32666 10.3452 8.9445 10.0899C8.40473 9.72919 7.82766 9.60403 7.29488 9.54983C6.91621 9.51131 6.47721 9.50253 6.00011 9.50056C6.00239 6.05993 6.0529 4.29024 7.17157 3.17157C8.34315 2 10.2288 2 14 2C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10ZM11.25 19C11.25 18.5858 11.5858 18.25 12 18.25H17C17.4142 18.25 17.75 18.5858 17.75 19C17.75 19.4142 17.4142 19.75 17 19.75H12C11.5858 19.75 11.25 19.4142 11.25 19Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDevices;