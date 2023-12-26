import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearMedicineAdhesivePlaster2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.765 20.4155L3.58447 11.235M12.765 20.4155C14.8777 22.5282 18.3029 22.5282 20.4155 20.4155C22.5282 18.3029 22.5282 14.8777 20.4155 12.765M12.765 20.4155L20.4155 12.765M20.4155 12.765L11.235 3.58447M11.235 3.58447C9.12233 1.47184 5.69709 1.47184 3.58447 3.58447C1.47184 5.69709 1.47184 9.12233 3.58447 11.235M11.235 3.58447L3.58447 11.235" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="9.1716" cy="12" fill={color} r="1" transform="rotate(-45 9.1716 12)"/>
	<circle cx="12" cy="14.8284" fill={color} r="1" transform="rotate(-45 12 14.8284)"/>
	<circle cx="12" cy="9.17163" fill={color} r="1" transform="rotate(-45 12 9.17163)"/>
	<circle cx="14.8284" cy="12" fill={color} r="1" transform="rotate(-45 14.8284 12)"/>
</Svg>;

export default LinearMedicineAdhesivePlaster2;
