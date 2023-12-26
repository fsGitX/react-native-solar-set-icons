import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldWidget3 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M1.75 6.5C1.75 3.87665 3.87665 1.75 6.5 1.75C9.12335 1.75 11.25 3.87665 11.25 6.5C11.25 9.12335 9.12335 11.25 6.5 11.25C3.87665 11.25 1.75 9.12335 1.75 6.5Z" fill={color} fillRule="evenodd"/>
	<Path d="M12.75 17.5C12.75 14.8766 14.8766 12.75 17.5 12.75C20.1234 12.75 22.25 14.8766 22.25 17.5C22.25 20.1234 20.1234 22.25 17.5 22.25C14.8766 22.25 12.75 20.1234 12.75 17.5Z" fill={color} fillRule="evenodd"/>
	<Path d="M22.25 6.5C22.25 3.87665 20.1234 1.75 17.5 1.75C14.8766 1.75 12.75 3.87665 12.75 6.5C12.75 9.12335 14.8766 11.25 17.5 11.25C20.1234 11.25 22.25 9.12335 22.25 6.5Z" fill={color} fillRule="evenodd"/>
	<Path d="M11.25 17.5C11.25 14.8766 9.12335 12.75 6.5 12.75C3.87665 12.75 1.75 14.8766 1.75 17.5C1.75 20.1234 3.87665 22.25 6.5 22.25C9.12335 22.25 11.25 20.1234 11.25 17.5Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldWidget3;
