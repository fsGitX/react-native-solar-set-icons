import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearMedicineTestTubeMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.8008 11.7834L8.07502 11.9256C9.09772 12.0398 9.90506 12.8507 10.0187 13.8779C10.1062 14.6689 10.6104 15.3515 11.3387 15.665L13 16.3547M13 16.3547L20.2387 9.08398L14.8635 3.68504L4.11323 14.4829C2.62892 15.9738 2.62892 18.391 4.11323 19.8818C5.59754 21.3727 8.00407 21.3727 9.48838 19.8818L13 16.3547ZM21 9.84867L14.1815 3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearMedicineTestTubeMinimalistic;
