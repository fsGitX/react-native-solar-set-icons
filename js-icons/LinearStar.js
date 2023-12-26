import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearStar = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 20V17.6M12 6.4V4M20 12H17.6M6.4 12H4M17.6569 6.34315L15.9598 8.0402M8.0402 15.9598L6.34315 17.6569M6.34293 6.34332L8.03999 8.04038M15.9596 15.96L17.6566 17.657" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearStar;
