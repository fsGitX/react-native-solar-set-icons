import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenPodcast = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10V13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13V10Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M13 10L15 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13 13L15 13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 10L10 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 13L10 13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16.9514 8.24993C17.0894 8.64047 17.5179 8.84516 17.9085 8.70713C18.299 8.5691 18.5037 8.1406 18.3656 7.75007L16.9514 8.24993ZM6.74996 14.1538V9.99998H5.24996V14.1538H6.74996ZM5.24996 14.1538C5.24996 14.7592 4.7592 15.25 4.15381 15.25V16.75C5.58762 16.75 6.74996 15.5877 6.74996 14.1538H5.24996ZM17.2499 14.1538C17.2499 15.5877 18.4123 16.75 19.8461 16.75V15.25C19.2407 15.25 18.7499 14.7592 18.7499 14.1538H17.2499ZM11.9999 3.25C8.27203 3.25 5.24996 6.27207 5.24996 9.99998H6.74996C6.74996 7.1005 9.10046 4.75 11.9999 4.75V3.25ZM11.9999 4.75C14.2847 4.75 16.2303 6.20984 16.9514 8.24993L18.3656 7.75007C17.4394 5.1294 14.9401 3.25 11.9999 3.25V4.75Z" fill={color}/>
	<Path d="M2 12C2 10.8954 2.89543 10 4 10C5.10457 10 6 10.8954 6 12V14C6 15.1046 5.10457 16 4 16C2.89543 16 2 15.1046 2 14V12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M18 12C18 10.8954 18.8954 10 20 10C21.1046 10 22 10.8954 22 12V14C22 15.1046 21.1046 16 20 16C18.8954 16 18 15.1046 18 14V12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 16V19" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenPodcast;
