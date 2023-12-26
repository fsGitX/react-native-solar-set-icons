import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneLogin2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M15.9998 2L14.9998 2C12.1714 2 10.7576 2.00023 9.87891 2.87891C9.00023 3.75759 9.00023 5.1718 9.00023 8.00023L9.00023 16.0002C9.00023 18.8287 9.00023 20.2429 9.87891 21.1215C10.7574 22 12.1706 22 14.9976 22L14.9998 22L15.9998 22C18.8282 22 20.2424 22 21.1211 21.1213C21.9998 20.2426 21.9998 18.8284 21.9998 16L21.9998 8L21.9998 7.99998C21.9998 5.17157 21.9998 3.75736 21.1211 2.87868C20.2424 2 18.8282 2 15.9998 2Z" fill={color} opacity="0.5"/>
	<Path d="M1.25098 11.999C1.25098 11.5848 1.58676 11.249 2.00098 11.249L13.9735 11.249L12.0129 9.56845C11.6984 9.29889 11.662 8.82541 11.9315 8.51092C12.2011 8.19642 12.6746 8.16 12.9891 8.42957L16.4891 11.4296C16.6553 11.5721 16.751 11.7801 16.751 11.999C16.751 12.218 16.6553 12.426 16.4891 12.5685L12.9891 15.5685C12.6746 15.838 12.2011 15.8016 11.9315 15.4871C11.662 15.1726 11.6984 14.6991 12.0129 14.4296L13.9735 12.749L2.00098 12.749C1.58676 12.749 1.25098 12.4132 1.25098 11.999Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneLogin2;
