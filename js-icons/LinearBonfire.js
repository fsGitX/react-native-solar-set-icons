import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearBonfire = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18 8.80745C18 13.7615 13.7333 15 11.6 15C9.73333 15 6 13.7615 6 8.80745C6 6.71017 7.20839 5.35826 8.26099 4.65274C8.79638 4.29388 9.48354 4.55201 9.57296 5.17624C9.75127 6.421 10.8777 7.34944 11.5596 6.27998C12.1424 5.36614 12.3529 4.13169 12.3529 3.38896C12.3529 2.28965 13.503 1.59108 14.4009 2.2646C16.1512 3.5774 18 5.776 18 8.80745Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M20 15L4 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M4 15L9 17.1875M20 22L14.5 19.5938" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15 10C14.8 10.6667 13.92 12 12 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearBonfire;
