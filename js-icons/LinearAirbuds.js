import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearAirbuds = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.5 18V18.75C13.5 19.9926 14.5074 21 15.75 21C16.9926 21 18 19.9926 18 18.75V18M13.5 18V8.3125C13.5 8.02234 13.5 7.87726 13.506 7.75466C13.6322 5.18614 15.6861 3.13221 18.2547 3.00602C18.3773 3 18.5223 3 18.8125 3C18.9866 3 19.0736 3 19.1472 3.00361C20.6883 3.07932 21.9207 4.31169 21.9964 5.8528C22 5.92635 22 6.0134 22 6.1875V8.3C22 9.95685 20.6569 11.3 19 11.3C18.4477 11.3 18 11.7477 18 12.3V18M13.5 18H18" stroke="black" strokeWidth="1.5"/>
	<Path d="M10.5 18V18.75C10.5 19.9926 9.49264 21 8.25 21C7.00736 21 6 19.9926 6 18.75V18M10.5 18V8.3125C10.5 8.02234 10.5 7.87726 10.494 7.75466C10.3678 5.18614 8.31386 3.13221 5.74534 3.00602C5.62274 3 5.47766 3 5.1875 3C5.0134 3 4.92635 3 4.8528 3.00361C3.31169 3.07932 2.07932 4.31169 2.00361 5.8528C2 5.92635 2 6.0134 2 6.1875V8.3C2 9.95685 3.34315 11.3 5 11.3C5.55228 11.3 6 11.7477 6 12.3V18M10.5 18H6" stroke="black" strokeWidth="1.5"/>
	<Path d="M19.5 6V8.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M4.5 6V8.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearAirbuds;
