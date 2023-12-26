import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearLaptop2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20.5 15V10C20.5 7.17157 20.5 5.75736 19.6213 4.87868C18.7426 4 17.3284 4 14.5 4H9.5C6.67157 4 5.25736 4 4.37868 4.87868C3.5 5.75736 3.5 7.17157 3.5 10V15" stroke="black" strokeWidth="1.5"/>
	<Path d="M5 20H19C20.6569 20 22 18.6569 22 17V16C22 15.4477 21.5523 15 21 15H16.6667C16.2339 15 15.8129 15.1404 15.4667 15.4L14.5333 16.1C14.1871 16.3596 13.7661 16.5 13.3333 16.5H10.6667C10.2339 16.5 9.81286 16.3596 9.46667 16.1L8.53333 15.4C8.18714 15.1404 7.76607 15 7.33333 15H3C2.44772 15 2 15.4477 2 16V17C2 18.6569 3.34315 20 5 20Z" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearLaptop2;
