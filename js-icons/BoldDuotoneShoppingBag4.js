import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneShoppingBag4 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4.03532 11.5733C4.4971 9.2644 4.72799 8.10995 5.55742 7.42997C6.38686 6.75 7.56417 6.75 9.9188 6.75H14.0812C16.4358 6.75 17.6131 6.75 18.4425 7.42997C19.272 8.10995 19.5029 9.2644 19.9646 11.5733L20.5646 14.5733C21.2287 17.8937 21.5608 19.5539 20.6606 20.652C19.7604 21.75 18.0673 21.75 14.6812 21.75H9.3188C5.93263 21.75 4.23954 21.75 3.33936 20.652C2.43919 19.5539 2.77123 17.8937 3.43532 14.5733L4.03532 11.5733Z" fill={color} opacity="0.5"/>
	<Path d="M9.75 5.75C9.75 4.50736 10.7574 3.5 12 3.5C13.2426 3.5 14.25 4.50736 14.25 5.75V6.75H14.6812C15.058 6.75 15.4139 6.75 15.75 6.75151L15.75 5.75C15.75 3.67893 14.0711 2 12 2C9.92893 2 8.25 3.67893 8.25 5.75L8.25 6.75151C8.58613 6.75 8.94198 6.75 9.3188 6.75H9.75V5.75Z" fill={color}/>
	<circle cx="15" cy="9.75" fill={color} r="1"/>
	<circle cx="9" cy="9.75" fill={color} r="1"/>
</Svg>;

export default BoldDuotoneShoppingBag4;
