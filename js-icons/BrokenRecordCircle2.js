import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenRecordCircle2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C12.7286 8 13.4117 8.19479 14 8.53513" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenRecordCircle2;
