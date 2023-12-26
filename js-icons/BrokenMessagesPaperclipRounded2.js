import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenMessagesPaperclipRounded2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19.5646 16.1299C22.8118 12.8975 22.8118 7.6567 19.5646 4.4243C16.3175 1.1919 11.0528 1.1919 7.80563 4.4243M15.8899 19.7878C14.2664 21.404 11.634 21.404 10.0104 19.7878C8.38687 18.1716 8.38687 15.5513 10.0104 13.9351L12.9502 11.0087M4.13095 8.08229C1.28968 10.9106 1.28968 15.4963 4.13095 18.3247" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenMessagesPaperclipRounded2;
