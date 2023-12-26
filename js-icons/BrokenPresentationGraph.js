import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenPresentationGraph = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 2H22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 10.5L10.2929 9.20711C10.6262 8.87377 10.7929 8.70711 11 8.70711C11.2071 8.70711 11.3738 8.87377 11.7071 9.20711L12.2929 9.79289C12.6262 10.1262 12.7929 10.2929 13 10.2929C13.2071 10.2929 13.3738 10.1262 13.7071 9.79289L15 8.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 21L12 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 22L12 21" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 22L12 21" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M4 2V10.5C4 13.5641 4 15.0962 5.00421 16.0481C6.00841 17 7.62465 17 10.8571 17H13.1429C16.3753 17 17.9916 17 18.9958 16.0481C20 15.0962 20 13.5641 20 10.5V10M20 2V6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenPresentationGraph;
