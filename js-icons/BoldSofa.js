import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldSofa = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7 12V13H12H17V12C17 10.3454 18.3395 9.00368 19.9932 9.00001C19.9847 8.67199 19.9657 8.43379 19.9231 8.21964C19.6075 6.63288 18.3671 5.39249 16.7804 5.07686C16.394 5 15.9293 5 15 5H12H9C8.07069 5 7.60603 5 7.21964 5.07686C5.63288 5.39249 4.39249 6.63288 4.07686 8.21964C4.03426 8.43379 4.01527 8.67199 4.00681 9.00001C5.66053 9.00368 7 10.3454 7 12Z" fill={color}/>
	<Path d="M18.4444 18H5.55556C5.27849 18 5.00883 17.9683 4.75 17.9084V19C4.75 19.4142 4.41421 19.75 4 19.75C3.58579 19.75 3.25 19.4142 3.25 19V17.1513C2.48508 16.4991 2 15.5284 2 14.4444V12C2 10.8954 2.89543 10 4 10C5.10457 10 6 10.8954 6 12V13.2C6 13.6418 6.35817 14 6.8 14H17.2C17.6418 14 18 13.6418 18 13.2V12C18 10.8954 18.8954 10 20 10C21.1046 10 22 10.8954 22 12V14.4444C22 15.5284 21.5149 16.4991 20.75 17.1513V19C20.75 19.4142 20.4142 19.75 20 19.75C19.5858 19.75 19.25 19.4142 19.25 19V17.9084C18.9912 17.9683 18.7215 18 18.4444 18Z" fill={color}/>
</Svg>;

export default BoldSofa;
