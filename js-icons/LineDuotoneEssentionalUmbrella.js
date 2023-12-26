import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneEssentionalUmbrella = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.75 19C8.75 18.5858 8.41421 18.25 8 18.25C7.58579 18.25 7.25 18.5858 7.25 19H8.75ZM11.25 12V20H12.75V12H11.25ZM8.75 20V19H7.25V20H8.75ZM12 12.75H21.5238V11.25H12V12.75ZM12.4762 1.25H11.5238V2.75H12.4762V1.25ZM2.47619 12.75H12V11.25H2.47619V12.75ZM1.25 11.5238C1.25 12.201 1.79898 12.75 2.47619 12.75V11.25C2.62741 11.25 2.75 11.3726 2.75 11.5238H1.25ZM22.75 11.5238C22.75 5.84974 18.1503 1.25 12.4762 1.25V2.75C17.3218 2.75 21.25 6.67817 21.25 11.5238H22.75ZM21.5238 12.75C22.201 12.75 22.75 12.201 22.75 11.5238H21.25C21.25 11.3726 21.3726 11.25 21.5238 11.25V12.75ZM10 21.25C9.30964 21.25 8.75 20.6904 8.75 20H7.25C7.25 21.5188 8.48122 22.75 10 22.75V21.25ZM11.5238 1.25C5.84974 1.25 1.25 5.84974 1.25 11.5238H2.75C2.75 6.67817 6.67817 2.75 11.5238 2.75V1.25ZM11.25 20C11.25 20.6904 10.6904 21.25 10 21.25V22.75C11.5188 22.75 12.75 21.5188 12.75 20H11.25Z" fill={color}/>
	<Path d="M16.9143 12C16.6351 9.28874 15.5541 2 12 2C8.44586 2 7.36486 9.28874 7.08569 12" opacity="0.5" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneEssentionalUmbrella;
