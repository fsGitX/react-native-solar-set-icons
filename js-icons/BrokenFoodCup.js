import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenFoodCup = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3 7C3 5.11438 3 4.17157 3.58579 3.58579C4.17157 3 5.11438 3 7 3H13C14.8856 3 15.8284 3 16.4142 3.58579C17 4.17157 17 5.11438 17 7V12C17 14.8284 17 16.2426 16.1213 17.1213C15.2426 18 13.8284 18 11 18H9C6.17157 18 4.75736 18 3.87868 17.1213C3 16.2426 3 14.8284 3 12V11" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 13H18C20.2091 13 22 11.2091 22 9C22 6.79086 20.2091 5 18 5H17" stroke="black" strokeWidth="1.5"/>
	<Path d="M17 13H14M3 13H10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 21L2 21" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenFoodCup;