import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneMedicinePulse2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 15H5C5.63383 15 5.95074 15 6.23374 15.1213C6.51673 15.2426 6.73529 15.4721 7.17241 15.931L8.31402 17.1297C8.69807 17.533 8.8901 17.7346 9.12399 17.7189C9.35788 17.7032 9.52124 17.4777 9.84796 17.0268L13.4781 12.0161C13.8177 11.5473 13.9875 11.313 14.2282 11.3019C14.4688 11.2909 14.6594 11.5087 15.0405 11.9443L16.8179 13.9755C17.2591 14.4798 17.4797 14.7319 17.7751 14.8659C18.0705 15 18.4056 15 19.0756 15H22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" opacity="0.5" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneMedicinePulse2;
