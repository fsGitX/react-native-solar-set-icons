import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneMessagesChatRoundVideo = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M16 12C16 11.1555 15.0732 10.586 13.2195 9.44695C11.3406 8.29234 10.4011 7.71504 9.70056 8.13891C9 8.56279 9 9.70853 9 12C9 14.2915 9 15.4372 9.70056 15.8611C10.4011 16.285 11.3406 15.7077 13.2195 14.5531C15.0732 13.414 16 12.8445 16 12Z" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneMessagesChatRoundVideo;
