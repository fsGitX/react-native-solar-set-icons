import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneAdhesivePlaster2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20.4155 12.765L11.235 3.58447C9.12233 1.47184 5.69709 1.47184 3.58447 3.58447C1.47184 5.69709 1.47184 9.12233 3.58447 11.235L12.765 20.4155C14.8777 22.5282 18.3029 22.5282 20.4155 20.4155C22.5282 18.3029 22.5282 14.8777 20.4155 12.765Z" fill={color} opacity="0.5"/>
	<Path d="M19.8849 12.2345L20.4155 12.7651C20.5953 12.945 20.7599 13.1344 20.9091 13.3316L13.3315 20.9092C13.1342 20.76 12.9448 20.5955 12.765 20.4156L12.2344 19.885L19.8849 12.2345C19.8848 12.2346 19.885 12.2345 19.8849 12.2345Z" fill={color}/>
	<Path d="M10.6678 3.09045C10.8653 3.2398 11.0549 3.40449 11.2349 3.58452L11.765 4.11462C11.7651 4.11453 11.7649 4.1147 11.765 4.11462L4.11449 11.7651L3.5844 11.235C3.40437 11.055 3.23968 10.8654 3.09033 10.6679L10.6678 3.09045Z" fill={color}/>
	<circle cx="9.17154" cy="12" fill={color} r="1" transform="rotate(-45 9.17154 12)"/>
	<circle cx="11.9999" cy="14.8284" fill={color} r="1" transform="rotate(-45 11.9999 14.8284)"/>
	<circle cx="11.9999" cy="9.17163" fill={color} r="1" transform="rotate(-45 11.9999 9.17163)"/>
	<circle cx="14.8285" cy="12" fill={color} r="1" transform="rotate(-45 14.8285 12)"/>
</Svg>;

export default BoldDuotoneAdhesivePlaster2;
