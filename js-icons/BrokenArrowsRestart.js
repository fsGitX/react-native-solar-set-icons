import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenArrowsRestart = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<g clipPath="url(#clip0_1648_2037)">
		<Path d="M19.7285 10.9288C20.4413 13.5978 19.7507 16.5635 17.6569 18.6573C15.1798 21.1344 11.4826 21.6475 8.5 20.1966M18.364 8.05071L17.6569 7.3436C14.5327 4.21941 9.46736 4.21941 6.34316 7.3436C3.42964 10.2571 3.23318 14.8588 5.75376 18M18.364 8.05071H14.1213M18.364 8.05071V3.80807" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	</g>
	<defs>
		<clipPath id="clip0_1648_2037">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</Svg>;

export default BrokenArrowsRestart;
