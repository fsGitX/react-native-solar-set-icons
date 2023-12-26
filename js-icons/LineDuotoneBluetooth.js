import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneBluetooth = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.2633 8.26238L11 12V5.22457C11 3.33816 11 2.39496 11.6047 2.08561C12.2093 1.77625 12.9813 2.32448 14.5253 3.42093L16.2633 4.6551C17.4211 5.47731 18 5.88842 18 6.45874C18 7.02907 17.4211 7.44017 16.2633 8.26238Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M16.2633 19.3449L14.5253 20.5791C12.9813 21.6755 12.2093 22.2238 11.6047 21.9144C11 21.605 11 20.6618 11 18.7754V12L16.2633 15.7376C17.4211 16.5598 18 16.9709 18 17.5413C18 18.1116 17.4211 18.5227 16.2633 19.3449Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M6 15.5L11 12L6 8.5" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneBluetooth;
