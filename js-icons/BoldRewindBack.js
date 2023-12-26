import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldRewindBack = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21.9998 17.5737L21.9998 6.42632C21.9998 4.57895 20.3991 3.41122 19.0966 4.30838L13 8.76844L13 7.12303C13 5.50658 11.5327 4.48482 10.3388 5.26983L2.92136 10.1468C1.69288 10.9545 1.69288 13.0455 2.92135 13.8532L10.3388 18.7302C11.5327 19.5152 13 18.4934 13 16.877V15.2316L19.0966 19.6916C20.3991 20.5888 21.9998 19.4211 21.9998 17.5737Z" fill={color}/>
</Svg>;

export default BoldRewindBack;
