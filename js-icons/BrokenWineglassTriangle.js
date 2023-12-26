import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenWineglassTriangle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 14.5714L20.5162 5.86382C21.5624 4.79409 20.7999 3 19.2991 3H14M12 14.5714L3.48381 5.86382C2.43759 4.79409 3.20008 3 4.70095 3H10M12 14.5714V21M12 21H16.2439M12 21H7.7561M7.47318 9.75H16.5268" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenWineglassTriangle;
