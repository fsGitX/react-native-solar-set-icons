import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearLightning = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.2 8H10.8C8.53726 8 7.40589 8 6.70294 8.69229C6 9.38459 6 10.4988 6 12.7273V15.2727C6 17.5012 6 18.6154 6.70294 19.3077C7.40589 20 8.53726 20 10.8 20H13.2M10.8 8H13.2C15.4627 8 16.5941 8 17.2971 8.69229C18 9.38459 18 10.4988 18 12.7273V15.2727C18 17.5012 18 18.6154 17.2971 19.3077C16.5941 20 15.4627 20 13.2 20H10.8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 20V22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 12L10.5 14H13.5L12 16" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M11 5H13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15.5 8V5.5C15.5 4.09554 15.5 3.39331 15.1629 2.88886C15.017 2.67048 14.8295 2.48298 14.6111 2.33706C14.1067 2 13.4045 2 12 2C10.5955 2 9.89331 2 9.38886 2.33706C9.17048 2.48298 8.98298 2.67048 8.83706 2.88886C8.5 3.39331 8.5 4.09554 8.5 5.5V8" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearLightning;
