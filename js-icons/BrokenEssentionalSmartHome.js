import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenEssentionalSmartHome = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22.0001 12.2041V13.7251C22.0001 17.626 22.0001 19.5765 20.8285 20.7883C19.657 22.0002 17.7713 22.0002 14.0001 22.0002M21.4809 7.82292C20.9617 6.87439 20.0132 6.2857 18.1161 5.10831L16.1161 3.86705C14.1107 2.62247 13.108 2.00018 12.0001 2.00018C10.8922 2.00018 9.8895 2.62247 7.88414 3.86705L5.88415 5.10831C3.98706 6.2857 3.03851 6.87439 2.51931 7.82292C2.20174 8.40311 2.07841 9.05651 2.03052 10.0002" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11 22C11 17.0294 6.97056 13 2 13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 22C8 18.6863 5.31371 16 2 16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 22C5 20.3431 3.65685 19 2 19" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenEssentionalSmartHome;
