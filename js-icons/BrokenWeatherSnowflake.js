import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenWeatherSnowflake = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 2V18M12 22V18M12 18L15 21M12 18L9 21M15 3L12 6L9 3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3.33978 6.99993L6.80389 8.99993M6.80389 8.99993L17.1962 14.9999M6.80389 8.99993L5.70581 4.90186M6.80389 8.99993L2.70581 10.098M17.1962 14.9999L20.6603 16.9999M17.1962 14.9999L21.2943 13.9019M17.1962 14.9999L18.2943 19.098" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20.66 6.99993L17.1959 8.99993M17.1959 8.99993L6.80364 14.9999M17.1959 8.99993L18.294 4.90186M17.1959 8.99993L21.294 10.098M6.80364 14.9999L3.33954 16.9999M6.80364 14.9999L2.70557 13.9019M6.80364 14.9999L5.70557 19.098" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenWeatherSnowflake;
