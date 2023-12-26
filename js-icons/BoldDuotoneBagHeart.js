import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneBagHeart = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4.0828 10.8943C4.52171 8.55339 4.74117 7.38295 5.57434 6.69147C6.40752 6 7.59835 6 9.98003 6H14.0209C16.4026 6 17.5934 6 18.4266 6.69147C19.2598 7.38295 19.4792 8.55339 19.9181 10.8943L20.6681 14.8943C21.2853 18.186 21.5939 19.8318 20.6942 20.9159C19.7945 22 18.12 22 14.7709 22H9.23003C5.88097 22 4.20644 22 3.30672 20.9159C2.40701 19.8318 2.7156 18.186 3.3328 14.8943L4.0828 10.8943Z" fill={color} opacity="0.5"/>
	<Path d="M9.75 5C9.75 3.75736 10.7574 2.75 12 2.75C13.2426 2.75 14.25 3.75736 14.25 5V6C14.25 6.00001 14.25 5.99999 14.25 6C14.816 6.00018 15.3119 6.00174 15.7499 6.01488C15.75 6.00993 15.75 6.00497 15.75 6V5C15.75 2.92893 14.0711 1.25 12 1.25C9.92893 1.25 8.25 2.92893 8.25 5V6C8.25 6.00498 8.25005 6.00995 8.25015 6.01491C8.68814 6.00175 9.18397 6.00021 9.75 6.00002C9.75 6.00002 9.75 6.00003 9.75 6.00002V5Z" fill={color}/>
	<Path d="M11.0429 15.8656C10.1649 15.2213 9 14.1812 9 13.1967C9 11.5235 10.65 10.8988 12 12.1913C13.35 10.8988 15 11.5235 15 13.1967C15 14.1812 13.8352 15.2214 12.9571 15.8656C12.5374 16.1736 12.3275 16.3276 12 16.3276C11.6725 16.3276 11.4626 16.1736 11.0429 15.8656Z" fill={color}/>
</Svg>;

export default BoldDuotoneBagHeart;
