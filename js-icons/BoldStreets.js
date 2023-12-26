import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldStreets = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.46447 3.46447C2 4.92893 2 7.28596 2 12C2 16.134 2 18.4553 2.98767 19.9517L19.9517 2.98766C18.4553 2 16.134 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z" fill={color}/>
	<Path d="M21.0123 4.04833L13.0607 12L21.0123 19.9517C22 18.4553 22 16.134 22 12C22 7.866 22 5.54466 21.0123 4.04833Z" fill={color}/>
	<Path d="M12 13.0607L4.04833 21.0123C5.54466 22 7.866 22 12 22C16.134 22 18.4553 22 19.9517 21.0123L12 13.0607Z" fill={color}/>
</Svg>;

export default BoldStreets;
