import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenRecordCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18.5002 11.9999C18.5002 13.3807 17.381 14.4999 16.0002 14.4999C14.6195 14.4999 13.5002 13.3807 13.5002 11.9999C13.5002 10.6192 14.6195 9.49994 16.0002 9.49994C17.381 9.49994 18.5002 10.6192 18.5002 11.9999Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M10.5 12C10.5 13.3807 9.38071 14.5 8 14.5C6.61929 14.5 5.5 13.3807 5.5 12C5.5 10.6193 6.61929 9.5 8 9.5C9.38071 9.5 10.5 10.6193 10.5 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M8 14.5H16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenRecordCircle;
