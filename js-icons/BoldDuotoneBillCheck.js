import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneBillCheck = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7.24502 2H16.755C17.9139 2 18.4933 2 18.9606 2.16261C19.8468 2.47096 20.5425 3.18719 20.842 4.09946C21 4.58055 21 5.17705 21 6.37006V20.3742C21 21.2324 20.015 21.6878 19.3919 21.1176C19.0258 20.7826 18.4742 20.7826 18.1081 21.1176L17.625 21.5597C16.9834 22.1468 16.0166 22.1468 15.375 21.5597C14.7334 20.9726 13.7666 20.9726 13.125 21.5597C12.4834 22.1468 11.5166 22.1468 10.875 21.5597C10.2334 20.9726 9.26659 20.9726 8.625 21.5597C7.98341 22.1468 7.01659 22.1468 6.375 21.5597L5.8919 21.1176C5.52583 20.7826 4.97417 20.7826 4.6081 21.1176C3.985 21.6878 3 21.2324 3 20.3742V6.37006C3 5.17705 3 4.58055 3.15795 4.09946C3.45748 3.18719 4.15322 2.47096 5.03939 2.16261C5.50671 2 6.08614 2 7.24502 2Z" fill={color} opacity="0.5"/>
	<Path d="M15.0595 8.49952C15.3353 8.19054 15.3085 7.71643 14.9995 7.44055C14.6905 7.16468 14.2164 7.19152 13.9405 7.5005L10.9286 10.8739L10.0595 9.9005C9.78358 9.59152 9.30947 9.56468 9.00049 9.84055C8.69151 10.1164 8.66467 10.5905 8.94055 10.8995L10.3691 12.4995C10.5114 12.6589 10.7149 12.75 10.9286 12.75C11.1422 12.75 11.3457 12.6589 11.488 12.4995L15.0595 8.49952Z" fill={color}/>
	<Path d="M7.5 14.75C7.08579 14.75 6.75 15.0858 6.75 15.5C6.75 15.9142 7.08579 16.25 7.5 16.25H16.5C16.9142 16.25 17.25 15.9142 17.25 15.5C17.25 15.0858 16.9142 14.75 16.5 14.75H7.5Z" fill={color}/>
</Svg>;

export default BoldDuotoneBillCheck;