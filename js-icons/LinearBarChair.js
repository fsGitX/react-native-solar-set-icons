import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearBarChair = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5.0315 6.93751C4.75731 4.72857 6.30192 2.69766 8.54207 2.32168L8.93963 2.25496C10.9651 1.91501 13.0349 1.91501 15.0604 2.25496L15.4579 2.32168C17.6981 2.69766 19.2427 4.72857 18.9685 6.93751L18.9505 7.08273C18.8855 7.6063 18.4315 8 17.8928 8H6.10719C5.56847 8 5.11452 7.6063 5.04953 7.08273L5.0315 6.93751Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M9 8L6 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15 8L18 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 17H7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearBarChair;
