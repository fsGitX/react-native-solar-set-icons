import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneShopMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21 22H3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 22V15" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 22V15" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16.5279 2H7.47226C6.26944 2 5.66803 2 5.18473 2.2987C4.70142 2.5974 4.43247 3.13531 3.89455 4.21114L2.49094 7.75929C2.16665 8.57905 1.88291 9.54525 2.42879 10.2375C2.79501 10.7019 3.36269 11 4.00004 11C5.1046 11 6.00004 10.1046 6.00004 9C6.00004 10.1046 6.89547 11 8.00004 11C9.1046 11 10 10.1046 10 9C10 10.1046 10.8955 11 12 11C13.1046 11 14 10.1046 14 9C14 10.1046 14.8955 11 16 11C17.1046 11 18 10.1046 18 9C18 10.1046 18.8955 11 20 11C20.6374 11 21.2051 10.7019 21.5713 10.2375C22.1172 9.54525 21.8335 8.57905 21.5092 7.75929L20.1056 4.21114C19.5677 3.13531 19.2987 2.5974 18.8154 2.2987C18.3321 2 17.7307 2 16.5279 2Z" stroke="black" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneShopMinimalistic;
