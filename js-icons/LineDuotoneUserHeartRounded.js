import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneUserHeartRounded = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="9" cy="6" r="4" stroke="black" strokeWidth="1.5"/>
	<ellipse cx="9" cy="17" opacity="0.5" rx="7" ry="4" stroke="black" strokeWidth="1.5"/>
	<Path d="M17.0885 12.5385L17.5435 11.9423L17.0885 12.5385ZM18 8.64354L17.4681 9.17232C17.6089 9.31392 17.8003 9.39354 18 9.39354C18.1997 9.39354 18.3911 9.31392 18.5319 9.17232L18 8.64354ZM18.9115 12.5385L18.4565 11.9423L18.9115 12.5385ZM17.5435 11.9423C17.0571 11.571 16.619 11.274 16.2659 10.8891C15.9387 10.5324 15.75 10.1638 15.75 9.69973H14.25C14.25 10.6481 14.6642 11.362 15.1606 11.9031C15.6311 12.4161 16.2372 12.8322 16.6335 13.1347L17.5435 11.9423ZM15.75 9.69973C15.75 9.28775 15.9898 8.95469 16.2973 8.81862C16.5635 8.7008 16.9874 8.68874 17.4681 9.17232L18.5319 8.11476C17.6627 7.24047 16.5865 7.0503 15.6903 7.44694C14.8352 7.82533 14.25 8.69929 14.25 9.69973H15.75ZM16.6335 13.1347C16.7825 13.2483 16.9756 13.3959 17.1793 13.5111C17.3832 13.6265 17.6656 13.75 18 13.75V12.25C18.0344 12.25 18.0168 12.2615 17.9179 12.2056C17.8187 12.1495 17.7061 12.0663 17.5435 11.9423L16.6335 13.1347ZM19.3665 13.1347C19.7628 12.8322 20.3689 12.4161 20.8394 11.9031C21.3358 11.362 21.75 10.6481 21.75 9.69973H20.25C20.25 10.1638 20.0613 10.5324 19.7341 10.8891C19.381 11.274 18.9429 11.571 18.4565 11.9423L19.3665 13.1347ZM21.75 9.69973C21.75 8.69929 21.1648 7.82533 20.3097 7.44694C19.4135 7.0503 18.3373 7.24047 17.4681 8.11476L18.5319 9.17232C19.0126 8.68874 19.4365 8.7008 19.7027 8.81862C20.0102 8.95469 20.25 9.28775 20.25 9.69973H21.75ZM18.4565 11.9423C18.2939 12.0663 18.1813 12.1495 18.0821 12.2056C17.9832 12.2615 17.9656 12.25 18 12.25V13.75C18.3344 13.75 18.6168 13.6265 18.8207 13.5111C19.0244 13.3959 19.2175 13.2483 19.3665 13.1347L18.4565 11.9423Z" fill={color}/>
</Svg>;

export default LineDuotoneUserHeartRounded;
