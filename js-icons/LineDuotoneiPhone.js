import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneiPhone = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M15 19H9" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16.7483 2.37744L16.6641 2.50361C15.9081 3.63769 15.53 4.20476 14.9779 4.54787C14.8681 4.61609 14.754 4.67715 14.6363 4.73066C14.0446 4.99976 13.3631 4.99976 12 4.99976C10.637 4.99976 9.95552 4.99976 9.36375 4.73066C9.24608 4.67715 9.13199 4.61609 9.0222 4.54787C8.47004 4.20476 8.09201 3.63771 7.33594 2.50361L7.25183 2.37744" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneiPhone;
