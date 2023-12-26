import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenTranslation2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 6C8.68629 6 6 8.68629 6 12C6 13.6569 6.67157 15.1569 7.75736 16.2426M16.2426 16.2426C17.3284 15.1569 18 13.6569 18 12C18 10.7733 17.6318 9.63251 17 8.6822" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 2C17.5228 2 22 6.47715 22 12C22 14.7614 20.8807 17.2614 19.0711 19.0711M4.92893 19.0711C3.11929 17.2614 2 14.7614 2 12C2 8.29859 4.01099 5.06687 7 3.33782" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9.88736 17.3441C10.8467 16.4683 11.3264 16.0304 11.9187 16.002C11.9729 15.9993 12.0271 15.9993 12.0813 16.002C12.6736 16.0304 13.1533 16.4683 14.1126 17.3441C16.2001 19.2497 17.2439 20.2025 16.9517 21.0245C16.9266 21.0952 16.8954 21.1639 16.8584 21.2301C16.4282 22 14.9522 22 12 22C9.04784 22 7.57176 22 7.14161 21.2301C7.10463 21.1639 7.07344 21.0952 7.04832 21.0245C6.75612 20.2025 7.79987 19.2497 9.88736 17.3441Z" stroke="black" strokeWidth="1.5"/>
	<circle cx="12" cy="12" r="2" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default BrokenTranslation2;
