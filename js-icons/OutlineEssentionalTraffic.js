import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineEssentionalTraffic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.1139 21.9317C14.1495 22.7453 11.9881 22.9582 9.90278 22.5434C7.81749 22.1287 5.90202 21.1048 4.39861 19.6014C2.89519 18.098 1.87135 16.1825 1.45656 14.0972C1.04177 12.0119 1.25466 9.85046 2.0683 7.88615C2.88194 5.92185 4.2598 4.24293 6.02763 3.0617C7.79545 1.88048 9.87386 1.25 12 1.25C12.4142 1.25 12.75 1.58579 12.75 2C12.75 2.41421 12.4142 2.75 12 2.75C10.1705 2.75 8.38213 3.2925 6.86098 4.30891C5.33983 5.32531 4.15423 6.76996 3.45412 8.46018C2.75401 10.1504 2.57083 12.0103 2.92774 13.8046C3.28465 15.5989 4.16563 17.2471 5.45927 18.5407C6.7529 19.8344 8.4011 20.7154 10.1954 21.0723C11.9897 21.4292 13.8496 21.246 15.5398 20.5459C17.23 19.8458 18.6747 18.6602 19.6911 17.139C20.7075 15.6179 21.25 13.8295 21.25 12C21.25 11.5858 21.5858 11.25 22 11.25C22.4142 11.25 22.75 11.5858 22.75 12C22.75 14.1262 22.1195 16.2046 20.9383 17.9724C19.7571 19.7402 18.0782 21.1181 16.1139 21.9317Z" fill={color}/>
	<Path d="M14.6869 1.58861C14.2858 1.48537 13.8769 1.72686 13.7737 2.128C13.6704 2.52914 13.9119 2.93802 14.3131 3.04127C17.5625 3.8776 20.1223 6.43745 20.9586 9.68684C21.0619 10.088 21.4708 10.3295 21.8719 10.2262C22.273 10.123 22.5145 9.71409 22.4113 9.31295C21.4387 5.5343 18.4656 2.56117 14.6869 1.58861Z" fill={color}/>
</Svg>;

export default OutlineEssentionalTraffic;
