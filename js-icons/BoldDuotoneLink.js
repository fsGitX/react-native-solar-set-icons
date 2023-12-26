import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneLink = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M15.7283 3.88409C17.1626 2.4442 19.2607 2.41396 20.4221 3.57993C21.5858 4.7481 21.5545 6.85934 20.1192 8.30021L17.6953 10.7335C17.403 11.0269 17.4039 11.5018 17.6974 11.7941C17.9909 12.0864 18.4657 12.0855 18.758 11.7921L21.1819 9.35882C23.0932 7.4401 23.3331 4.37677 21.4849 2.52133C19.6344 0.663673 16.5779 0.905786 14.6656 2.82548L9.81793 7.69194C7.90663 9.61066 7.66668 12.674 9.51494 14.5295C9.80727 14.8229 10.2821 14.8238 10.5756 14.5315C10.8691 14.2392 10.87 13.7643 10.5777 13.4709C9.414 12.3027 9.44534 10.1914 10.8806 8.75054L15.7283 3.88409Z" fill={color}/>
	<Path d="M14.4846 9.4707C14.1923 9.17724 13.7174 9.17632 13.4239 9.46864C13.1305 9.76097 13.1296 10.2358 13.4219 10.5293C14.5856 11.6975 14.5542 13.8087 13.1189 15.2496L8.27129 20.1161C6.83696 21.556 4.73889 21.5862 3.57742 20.4202C2.41376 19.2521 2.4451 17.1408 3.8804 15.6999L6.30424 13.2666C6.59657 12.9732 6.59565 12.4983 6.30219 12.206C6.00873 11.9137 5.53386 11.9146 5.24153 12.208L2.81769 14.6413C0.906387 16.56 0.666428 19.6234 2.5147 21.4788C4.36518 23.3365 7.42173 23.0944 9.334 21.1747L14.1816 16.3082C16.0929 14.3895 16.3329 11.3262 14.4846 9.4707Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneLink;
