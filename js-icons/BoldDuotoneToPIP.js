import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneToPIP = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.9962 21H9.99625C9.60469 21 9.23346 21 8.88125 20.9987C5.84115 20.9874 4.21775 20.8784 3.16782 19.8284C3.10078 19.7614 3.03757 19.6904 2.97798 19.6153C2.13544 18.5939 2.01887 17.0574 2.00274 14.3804C2.00049 14.198 1.99901 14.0344 2.00079 13.8872C2.00015 13.6036 2.00015 13.3081 2.00015 13V11C2.00015 7.22876 2.00015 5.34315 3.17173 4.17157C4.3433 3 6.22892 3 10.0002 3H14.0002C17.7714 3 19.657 3 20.8286 4.17157C20.8956 4.23863 20.9589 4.30966 21.0185 4.38471C21.861 5.40615 21.9775 6.94261 21.9937 9.61959C21.9959 9.80203 21.9974 9.96561 21.9956 10.1128C21.9962 10.3964 21.9962 10.6919 21.9962 11V13C21.9962 16.7712 21.9962 18.6569 20.8247 19.8284C19.6531 21 17.7675 21 13.9962 21Z" fill={color} opacity="0.5"/>
	<Path d="M13 17C13 15.1144 13 14.1716 13.5858 13.5858C14.1716 13 15.1144 13 17 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H17C15.1144 21 14.1716 21 13.5858 20.4142C13 19.8284 13 18.8856 13 17Z" fill={color}/>
	<Path d="M8.03033 6.96967C7.73744 6.67678 7.26256 6.67678 6.96967 6.96967C6.67678 7.26256 6.67678 7.73744 6.96967 8.03033L9.68934 10.75H8.5C8.08579 10.75 7.75 11.0858 7.75 11.5C7.75 11.9142 8.08579 12.25 8.5 12.25H11.5C11.9142 12.25 12.25 11.9142 12.25 11.5V8.5C12.25 8.08579 11.9142 7.75 11.5 7.75C11.0858 7.75 10.75 8.08579 10.75 8.5V9.68934L8.03033 6.96967Z" fill={color}/>
</Svg>;

export default BoldDuotoneToPIP;