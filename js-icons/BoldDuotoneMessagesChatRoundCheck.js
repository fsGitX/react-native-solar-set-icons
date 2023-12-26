import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneMessagesChatRoundCheck = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" fill={color} opacity="0.5"/>
	<Path d="M15.5303 9.46967C15.8232 9.76256 15.8232 10.2374 15.5303 10.5303L11.5303 14.5303C11.2417 14.819 10.7751 14.8238 10.4806 14.541L8.4806 12.621C8.18179 12.3342 8.1721 11.8594 8.45896 11.5606C8.74582 11.2618 9.22059 11.2521 9.5194 11.539L10.9893 12.9501L14.4697 9.46967C14.7626 9.17678 15.2374 9.17678 15.5303 9.46967Z" fill={color}/>
</Svg>;

export default BoldDuotoneMessagesChatRoundCheck;
