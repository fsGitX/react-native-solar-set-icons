import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldCorkscrew = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19.357 8.38314C17.7511 8.60006 16.4767 9.86128 16.2398 11.4607L14.9198 10.1407L13.5955 11.4649C13.4826 11.5779 13.4619 11.7537 13.5457 11.8898L14.1916 12.9395C14.929 14.1378 13.499 15.4885 12.3446 14.684L7.72702 11.4657L12.6712 18.5595C13.4816 19.7222 12.1075 21.1565 10.9111 20.3968L4.79546 16.5131L5.4448 17.8839C5.77832 18.588 5.63444 19.426 5.0826 19.9779L2.53033 22.5301C2.23744 22.823 1.76256 22.823 1.46967 22.5301C1.17678 22.2372 1.17678 21.7624 1.46967 21.4695L4.02194 18.9172C4.12458 18.8146 4.15191 18.6585 4.08919 18.5261L3.13994 16.5221C2.58305 15.3464 3.91 14.1739 5.00816 14.8713L10.8641 18.59L5.84814 11.3932C5.01991 10.2049 6.46624 8.75856 7.65457 9.58679L12.4044 12.8973L12.2682 12.6759C11.8204 11.9483 11.9307 11.0084 12.5349 10.4043L13.8591 9.08002L10.518 5.73885C9.66264 4.88353 9.66264 3.4968 10.518 2.64148C11.3733 1.78617 12.76 1.78617 13.6153 2.64148L19.357 8.38314Z" fill={color}/>
	<Path d="M21.3587 13.4823C21.7779 13.0631 21.9916 12.5164 21.9999 11.9671C21.9823 10.7949 21.0266 9.8501 19.8502 9.8501C18.6628 9.8501 17.7002 10.8127 17.7002 12.0001C17.7002 12.8162 18.1549 13.5261 18.8247 13.8903C19.6459 14.3039 20.6731 14.1679 21.3587 13.4823Z" fill={color}/>
</Svg>;

export default BoldCorkscrew;
