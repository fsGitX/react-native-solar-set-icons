import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearMedicineStethoscope = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9 14.2354V17.0001C9 19.7615 11.2386 22.0001 14 22.0001H14.8824C16.7691 22.0001 18.3595 20.7311 18.8465 19.0001" stroke="black" strokeWidth="1.5"/>
	<Path d="M5.42857 3H5.3369C5.02404 3 4.86761 3 4.73574 3.01166C3.28763 3.13972 2.13972 4.28763 2.01166 5.73574C2 5.86761 2 6.02404 2 6.3369V7.23529C2 11.1013 5.13401 14.2353 9 14.2353C12.7082 14.2353 15.7143 11.2292 15.7143 7.521V6.3369C15.7143 6.02404 15.7143 5.86761 15.7026 5.73574C15.5746 4.28763 14.4267 3.13972 12.9785 3.01166C12.8467 3 12.6902 3 12.3774 3H12.2857" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 2V4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6 2V4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="19" cy="16" r="3" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearMedicineStethoscope;
