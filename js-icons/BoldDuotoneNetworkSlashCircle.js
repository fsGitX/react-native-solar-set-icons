import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneNetworkSlashCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill={color} opacity="0.5"/>
	<Path d="M14.0189 7.36447C14.1261 6.96437 13.8886 6.55311 13.4885 6.44591C13.0884 6.3387 12.6772 6.57614 12.57 6.97624L9.9818 16.6355C9.87459 17.0356 10.112 17.4468 10.5121 17.5541C10.9122 17.6613 11.3235 17.4238 11.4307 17.0237L14.0189 7.36447Z" fill={color}/>
</Svg>;

export default BoldDuotoneNetworkSlashCircle;
