import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSportsBasketball = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.9498 20.5732C16.9498 20.5732 16.0108 13.982 14.0005 10.5C11.9901 7.01798 7.05029 3.42676 7.05029 3.42676" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21.8635 12.5799C16.4526 11.3928 9.05879 16.3475 7.57715 20.8172" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16.4141 3.20884C14.9262 7.6299 7.67443 12.5122 2.28877 11.4515" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenSportsBasketball;
