import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenDesignMirrorRight = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 21C16.2426 21 18.364 21 19.682 19.682C21 18.364 21 16.2426 21 12M12 3C16.2426 3 18.364 3 19.682 4.31802C20.4976 5.13363 20.8085 6.25685 20.927 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15L3 9C3 6.17157 3 4.75736 3.87868 3.87868C4.75736 3 6.17157 3 9 3L13 3" stroke="black" strokeDasharray="2.5 3" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 22L12 2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenDesignMirrorRight;
