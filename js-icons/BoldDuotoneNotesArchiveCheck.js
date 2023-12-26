import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneNotesArchiveCheck = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.5 21H12.5C16.2712 21 18.1569 21 19.3284 19.8284C20.5 18.6569 20.5 16.7713 20.5 13V6.99805C20.3548 7.00008 20.1509 7.00005 20 7.00002H4C3.84905 7.00005 3.6452 7.00008 3.5 6.99805V13C3.5 16.7713 3.5 18.6569 4.67157 19.8284C5.84315 21 7.72876 21 11.5 21ZM15.0595 11.4995C15.3353 11.1905 15.3085 10.7164 14.9995 10.4406C14.6905 10.1647 14.2164 10.1915 13.9406 10.5005L10.9286 13.8739L10.0595 12.9005C9.78359 12.5915 9.30947 12.5647 9.0005 12.8406C8.69152 13.1164 8.66468 13.5905 8.94055 13.8995L10.3691 15.4995C10.5114 15.6589 10.7149 15.75 10.9286 15.75C11.1422 15.75 11.3457 15.6589 11.488 15.4995L15.0595 11.4995Z" fill={color} fillRule="evenodd"/>
	<Path d="M2 5C2 4.05719 2 3.58579 2.29289 3.29289C2.58579 3 3.05719 3 4 3H20C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneNotesArchiveCheck;