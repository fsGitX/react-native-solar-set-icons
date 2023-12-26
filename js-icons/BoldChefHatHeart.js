import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldChefHatHeart = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 10C2 7.23858 4.23858 5 7 5C7.25052 5 7.49673 5.01842 7.73736 5.05399C8.33961 3.27806 10.0206 2 12 2C13.9794 2 15.6604 3.27806 16.2626 5.05399C16.5033 5.01842 16.7495 5 17 5C19.7614 5 22 7.23858 22 10C22 12.0503 20.7659 13.8124 19 14.584L19 17.25H5V14.584C3.2341 13.8124 2 12.0503 2 10ZM11.0429 13.6693C10.1649 13.0251 9 11.9849 9 11.0004C9 9.32721 10.65 8.7025 12 9.99506C13.35 8.7025 15 9.32721 15 11.0004C15 11.9849 13.8352 13.0251 12.9571 13.6693C12.5374 13.9773 12.3275 14.1313 12 14.1313C11.6725 14.1313 11.4626 13.9773 11.0429 13.6693Z" fill={color} fillRule="evenodd"/>
	<Path d="M5.58579 21.4142C5.08343 20.9119 5.01188 20.1469 5.00169 18.75H18.9983C18.9881 20.1469 18.9166 20.9119 18.4142 21.4142C17.8284 22 16.8856 22 15 22H9C7.11438 22 6.17157 22 5.58579 21.4142Z" fill={color}/>
</Svg>;

export default BoldChefHatHeart;
