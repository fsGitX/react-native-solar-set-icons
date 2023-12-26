import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneCallPhone = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.1007 13.359L16.5562 12.9062C17.1858 12.2801 18.1672 12.1515 18.9728 12.5894L20.8833 13.628C22.1102 14.2949 22.3806 15.9295 21.4217 16.883L20.0011 18.2954C19.6399 18.6546 19.1917 18.9171 18.6763 18.9651C17.4841 19.0763 15.0313 19.0163 12.1374 17.3223L16.1007 13.359ZM10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.06761 6.88446 4.45582 8.9649 6.15176 11.5215L10.1907 7.48257Z" fill={color} fillRule="evenodd"/>
	<Path d="M12.0627 11.4973C9.11695 8.56828 10.1836 7.48938 10.1903 7.48267L6.15137 11.5216C6.81756 12.5259 7.68554 13.6036 8.81497 14.7267C9.95468 15.8599 11.0755 16.7011 12.137 17.3224L16.1003 13.3591C16.1003 13.3591 15.0177 14.4356 12.0627 11.4973Z" fill={color} opacity="0.6"/>
</Svg>;

export default BoldDuotoneCallPhone;
