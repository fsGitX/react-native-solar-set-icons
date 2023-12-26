import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneMapLocationMapPointSearch = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.5371 21.6744C11.4657 22.1085 12.5343 22.1085 13.4629 21.6744C17.4467 19.8124 20 14.6055 20 10.1433C20 5.64588 16.4183 2 12 2C7.58172 2 4 5.64588 4 10.1433C4 14.6055 6.55332 19.8124 10.5371 21.6744Z" fill={color} opacity="0.5"/>
	<Path d="M12 6.25C9.92893 6.25 8.25 7.92893 8.25 10C8.25 12.0711 9.92893 13.75 12 13.75C12.7651 13.75 13.4774 13.5203 14.0706 13.1268L14.9681 14.0293C15.2602 14.323 15.7351 14.3243 16.0288 14.0322C16.3225 13.7401 16.3238 13.2652 16.0317 12.9715L15.1304 12.0653C15.5217 11.4731 15.75 10.7628 15.75 10C15.75 7.92893 14.0711 6.25 12 6.25ZM12 7.75C10.7574 7.75 9.75 8.75736 9.75 10C9.75 11.2426 10.7574 12.25 12 12.25C12.6229 12.25 13.1854 11.9979 13.5937 11.5883C14.0001 11.1806 14.25 10.6202 14.25 10C14.25 8.75736 13.2426 7.75 12 7.75Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneMapLocationMapPointSearch;
