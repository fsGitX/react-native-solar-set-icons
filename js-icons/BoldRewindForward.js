import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldRewindForward = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2.00024 17.5737L2.00025 6.42632C2.00025 4.57895 3.60089 3.41122 4.90337 4.30838L11 8.76844L11 7.12303C11 5.50658 12.4673 4.48482 13.6612 5.26983L21.0787 10.1468C22.3071 10.9545 22.3071 13.0455 21.0787 13.8532L13.6612 18.7302C12.4673 19.5152 11 18.4934 11 16.877V15.2316L4.90337 19.6916C3.60089 20.5888 2.00024 19.4211 2.00024 17.5737Z" fill={color}/>
</Svg>;

export default BoldRewindForward;
