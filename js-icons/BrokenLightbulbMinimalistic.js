import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenLightbulbMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10 19.5H14M10.6667 22H13.3333" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15 2.60222C14.0907 2.21646 13.0736 2 12 2C8.13401 2 5 4.8069 5 8.21807L5.00007 8.30193C5.00875 10.2984 5.86939 12.2187 7.41058 13.6805L8.51463 14.7196C8.82437 15.0112 9 15.4177 9 15.843C9 16.482 9.518 17 10.157 17H13.843C14.482 17 15 16.482 15 15.843C15 15.4177 15.1756 15.0112 15.4854 14.7196L16.5894 13.6805C18.1306 12.2187 18.9912 10.2984 18.9999 8.30193L19 8.21807C19 7.43838 18.8363 6.69025 18.5375 6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenLightbulbMinimalistic;
