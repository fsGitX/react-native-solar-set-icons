import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldSafeCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.75 12C12.75 11.3096 13.3096 10.75 14 10.75C14.6904 10.75 15.25 11.3096 15.25 12C15.25 12.6904 14.6904 13.25 14 13.25C13.3096 13.25 12.75 12.6904 12.75 12Z" fill={color}/>
	<Path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM7.75 8C7.75 7.58579 7.41421 7.25 7 7.25C6.58579 7.25 6.25 7.58579 6.25 8L6.25 16C6.25 16.4142 6.58579 16.75 7 16.75C7.41421 16.75 7.75 16.4142 7.75 16L7.75 8ZM11.5303 8.46967C11.2374 8.17678 10.7626 8.17678 10.4697 8.46967C10.1768 8.76256 10.1768 9.23744 10.4697 9.53033L11.4697 10.5303C11.5126 10.5733 11.5595 10.6099 11.6091 10.6403C11.3806 11.0413 11.25 11.5054 11.25 12C11.25 12.4946 11.3806 12.9587 11.6091 13.3597C11.5595 13.3901 11.5126 13.4267 11.4697 13.4697L10.4697 14.4697C10.1768 14.7626 10.1768 15.2374 10.4697 15.5303C10.7626 15.8232 11.2374 15.8232 11.5303 15.5303L12.5303 14.5303C12.5733 14.4874 12.6099 14.4405 12.6403 14.3909C13.0413 14.6194 13.5054 14.75 14 14.75C14.4946 14.75 14.9587 14.6194 15.3597 14.3909C15.3901 14.4405 15.4267 14.4874 15.4697 14.5303L16.4697 15.5303C16.7626 15.8232 17.2374 15.8232 17.5303 15.5303C17.8232 15.2374 17.8232 14.7626 17.5303 14.4697L16.5303 13.4697C16.4874 13.4267 16.4405 13.3901 16.3909 13.3597C16.6194 12.9587 16.75 12.4946 16.75 12C16.75 11.5054 16.6194 11.0413 16.3909 10.6403C16.4405 10.6099 16.4874 10.5733 16.5303 10.5303L17.5303 9.53033C17.8232 9.23744 17.8232 8.76256 17.5303 8.46967C17.2374 8.17678 16.7626 8.17678 16.4697 8.46967L15.4697 9.46967C15.4267 9.51262 15.3901 9.55949 15.3597 9.60912C14.9587 9.38057 14.4946 9.25 14 9.25C13.5054 9.25 13.0413 9.38057 12.6403 9.60912C12.6099 9.55949 12.5733 9.51262 12.5303 9.46967L11.5303 8.46967Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldSafeCircle;
