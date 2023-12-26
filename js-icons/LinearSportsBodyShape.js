import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearSportsBodyShape = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20 2C20 2 18 6.68839 18 10.5714C18 11.8147 18.426 12.855 19 13.8912C19.6606 15.0836 20.5171 16.2704 21.1457 17.7543C21.6446 18.932 22 20.2968 22 22" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M4 2C4 2 6 6.68839 6 10.5714C6 11.8147 5.57398 12.855 5.00001 13.8912C4.33945 15.0836 3.48291 16.2704 2.85426 17.7543C2.35537 18.932 2 20.2968 2 22" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M6 13H18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6 11H18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 22C12.5 20.5 15 17.5 21 17.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 22C11.5 20.5 9 17.5 3 17.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearSportsBodyShape;
