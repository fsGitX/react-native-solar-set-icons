import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenBill = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21 6V3.50519C21 2.92196 20.3109 2.61251 19.875 2.99999C19.2334 3.57029 18.2666 3.57029 17.625 2.99999C16.9834 2.42969 16.0166 2.42969 15.375 2.99999C14.7334 3.57029 13.7666 3.57029 13.125 2.99999C12.4834 2.42969 11.5166 2.42969 10.875 2.99999C10.2334 3.57029 9.26659 3.57029 8.625 2.99999C7.98341 2.42969 7.01659 2.42969 6.375 2.99999C5.73341 3.57029 4.76659 3.57029 4.125 2.99999C3.68909 2.61251 3 2.92196 3 3.50519V14M21 10V20.495C21 21.0782 20.3109 21.3876 19.875 21.0002C19.2334 20.4299 18.2666 20.4299 17.625 21.0002C16.9834 21.5705 16.0166 21.5705 15.375 21.0002C14.7334 20.4299 13.7666 20.4299 13.125 21.0002C12.4834 21.5705 11.5166 21.5705 10.875 21.0002C10.2334 20.4299 9.26659 20.4299 8.625 21.0002C7.98341 21.5705 7.01659 21.5705 6.375 21.0002C5.73341 20.4299 4.76659 20.4299 4.125 21.0002C3.68909 21.3876 3 21.0782 3 20.495V18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7.5 15.5H11.5M16.5 15.5H14.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16.5 12H12.5M7.5 12H9.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7.5 8.5H16.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenBill;