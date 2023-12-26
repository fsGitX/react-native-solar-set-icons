import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenTurntableMusicNote = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12M21.9948 10C21.9658 6.58687 21.7764 4.70529 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2.49073 4.43821 2.16444 5.80655 2.0551 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 20V16V12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 15C20.3431 15 19 13.6569 19 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z" stroke="black" strokeWidth="1.5"/>
	<circle cx="17" cy="20" r="2" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default BrokenTurntableMusicNote;