import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldCalculatorMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM8.75 6.49998C8.75 6.08576 8.41421 5.74998 8 5.74998C7.58579 5.74998 7.25 6.08576 7.25 6.49998L7.25 7.74999H6C5.58579 7.74999 5.25 8.08578 5.25 8.49999C5.25 8.91421 5.58579 9.24999 6 9.24999L7.25 9.24999V10.5C7.25 10.9142 7.58579 11.25 8 11.25C8.41421 11.25 8.75 10.9142 8.75 10.5V9.24999H10C10.4142 9.24999 10.75 8.91421 10.75 8.49999C10.75 8.08578 10.4142 7.74999 10 7.74999H8.75L8.75 6.49998ZM14 7.74998C13.5858 7.74998 13.25 8.08576 13.25 8.49998C13.25 8.91419 13.5858 9.24998 14 9.24998H18C18.4142 9.24998 18.75 8.91419 18.75 8.49998C18.75 8.08576 18.4142 7.74998 18 7.74998H14ZM14 13.75C13.5858 13.75 13.25 14.0858 13.25 14.5C13.25 14.9142 13.5858 15.25 14 15.25H18C18.4142 15.25 18.75 14.9142 18.75 14.5C18.75 14.0858 18.4142 13.75 18 13.75H14ZM7.03033 13.9697C6.73744 13.6768 6.26256 13.6768 5.96967 13.9697C5.67678 14.2626 5.67678 14.7374 5.96967 15.0303L6.93935 16L5.96968 16.9697C5.67679 17.2626 5.67679 17.7374 5.96968 18.0303C6.26258 18.3232 6.73745 18.3232 7.03034 18.0303L8.00001 17.0607L8.96966 18.0303C9.26255 18.3232 9.73742 18.3232 10.0303 18.0303C10.3232 17.7374 10.3232 17.2626 10.0303 16.9697L9.06067 16L10.0303 15.0303C10.3232 14.7374 10.3232 14.2626 10.0303 13.9697C9.73744 13.6768 9.26256 13.6768 8.96967 13.9697L8.00001 14.9393L7.03033 13.9697ZM14 16.75C13.5858 16.75 13.25 17.0858 13.25 17.5C13.25 17.9142 13.5858 18.25 14 18.25H18C18.4142 18.25 18.75 17.9142 18.75 17.5C18.75 17.0858 18.4142 16.75 18 16.75H14Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldCalculatorMinimalistic;
