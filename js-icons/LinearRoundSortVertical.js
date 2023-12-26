import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearRoundSortVertical = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1.5"/>
	<Path d="M9.5 8L9.5 16M9.5 16L7 13.25M9.5 16L12 13.25" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M14.5 16L14.5 8M14.5 8L12 10.75M14.5 8L17 10.75" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearRoundSortVertical;
