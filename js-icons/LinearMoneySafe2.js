import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearMoneySafe2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M5 11C5 8.17157 5 6.75736 5.87868 5.87868C6.75736 5 8.17157 5 11 5H13C15.8284 5 17.2426 5 18.1213 5.87868C19 6.75736 19 8.17157 19 11V13C19 15.8284 19 17.2426 18.1213 18.1213C17.2426 19 15.8284 19 13 19H11C8.17157 19 6.75736 19 5.87868 18.1213C5 17.2426 5 15.8284 5 13V11Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z" fill={color}/>
	<Path d="M12 12V8" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 12L15.5 13.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 12L8.5 13.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M4.5 7V10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M4.5 14V17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearMoneySafe2;
