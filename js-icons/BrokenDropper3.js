import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenDropper3 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18 16H14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M18 11.4167C18 12.5673 17.1046 13.5 16 13.5C14.8954 13.5 14 12.5673 14 11.4167C14 10.6968 14.783 9.73595 15.3691 9.11749C15.7161 8.75136 16.2839 8.75136 16.6309 9.11749C17.217 9.73595 18 10.6968 18 11.4167Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M16 21V22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 10C10 8.11438 10 7.17157 10.5858 6.58579C11.1716 6 12.1144 6 14 6H18C19.8856 6 20.8284 6 21.4142 6.58579C22 7.17157 22 8.11438 22 10V16.5069C22 17.1639 21.723 17.7906 21.2371 18.2329C18.2685 20.935 13.7315 20.935 10.7629 18.2329C10.277 17.7906 10 17.1639 10 16.5069V14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 22V20M18.5 2L17.9774 2.52261C17.9398 2.56024 17.9209 2.57906 17.9044 2.59508C17.3724 3.11098 16.6932 3.39324 16 3.43581M16 2V3.43581M16 3.43581V6M16 3.43581C15.2747 3.48035 14.5341 3.26249 13.9309 2.77532C13.913 2.76086 13.8926 2.74382 13.8517 2.70975L13.8178 2.68156C13.2869 2.24559 12.6224 2.00503 11.9355 2.00008L11.8913 2H8C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenDropper3;
