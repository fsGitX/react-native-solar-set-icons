import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneUpload = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 15.9998V14.9998C22 12.1714 21.9998 10.7576 21.1211 9.87891C20.2424 9.00023 18.8282 9.00023 15.9998 9.00023H7.99977C5.17135 9.00023 3.75713 9.00023 2.87845 9.87891C2 10.7574 2 12.1706 2 14.9976V14.9998V15.9998C2 18.8282 2 20.2424 2.87868 21.1211C3.75736 21.9998 5.17157 21.9998 8 21.9998H16H16C18.8284 21.9998 20.2426 21.9998 21.1213 21.1211C22 20.2424 22 18.8282 22 15.9998Z" fill={color} opacity="0.5"/>
	<Path d="M12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 4.02744L14.4306 5.98809C14.7001 6.30259 15.1736 6.33901 15.4881 6.06944C15.8026 5.79988 15.839 5.3264 15.5695 5.01191L12.5695 1.51191C12.427 1.34567 12.219 1.25 12 1.25C11.7811 1.25 11.5731 1.34567 11.4306 1.51191L8.43057 5.01191C8.161 5.3264 8.19743 5.79988 8.51192 6.06944C8.82641 6.33901 9.29989 6.30259 9.56946 5.98809L11.25 4.02744L11.25 15C11.25 15.4142 11.5858 15.75 12 15.75Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneUpload;
