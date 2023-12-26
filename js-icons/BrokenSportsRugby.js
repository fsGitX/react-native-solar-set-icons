import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSportsRugby = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5.38064 5.38064C3.25185 7.50944 2.38717 10.5738 2.10976 13.4572M13.4572 2.10976C15.1273 1.94909 16.7367 1.98542 18.0686 2.08725C20.1483 2.24627 21.7537 3.85169 21.9127 5.93144C22.0146 7.26327 22.0509 8.87269 21.8902 10.5428M13.4572 2.10976L21.8902 10.5428M13.4572 2.10976C11.9685 2.25299 10.4315 2.55276 9 3.10225M21.8902 10.5428C21.6128 13.4262 20.7482 16.4906 18.6194 18.6194M10.5428 21.8902C8.87269 22.0509 7.26327 22.0146 5.93144 21.9127C3.85169 21.7537 2.24627 20.1483 2.08725 18.0686C1.98542 16.7367 1.94909 15.1273 2.10976 13.4572M10.5428 21.8902L2.10976 13.4572M10.5428 21.8902C12.0315 21.747 13.5685 21.4472 15 20.8978" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15.3098 8.69043L8.69043 15.3098M8.69043 12.4729L11.5273 15.3098M10.5817 10.5817L13.4185 13.4185M12.4729 8.69043L15.3098 11.5273" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenSportsRugby;