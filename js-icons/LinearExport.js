import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearExport = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 14L12 4M12 4L15 7M12 4L9 7" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearExport;
