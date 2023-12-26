import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneVideoPlaybackSpeed = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.97715 2 12.5 2" opacity="0.5" stroke="black" strokeDasharray="4 3" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868L9 9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneVideoPlaybackSpeed;
