import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearShopMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21 22H3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 22V15" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 22V15" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16.5279 2H7.47223C6.26941 2 5.668 2 5.1847 2.2987C4.70139 2.5974 4.43243 3.13531 3.89452 4.21114L2.49091 7.75929C2.16662 8.57905 1.88288 9.54525 2.42876 10.2375C2.79498 10.7019 3.36266 11 4 11C5.10457 11 6 10.1046 6 9C6 10.1046 6.89544 11 8 11C9.10457 11 10 10.1046 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 10.1046 14.8954 11 16 11C17.1046 11 18 10.1046 18 9C18 10.1046 18.8954 11 20 11C20.6374 11 21.2051 10.7019 21.5713 10.2375C22.1172 9.54525 21.8335 8.57905 21.5092 7.75929L20.1056 4.21114C19.5677 3.13531 19.2987 2.5974 18.8154 2.2987C18.3321 2 17.7307 2 16.5279 2Z" stroke="black" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearShopMinimalistic;
