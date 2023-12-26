import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneAstronomyStar = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 20V17.6M12 6.4V4M20 12H17.6M6.4 12H4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17.6569 6.34277L15.9599 8.03983M8.04029 15.9594L6.34323 17.6565M6.34302 6.34295L8.04007 8.04001M15.9597 15.9596L17.6567 17.6567" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneAstronomyStar;
