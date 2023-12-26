import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneEssentionalSliderVerticalMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5.84619 8C5.84619 5.17157 5.84619 3.75736 6.7474 2.87868C7.64861 2 9.09909 2 12 2C14.901 2 16.3515 2 17.2527 2.87868C18.1539 3.75736 18.1539 5.17157 18.1539 8V16C18.1539 18.8284 18.1539 20.2426 17.2527 21.1213C16.3515 22 14.901 22 12 22C9.09909 22 7.64861 22 6.7474 21.1213C5.84619 20.2426 5.84619 18.8284 5.84619 16V8Z" fill={color}/>
	<Path d="M2.76923 3.75C3.19407 3.75 3.53846 4.08579 3.53846 4.5V19.5C3.53846 19.9142 3.19407 20.25 2.76923 20.25C2.3444 20.25 2 19.9142 2 19.5V4.5C2 4.08579 2.3444 3.75 2.76923 3.75ZM21.2308 3.75C21.6556 3.75 22 4.08579 22 4.5V19.5C22 19.9142 21.6556 20.25 21.2308 20.25C20.8059 20.25 20.4615 19.9142 20.4615 19.5V4.5C20.4615 4.08579 20.8059 3.75 21.2308 3.75Z" fill={color} fillRule="evenodd" opacity="0.5"/>
</Svg>;

export default BoldDuotoneEssentionalSliderVerticalMinimalistic;
