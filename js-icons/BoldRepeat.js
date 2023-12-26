import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldRepeat = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.46967 2.46967C8.76256 2.17678 9.23744 2.17678 9.53033 2.46967L11.5303 4.46967C11.7448 4.68417 11.809 5.00676 11.6929 5.28701C11.5768 5.56727 11.3033 5.75 11 5.75H9C5.54822 5.75 2.75 8.54822 2.75 12C2.75 15.4517 5.54846 18.25 9.00028 18.25H9.5C9.91421 18.25 10.25 18.5858 10.25 19C10.25 19.4142 9.91421 19.75 9.5 19.75H9.00028C4.72011 19.75 1.25 16.2802 1.25 12C1.25 7.71979 4.71979 4.25 9 4.25H9.18934L8.46967 3.53033C8.17678 3.23744 8.17678 2.76256 8.46967 2.46967ZM13.75 5C13.75 4.58579 14.0858 4.25 14.5 4.25H15C19.2802 4.25 22.75 7.71979 22.75 12C22.75 16.2802 19.2802 19.75 15 19.75H14.8107L15.5303 20.4697C15.8232 20.7626 15.8232 21.2374 15.5303 21.5303C15.2374 21.8232 14.7626 21.8232 14.4697 21.5303L12.4697 19.5303C12.2552 19.3158 12.191 18.9932 12.3071 18.713C12.4232 18.4327 12.6967 18.25 13 18.25H15C18.4518 18.25 21.25 15.4518 21.25 12C21.25 8.54822 18.4518 5.75 15 5.75H14.5C14.0858 5.75 13.75 5.41421 13.75 5Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldRepeat;
