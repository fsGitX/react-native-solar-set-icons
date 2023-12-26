import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldArrowLeftDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967C18.2374 5.17678 17.7626 5.17678 17.4697 5.46967L10.5 12.4393L6.53033 8.46967C6.31583 8.25517 5.99324 8.191 5.71299 8.30709C5.43273 8.42318 5.25 8.69665 5.25 9V18C5.25 18.4142 5.58579 18.75 6 18.75L15 18.75C15.3033 18.75 15.5768 18.5673 15.6929 18.287C15.809 18.0068 15.7448 17.6842 15.5303 17.4697L11.5607 13.5L18.5303 6.53033Z" fill={color}/>
</Svg>;

export default BoldArrowLeftDown;
