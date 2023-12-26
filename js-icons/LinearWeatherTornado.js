import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearWeatherTornado = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 3C7.02944 3 3 3.67157 3 4.5C3 5.32843 7.02944 6 12 6C16.9706 6 21 5.32843 21 4.5C21 3.97993 19.412 3.52168 17 3.25259" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20 8C20 8 17.2089 9 11.7241 9C6.23938 9 4 8 4 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16 14C16 14 14.7424 14.5 12 14.5C9.25762 14.5 8 14 8 14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16 16.5C15.2525 16.7554 14.3516 17 13 17C11.6484 17 10.6575 16.8786 10 16.7554" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11.7188 19.4609C12.103 19.4853 12.5297 19.5 13.0002 19.5C13.5738 19.5 14.0662 19.456 14.5002 19.3857" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M18 11C18 11 17.4848 12 12 12M6 11C6 11 6.21904 11.4251 7.8918 11.721" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13 22C13 22 13.3047 22 13.5 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearWeatherTornado;
