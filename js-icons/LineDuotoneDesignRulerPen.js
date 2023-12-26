import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneDesignRulerPen = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16 22C14.1144 22 13.1716 22 12.5858 21.4142C12 20.8284 12 19.8856 12 18L12 6C12 4.11438 12 3.17157 12.5858 2.58579C13.1716 2 14.1144 2 16 2L18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22H16Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 12H14M12 6L14 6M12 18H14M12 15L15 15M12 9L15 9" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6.01206 21.0271L5.72361 21.5751C5.58657 21.8355 5.30643 22 5 22C4.69357 22 4.41343 21.8355 4.27639 21.5751L3.98794 21.0271M6.01206 21.0271H3.98794M6.01206 21.0271L7.19209 18.785C7.47057 18.2559 7.60981 17.9914 7.71267 17.7157C7.834 17.3905 7.91768 17.0538 7.96223 16.7114C8 16.4211 8 16.1254 8 15.5338L8 5.8L8 4.85C8 3.27599 6.65685 2 5 2C3.34315 2 2 3.27599 2 4.85L2 5.8L2 15.5338C2 16.1254 2 16.4211 2.03777 16.7114C2.08232 17.0538 2.166 17.3905 2.28733 17.7157C2.39019 17.9914 2.52943 18.2559 2.8079 18.785L3.98794 21.0271" stroke="black" strokeWidth="1.5"/>
	<Path d="M2 5.7998C2 5.7998 3.125 6.7498 5 6.7498C6.875 6.7498 8 5.7998 8 5.7998" opacity="0.5" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneDesignRulerPen;
