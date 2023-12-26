import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenHanger = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.53589 6.90909C9.53589 5.85473 10.4868 5 11.6599 5C12.8329 5 13.7839 5.85473 13.7839 6.90909C13.7839 7.40532 13.6046 7.85733 13.2925 8.19682C12.6948 8.84706 11.8015 9.50197 11.8015 10.3455V10.6299M11.8015 10.6299C12.533 10.6214 13.2674 10.8246 13.8845 11.2406L16 12.6666M11.8015 10.6299C11.076 10.6383 10.3534 10.855 9.751 11.2787L2.65531 16.27C1.38322 17.1648 2.08721 19 3.70254 19H20.2975C21.9305 19 22.6234 17.1315 21.317 16.2509L19 14.689" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenHanger;
