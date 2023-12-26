import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneEssentionalUmbrella = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21.5238 12H12H2.47619C2.2132 12 2 11.7868 2 11.5238C2 6.26396 6.26395 2 11.5238 2H12.4762C17.736 2 22 6.26396 22 11.5238C22 11.7868 21.7868 12 21.5238 12Z" fill={color} opacity="0.5"/>
	<Path d="M11.25 20V12H12.75V20C12.75 21.5188 11.5188 22.75 10 22.75C8.48122 22.75 7.25 21.5188 7.25 20V19C7.25 18.5858 7.58579 18.25 8 18.25C8.41421 18.25 8.75 18.5858 8.75 19V20C8.75 20.6904 9.30964 21.25 10 21.25C10.6904 21.25 11.25 20.6904 11.25 20Z" fill={color} fillRule="evenodd"/>
	<Path d="M7.84005 12C7.98268 10.6457 8.31678 8.26738 9.02363 6.229C9.38486 5.18734 9.82568 4.28791 10.3482 3.66173C10.862 3.04589 11.4029 2.75 12.0003 2.75C12.5977 2.75 13.1386 3.04589 13.6524 3.66173C14.1749 4.28791 14.6157 5.18734 14.9769 6.229C15.6838 8.26738 16.0179 10.6457 16.1605 12H17.6685L17.6606 11.9232C17.5194 10.5516 17.1725 7.98224 16.3941 5.73755C16.006 4.61812 15.4927 3.52592 14.8041 2.70073C14.647 2.51245 14.4783 2.33535 14.2976 2.17396C13.708 2.0598 13.0991 2 12.4762 2H11.5239C10.9012 2 10.2925 2.05976 9.70314 2.17385C9.52238 2.33527 9.35356 2.5124 9.19642 2.70073C8.50789 3.52592 7.99462 4.61812 7.60643 5.73755C6.82803 7.98224 6.48116 10.5516 6.33994 11.9232L6.33203 12H7.84005Z" fill={color}/>
</Svg>;

export default BoldDuotoneEssentionalUmbrella;