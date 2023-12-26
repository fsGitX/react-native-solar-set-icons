import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneMessagesInbox = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M1 12C1 6.81455 1 4.22183 2.61091 2.61091C4.22183 1 6.81455 1 12 1C17.1854 1 19.7782 1 21.3891 2.61091C23 4.22183 23 6.81455 23 12C23 17.1854 23 19.7782 21.3891 21.3891C19.7782 23 17.1854 23 12 23C6.81455 23 4.22183 23 2.61091 21.3891C1 19.7782 1 17.1854 1 12Z" fill={color} opacity="0.5"/>
	<Path d="M2.61091 21.3887C4.22183 22.9996 6.81455 22.9996 12 22.9996C17.1854 22.9996 19.7782 22.9996 21.3891 21.3887C22.8818 19.896 22.9913 17.5602 22.9994 13.0996H19.5237C18.528 13.0996 18.0302 13.0996 17.5926 13.3009C17.155 13.5022 16.831 13.8801 16.183 14.6361L16.183 14.6361L15.517 15.4131L15.517 15.4131C14.869 16.1691 14.545 16.5471 14.1074 16.7483C13.6698 16.9496 13.172 16.9496 12.1763 16.9496H11.8237C10.828 16.9496 10.3302 16.9496 9.89257 16.7483C9.45496 16.5471 9.13097 16.1691 8.48298 15.4131L7.81701 14.6361C7.16903 13.8801 6.84504 13.5022 6.40743 13.3009C5.96982 13.0996 5.47197 13.0996 4.47629 13.0996H1C1.00803 17.5602 1.11818 19.896 2.61091 21.3887Z" fill={color}/>
</Svg>;

export default BoldDuotoneMessagesInbox;