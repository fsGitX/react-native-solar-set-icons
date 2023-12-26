import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldFoodWineglassTriangle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19.2991 3H4.70095C3.20008 3 2.43759 4.79409 3.48381 5.86382L6.23508 9H17.7649L20.5162 5.86382C21.5624 4.79409 20.7999 3 19.2991 3Z" fill={color}/>
	<Path d="M16.449 10.5H7.55099L11.2498 14.7162V20.2499H7.75586C7.34165 20.2499 7.00586 20.5856 7.00586 20.9999C7.00586 21.4141 7.34165 21.7499 7.75586 21.7499H16.2437C16.6579 21.7499 16.9937 21.4141 16.9937 20.9999C16.9937 20.5856 16.6579 20.2499 16.2437 20.2499H12.7498V14.7168L16.449 10.5Z" fill={color}/>
</Svg>;

export default BoldFoodWineglassTriangle;
