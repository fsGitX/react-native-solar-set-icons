import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineTextBold = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7.6087 1.25C5.75374 1.25 4.25 2.75374 4.25 4.6087V19.9412C4.25 21.4924 5.50755 22.75 7.05882 22.75H14C17.1756 22.75 19.75 20.1756 19.75 17C19.75 14.3824 18.0008 12.1732 15.6076 11.4777C16.9142 10.4237 17.75 8.80946 17.75 7C17.75 3.82436 15.1756 1.25 12 1.25H7.6087ZM12 11.25C14.3472 11.25 16.25 9.34721 16.25 7C16.25 4.65279 14.3472 2.75 12 2.75H7.6087C6.58217 2.75 5.75 3.58217 5.75 4.6087V11.25H12ZM5.75 12.75V19.9412C5.75 20.664 6.33598 21.25 7.05882 21.25H14C16.3472 21.25 18.25 19.3472 18.25 17C18.25 14.6528 16.3472 12.75 14 12.75H5.75Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineTextBold;
