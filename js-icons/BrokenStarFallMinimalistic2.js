import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenStarFallMinimalistic2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.23163 8.61762C7.26389 9.06284 6.28001 9.28545 6.04594 10.0382C5.81186 10.7909 6.4826 11.5753 7.82408 13.1439L8.17113 13.5498C8.55234 13.9955 8.74294 14.2184 8.82869 14.4942C8.91444 14.7699 8.88562 15.0673 8.82799 15.662L8.77552 16.2035C8.5727 18.2965 8.4713 19.343 9.08412 19.8082C9.69694 20.2734 10.6181 19.8492 12.4605 19.0009L12.9372 18.7815C13.4607 18.5404 13.7225 18.4199 14 18.4199C14.2775 18.4199 14.5393 18.5404 15.0628 18.7815L15.5395 19.0009C17.3819 19.8492 18.3031 20.2734 18.9159 19.8082C19.5287 19.343 19.4273 18.2965 19.2245 16.2035M20.1759 13.1439C21.5174 11.5753 22.1881 10.7909 21.9541 10.0382C21.72 9.28545 20.7361 9.06284 18.7684 8.61762L18.2593 8.50244C17.7001 8.37592 17.4205 8.31266 17.196 8.14225C16.9716 7.97183 16.8276 7.71355 16.5396 7.19699L16.2775 6.7267C15.2641 4.9089 14.7575 4 14 4C13.2425 4 12.7359 4.9089 11.7225 6.7267" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2.08887 16C3.20445 15.121 4.68639 14.7971 6.08887 15.1257" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2.08887 10.5C3.08887 10 3.37862 10.0605 4.08887 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 5.60867L2.20816 5.48676C4.41383 4.19506 6.75032 3.84687 8.95304 4.48161L9.16092 4.54152" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenStarFallMinimalistic2;
