import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneSIMCards = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.17157 20.8284C4.34315 22 6.22876 22 10 22C13.7712 22 15.6569 22 16.8284 20.8284C18 19.6569 18 17.7712 18 14C18 12.9746 17.5895 11.9937 16.8644 11.2686L12.7314 7.13555C12.0063 6.41048 11.0254 6 10 6C6.22876 6 4.34315 6 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M18.0001 17.8985C19.3002 17.7706 20.1753 17.4816 20.8285 16.8284C22.0001 15.6569 22.0001 13.7712 22.0001 10C22.0001 8.9746 21.5896 7.99369 20.8645 7.26862L16.7314 3.13555C16.0064 2.41048 15.0255 2 14.0001 2C10.2288 2 8.34322 2 7.17164 3.17157C6.51846 3.82475 6.22944 4.69989 6.10156 6" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M10 14H9C8.05719 14 7.58579 14 7.29289 14.2929C7 14.5858 7 15.0572 7 16V17C7 17.9428 7 18.4142 7.29289 18.7071C7.58579 19 8.05719 19 9 19H10M10 14H11C11.9428 14 12.4142 14 12.7071 14.2929C13 14.5858 13 15.0572 13 16V16.5M10 14V16.5M10 19H11C11.9428 19 12.4142 19 12.7071 18.7071C13 18.4142 13 17.9428 13 17V16.5M10 19V16.5M10 16.5H13" opacity="0.5" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneSIMCards;
