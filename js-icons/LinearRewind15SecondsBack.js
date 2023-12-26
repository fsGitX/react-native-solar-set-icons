import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearRewind15SecondsBack = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14 4.5L12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 7.89936 4.46819 4.3752 8 2.83209" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M16.5 8.5H13.8604C13.6452 8.5 13.4541 8.63772 13.386 8.84189L12.7194 10.8419C12.6114 11.1657 12.8524 11.5 13.1937 11.5H14.5C15.6046 11.5 16.5 12.3954 16.5 13.5C16.5 14.6046 15.6046 15.5 14.5 15.5H12.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7.5 10.5L10 8.5V15.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearRewind15SecondsBack;