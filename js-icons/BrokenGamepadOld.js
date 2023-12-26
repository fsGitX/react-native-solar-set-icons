import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenGamepadOld = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<g clipPath="url(#clip0_1648_6306)">
		<Path d="M8 10V14M6 12L10 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
		<Path d="M16 10.5C16 11.0523 15.5523 11.5 15 11.5C14.4477 11.5 14 11.0523 14 10.5C14 9.94772 14.4477 9.5 15 9.5C15.5523 9.5 16 9.94772 16 10.5Z" fill={color}/>
		<Path d="M18 13.5C18 14.0523 17.5523 14.5 17 14.5C16.4477 14.5 16 14.0523 16 13.5C16 12.9477 16.4477 12.5 17 12.5C17.5523 12.5 18 12.9477 18 13.5Z" fill={color}/>
		<Path d="M12 4V3C12 2.44772 12.4477 2 13 2H14C14.5523 2 15 1.55228 15 1V0" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
		<Path d="M22 12C22 14.8003 22 16.2004 21.455 17.27C20.9757 18.2108 20.2108 18.9757 19.27 19.455C18.2004 20 16.8003 20 14 20H10C7.19974 20 5.79961 20 4.73005 19.455C3.78924 18.9757 3.02433 18.2108 2.54497 17.27C2 16.2004 2 14.8003 2 12C2 9.19974 2 7.79961 2.54497 6.73005C3.02433 5.78924 3.78924 5.02433 4.73005 4.54497C5.79961 4 7.19974 4 10 4H14C16.8003 4 18.2004 4 19.27 4.54497C20.2108 5.02433 20.9757 5.78924 21.455 6.73005C21.6432 7.0993 21.7664 7.50794 21.847 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	</g>
	<defs>
		<clipPath id="clip0_1648_6306">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</Svg>;

export default BrokenGamepadOld;
