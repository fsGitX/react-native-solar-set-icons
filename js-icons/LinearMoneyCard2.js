import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearMoneyCard2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M10 16.5H6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 13.5H6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 10L22 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 15C14 14.0572 14 13.5858 14.2929 13.2929C14.5858 13 15.0572 13 16 13C16.9428 13 17.4142 13 17.7071 13.2929C18 13.5858 18 14.0572 18 15C18 15.9428 18 16.4142 17.7071 16.7071C17.4142 17 16.9428 17 16 17C15.0572 17 14.5858 17 14.2929 16.7071C14 16.4142 14 15.9428 14 15Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearMoneyCard2;