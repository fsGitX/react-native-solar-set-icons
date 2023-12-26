import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneVideoRewindBack = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.0002 8.76844L19.0969 4.30838C20.3994 3.41122 22 4.57895 22 6.42632L22 17.5737C22 19.4211 20.3994 20.5888 19.0969 19.6916L13.0002 15.2316" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M2.92136 10.1468C1.69288 10.9545 1.69288 13.0455 2.92135 13.8532L10.3388 18.7302C11.5327 19.5152 13 18.4934 13 16.877V7.12303C13 5.50658 11.5327 4.48482 10.3388 5.26983L2.92136 10.1468Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneVideoRewindBack;
