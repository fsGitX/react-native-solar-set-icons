import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldChatUnread = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.0867 21.3877L13.6288 20.4718C14.0492 19.7614 14.2595 19.4062 14.5972 19.2098C14.9349 19.0134 15.36 19.0061 16.2104 18.9915C17.4658 18.9698 18.2531 18.8929 18.9134 18.6194C20.1386 18.1119 21.1119 17.1386 21.6194 15.9134C22 14.9946 22 13.8297 22 11.5V10.5C22 10.1303 22 9.78153 21.9989 9.45187C21.9976 9.02454 21.4751 8.78307 21.0971 8.9825C20.4709 9.31294 19.7573 9.5 19 9.5C16.5147 9.5 14.5 7.48528 14.5 5C14.5 4.24271 14.6871 3.52911 15.0175 2.90288C15.2169 2.52494 14.9755 2.00244 14.5481 2.00106C14.2185 2 13.8697 2 13.5 2H10.5C7.22657 2 5.58985 2 4.38751 2.7368C3.71473 3.14908 3.14908 3.71473 2.7368 4.38751C2 5.58985 2 7.22657 2 10.5V11.5C2 13.8297 2 14.9946 2.3806 15.9134C2.88807 17.1386 3.86144 18.1119 5.08658 18.6194C5.74689 18.8929 6.53422 18.9698 7.78958 18.9915C8.63992 19.0061 9.06509 19.0134 9.40279 19.2098C9.74049 19.4063 9.95073 19.7614 10.3712 20.4718L10.9133 21.3877C11.3965 22.204 12.6035 22.204 13.0867 21.3877Z" fill={color}/>
	<circle cx="19" cy="5" fill={color} r="3"/>
</Svg>;

export default BoldChatUnread;