import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneCloud = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.381 9.02738C14.9767 8.81929 15.6178 8.70605 16.2857 8.70605C16.9404 8.70605 17.5693 8.81485 18.1551 9.01515C20.393 9.78041 22 11.8813 22 14.3531C22 17.4719 19.4416 20.0002 16.2857 20.0002H6.28571C3.91878 20.0002 2 18.104 2 15.7649C2 13.4258 3.91878 11.5296 6.28571 11.5296C6.56983 11.5296 6.8475 11.5569 7.11616 11.609C7.68059 11.7186 8.20528 11.9376 8.66667 12.2428" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7.11622 11.6089C6.88712 10.9978 6.76196 10.3369 6.76196 9.64706C6.76196 6.52827 9.32034 4 12.4762 4C15.4159 4 17.8372 6.19371 18.1551 9.01498" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneCloud;
