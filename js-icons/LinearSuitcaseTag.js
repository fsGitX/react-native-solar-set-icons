import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearSuitcaseTag = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579C8 3.17157 8 4.11438 8 6" stroke="black" strokeWidth="1.5"/>
	<Path d="M10 15H6C5.5286 15 5.29289 15 5.14645 15.1464C5 15.2929 5 15.5286 5 16V17C5 17.4714 5 17.7071 5.14645 17.8536C5.29289 18 5.5286 18 6 18H10C10.4714 18 10.7071 18 10.8536 17.8536C11 17.7071 11 17.4714 11 17V16C11 15.5286 11 15.2929 10.8536 15.1464C10.7071 15 10.4714 15 10 15Z" stroke="black" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M6 6.5V15M6 21.5V18.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M18 6.5V21.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearSuitcaseTag;
