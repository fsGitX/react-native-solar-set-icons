import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneTextItalic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9 0.999775H14.9768C14.992 0.999425 15.0072 0.999423 15.0225 0.999775H21C21.5523 0.999775 22 1.44749 22 1.99977C22 2.55206 21.5523 2.99977 21 2.99977H15.744H13.656H9C8.44772 2.99977 8 2.55206 8 1.99977C8 1.44749 8.44772 0.999775 9 0.999775ZM8.25597 20.9998H3C2.44772 20.9998 2 21.4475 2 21.9998C2 22.5521 2.44772 22.9998 3 22.9998H8.97753C8.99281 23.0001 9.00805 23.0001 9.02325 22.9998H15C15.5523 22.9998 16 22.5521 16 21.9998C16 21.4475 15.5523 20.9998 15 20.9998H10.344H8.25597Z" fill={color} fillRule="evenodd"/>
	<Path d="M13.6559 3L8.25586 21H10.3439L15.7439 3H13.6559Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneTextItalic;
