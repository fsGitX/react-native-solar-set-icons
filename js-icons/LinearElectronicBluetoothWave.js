import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearElectronicBluetoothWave = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.2633 8.26238L8 12V5.22457C8 3.33816 8 2.39496 8.60465 2.08561C9.2093 1.77625 9.98131 2.32448 11.5253 3.42093L13.2633 4.6551C14.4211 5.47731 15 5.88842 15 6.45874C15 7.02907 14.4211 7.44017 13.2633 8.26238Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M13.2633 19.3449L11.5253 20.5791C9.98131 21.6755 9.2093 22.2238 8.60465 21.9144C8 21.605 8 20.6618 8 18.7754V12L13.2633 15.7376C14.4211 16.5598 15 16.9709 15 17.5413C15 18.1116 14.4211 18.5227 13.2633 19.3449Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M2.5699 14.8856C2.23057 15.1231 2.14804 15.5908 2.38558 15.9301C2.62311 16.2694 3.09076 16.352 3.4301 16.1144L2.5699 14.8856ZM3.4301 16.1144L8.4301 12.6144L7.5699 11.3856L2.5699 14.8856L3.4301 16.1144Z" fill={color}/>
	<Path d="M2.5699 9.11442C2.23057 8.87689 2.14804 8.40924 2.38558 8.0699C2.62311 7.73057 3.09076 7.64804 3.4301 7.88558L2.5699 9.11442ZM3.4301 7.88558L8.4301 11.3856L7.5699 12.6144L2.5699 9.11442L3.4301 7.88558Z" fill={color}/>
	<Path d="M19 5C19 5 21 7.1 21 12C21 16.9 19 19 19 19" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 8C17 8 18 9.9 18 12C18 14.1 17 16 17 16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearElectronicBluetoothWave;
