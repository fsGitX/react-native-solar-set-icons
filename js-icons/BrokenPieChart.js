import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenPieChart = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20 15.5524C18.8263 19.2893 15.3351 22 11.2108 22C6.12383 22 2 17.8762 2 12.7892C2 11.8169 2.15064 10.8798 2.42985 10M8.44759 4C7.15152 4.40707 5.9789 5.09291 5 5.98724" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21.9131 9.94727C20.8515 6.14438 17.8556 3.14845 14.0527 2.0869C12.4091 1.6281 11 3.05419 11 4.76062V11.4551C11 12.3083 11.6917 13 12.5449 13H19.2394C20.9458 13 22.3719 11.5909 21.9131 9.94727Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default BrokenPieChart;
