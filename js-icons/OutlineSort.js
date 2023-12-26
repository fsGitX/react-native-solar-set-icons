import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineSort = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22.75 7C22.75 7.41421 22.4142 7.75 22 7.75L2 7.75C1.58579 7.75 1.25 7.41421 1.25 7C1.25 6.58579 1.58579 6.25 2 6.25L22 6.25C22.4142 6.25 22.75 6.58579 22.75 7Z" fill={color} fillRule="evenodd"/>
	<Path d="M19.75 12C19.75 12.4142 19.4142 12.75 19 12.75L5 12.75C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25L19 11.25C19.4142 11.25 19.75 11.5858 19.75 12Z" fill={color} fillRule="evenodd"/>
	<Path d="M16.75 17C16.75 17.4142 16.4142 17.75 16 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H16C16.4142 16.25 16.75 16.5858 16.75 17Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineSort;
