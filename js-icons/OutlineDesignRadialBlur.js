import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineDesignRadialBlur = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.1057 2.81542C11.1864 2.58276 9.17934 2.94735 7.37521 3.98897C2.951 6.54329 1.43516 12.2005 3.98947 16.6247C6.54379 21.0489 12.201 22.5648 16.6252 20.0104C18.4293 18.9688 19.7486 17.413 20.5068 15.6344C21.6096 13.0476 21.5238 9.99511 20.0109 7.37471C18.4981 4.7543 15.8974 3.1538 13.1057 2.81542ZM6.62521 2.68993C8.72029 1.48034 11.0554 1.05591 13.2862 1.32632C16.526 1.71902 19.5512 3.57847 21.31 6.62471C23.0687 9.67094 23.1664 13.2206 21.8867 16.2227C21.0054 18.2898 19.4703 20.0999 17.3752 21.3095C12.2336 24.278 5.65897 22.5164 2.69044 17.3747C-0.278096 12.2331 1.48356 5.65846 6.62521 2.68993Z" fill={color} fillRule="evenodd"/>
	<Path d="M9.75 8.99999C9.33579 8.99999 9 9.33578 9 9.74999C9 10.1642 9.33579 10.5 9.75 10.5C10.1642 10.5 10.5 10.1642 10.5 9.74999C10.5 9.33577 10.1642 8.99999 9.75 8.99999ZM8 9.74999C8 8.78349 8.7835 7.99999 9.75 7.99999C10.7165 7.99999 11.5 8.78349 11.5 9.74999C11.5 10.7165 10.7165 11.5 9.75 11.5C8.7835 11.5 8 10.7165 8 9.74999ZM14.25 8.99999C13.8358 8.99999 13.5 9.33577 13.5 9.74999C13.5 10.1642 13.8358 10.5 14.25 10.5C14.6642 10.5 15 10.1642 15 9.74999C15 9.33577 14.6642 8.99999 14.25 8.99999ZM12.5 9.74999C12.5 8.78349 13.2835 7.99999 14.25 7.99999C15.2165 7.99999 16 8.78349 16 9.74999C16 10.7165 15.2165 11.5 14.25 11.5C13.2835 11.5 12.5 10.7165 12.5 9.74999ZM9.75 13.5C9.33579 13.5 9 13.8358 9 14.25C9 14.6642 9.33579 15 9.75 15C10.1642 15 10.5 14.6642 10.5 14.25C10.5 13.8358 10.1642 13.5 9.75 13.5ZM8 14.25C8 13.2835 8.7835 12.5 9.75 12.5C10.7165 12.5 11.5 13.2835 11.5 14.25C11.5 15.2165 10.7165 16 9.75 16C8.7835 16 8 15.2165 8 14.25ZM14.25 13.5C13.8358 13.5 13.5 13.8358 13.5 14.25C13.5 14.6642 13.8358 15 14.25 15C14.6642 15 15 14.6642 15 14.25C15 13.8358 14.6642 13.5 14.25 13.5ZM12.5 14.25C12.5 13.2835 13.2835 12.5 14.25 12.5C15.2165 12.5 16 13.2835 16 14.25C16 15.2165 15.2165 16 14.25 16C13.2835 16 12.5 15.2165 12.5 14.25Z" fill={color} fillRule="evenodd"/>
	<Path d="M15 5.74999C15 6.1642 14.6642 6.49999 14.25 6.49999C13.8358 6.49999 13.5 6.1642 13.5 5.74999C13.5 5.33578 13.8358 4.99999 14.25 4.99999C14.6642 4.99999 15 5.33578 15 5.74999Z" fill={color}/>
	<Path d="M10.5 5.74999C10.5 6.1642 10.1642 6.49999 9.75 6.49999C9.33579 6.49999 9 6.1642 9 5.74999C9 5.33578 9.33579 4.99999 9.75 4.99999C10.1642 4.99999 10.5 5.33578 10.5 5.74999Z" fill={color}/>
	<Path d="M18.25 8.99999C18.6642 8.99999 19 9.33577 19 9.74999C19 10.1642 18.6642 10.5 18.25 10.5C17.8358 10.5 17.5 10.1642 17.5 9.74999C17.5 9.33577 17.8358 8.99999 18.25 8.99999Z" fill={color}/>
	<Path d="M5.75 8.99999C6.16422 8.99999 6.5 9.33577 6.5 9.74999C6.5 10.1642 6.16422 10.5 5.75 10.5C5.33579 10.5 5 10.1642 5 9.74999C5 9.33577 5.33579 8.99999 5.75 8.99999Z" fill={color}/>
	<Path d="M18.25 13.5C18.6642 13.5 19 13.8358 19 14.25C19 14.6642 18.6642 15 18.25 15C17.8358 15 17.5 14.6642 17.5 14.25C17.5 13.8358 17.8358 13.5 18.25 13.5Z" fill={color}/>
	<Path d="M5.75 13.5C6.16422 13.5 6.5 13.8358 6.5 14.25C6.5 14.6642 6.16422 15 5.75 15C5.33579 15 5 14.6642 5 14.25C5 13.8358 5.33579 13.5 5.75 13.5Z" fill={color}/>
	<Path d="M15 18.25C15 18.6642 14.6642 19 14.25 19C13.8358 19 13.5 18.6642 13.5 18.25C13.5 17.8358 13.8358 17.5 14.25 17.5C14.6642 17.5 15 17.8358 15 18.25Z" fill={color}/>
	<Path d="M10.5 18.25C10.5 18.6642 10.1642 19 9.75 19C9.33579 19 9 18.6642 9 18.25C9 17.8358 9.33579 17.5 9.75 17.5C10.1642 17.5 10.5 17.8358 10.5 18.25Z" fill={color}/>
</Svg>;

export default OutlineDesignRadialBlur;
