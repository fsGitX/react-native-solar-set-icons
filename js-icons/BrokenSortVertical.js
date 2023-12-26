import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSortVertical = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16 18L16 16M16 6L20 10.125M16 6L12 10.125M16 6L16 13" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M8 18L12 13.875M8 18L4 13.875M8 18L8 11M8 6V8" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenSortVertical;
