import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldCart4 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.6646 2.32934C15.0351 2.1441 15.4856 2.29427 15.6708 2.66475L17.872 7.06708C19.2251 7.17102 20.0742 7.43643 20.6221 8.11413C21.0575 8.65271 21.1984 9.32275 21.1466 10.2502H2.85346C2.80168 9.32275 2.94261 8.65271 3.378 8.11413C3.92585 7.43644 4.77494 7.17103 6.12802 7.06708L8.32918 2.66475C8.51442 2.29427 8.96493 2.1441 9.33541 2.32934C9.70589 2.51459 9.85606 2.96509 9.67082 3.33557L7.83589 7.00543C8.31911 7.00016 8.84638 7.00016 9.42196 7.00016H14.5781C15.1537 7.00016 15.6809 7.00016 16.1641 7.00543L14.3292 3.33557C14.1439 2.96509 14.2941 2.51459 14.6646 2.32934Z" fill={color}/>
	<Path d="M3.55514 14.2573C3.34814 13.2913 3.17096 12.4645 3.04514 11.7502H20.9549C20.8291 12.4645 20.6519 13.2913 20.4449 14.2573L20.0164 16.2573C19.5294 18.5299 19.2859 19.6662 18.4608 20.3332C17.6357 21.0002 16.4737 21.0002 14.1495 21.0002H9.85053C7.52639 21.0002 6.36432 21.0002 5.53925 20.3332C4.71418 19.6662 4.47069 18.5299 3.98372 16.2573L3.55514 14.2573ZM10 13.2502C9.58579 13.2502 9.25 13.586 9.25 14.0002C9.25 14.4144 9.58579 14.7502 10 14.7502H14C14.4142 14.7502 14.75 14.4144 14.75 14.0002C14.75 13.586 14.4142 13.2502 14 13.2502H10Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldCart4;
