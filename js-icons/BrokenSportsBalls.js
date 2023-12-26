import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSportsBalls = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.0201 8.07683C14.0016 8.27102 11.8566 8.87629 10.3665 10.3665C8.87629 11.8566 8.27102 14.0016 8.07683 16.0201M16.0201 8.07683C17.1891 7.96436 18.3157 7.9898 19.248 8.06108C20.7038 8.17239 21.8276 9.29618 21.9389 10.752C22.0102 11.6843 22.0356 12.8109 21.9232 13.9799M16.0201 8.07683L21.9232 13.9799M21.9232 13.9799C21.729 15.9984 21.1237 18.1434 19.6336 19.6336C18.1434 21.1237 15.9984 21.729 13.9799 21.9232M13.9799 21.9232C12.8109 22.0356 11.6843 22.0102 10.752 21.9389C9.29618 21.8276 8.17239 20.7038 8.06108 19.248C7.9898 18.3157 7.96436 17.1891 8.07683 16.0201M13.9799 21.9232L8.07683 16.0201" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14.9955 8.25203C14.9573 7.22857 14.6759 6.19921 14.1282 5.25054C13.0651 3.40919 11.237 2.28489 9.27713 2.04733C7.92854 1.88387 6.51758 2.14025 5.25054 2.87177C2.14216 4.6664 1.07715 8.64107 2.87177 11.7495C4.01322 13.7265 6.03658 14.8769 8.15803 14.9907" stroke="black" strokeWidth="1.5"/>
	<Path d="M9.21514 2C9.21514 2 9.07658 4.35593 10.5717 7.19068C11.0294 8.05852 11.5282 8.75876 12 9.3127M3 5.92795C3 5.92795 4.93315 6.97456 6.42829 9.80932C7.92342 12.6441 7.78486 15 7.78486 15" stroke="black" strokeWidth="1.5"/>
	<Path d="M12.5 17.5L17.5 12.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15.5 12.5L17.5 14.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12.5 15.5L14.5 17.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 14L16 16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenSportsBalls;
