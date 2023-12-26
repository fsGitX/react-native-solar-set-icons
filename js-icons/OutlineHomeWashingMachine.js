import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineHomeWashingMachine = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.9436 1.25H13.0564C14.8942 1.24998 16.3498 1.24997 17.489 1.40314C18.6614 1.56076 19.6104 1.89288 20.3588 2.64124C21.1071 3.38961 21.4392 4.33856 21.5969 5.51098C21.7217 6.43926 21.7448 7.57763 21.749 8.96164C21.7497 8.97435 21.75 8.98714 21.75 9C21.75 9.0114 21.7497 9.02275 21.7492 9.03403C21.75 9.32626 21.75 9.62934 21.75 9.94359V13.0564C21.75 14.8942 21.75 16.3498 21.5969 17.489C21.4392 18.6614 21.1071 19.6104 20.3588 20.3588C19.8997 20.8178 19.3652 21.1202 18.75 21.3218V22C18.75 22.4142 18.4142 22.75 18 22.75C17.5858 22.75 17.25 22.4142 17.25 22V21.6263C16.1482 21.75 14.7681 21.75 13.0564 21.75H10.9436C9.23194 21.75 7.85177 21.75 6.75 21.6263V22C6.75 22.4142 6.41421 22.75 6 22.75C5.58579 22.75 5.25 22.4142 5.25 22V21.3218C4.63476 21.1202 4.10027 20.8178 3.64124 20.3588C2.89288 19.6104 2.56076 18.6614 2.40314 17.489C2.24997 16.3498 2.24998 14.8942 2.25 13.0564V9.94358C2.25 9.62933 2.24999 9.32625 2.25076 9.03402C2.25026 9.02274 2.25 9.0114 2.25 9C2.25 8.98714 2.25032 8.97435 2.25096 8.96165C2.25523 7.57763 2.27833 6.43926 2.40314 5.51098C2.56076 4.33856 2.89288 3.38961 3.64124 2.64124C4.38961 1.89288 5.33856 1.56076 6.51098 1.40314C7.65019 1.24997 9.10582 1.24998 10.9436 1.25ZM3.75002 9.75C3.75 9.83227 3.75 9.91559 3.75 10V13C3.75 14.9068 3.75159 16.2615 3.88976 17.2892C4.02502 18.2952 4.27869 18.8749 4.7019 19.2981C5.12511 19.7213 5.70476 19.975 6.71085 20.1102C7.73851 20.2484 9.09318 20.25 11 20.25H13C14.9068 20.25 16.2615 20.2484 17.2892 20.1102C18.2952 19.975 18.8749 19.7213 19.2981 19.2981C19.7213 18.8749 19.975 18.2952 20.1102 17.2892C20.2484 16.2615 20.25 14.9068 20.25 13V10C20.25 9.91559 20.25 9.83227 20.25 9.75H3.75002ZM20.2443 8.25H3.75573C3.76662 7.21636 3.79821 6.39182 3.88976 5.71085C4.02502 4.70476 4.27869 4.12511 4.7019 3.7019C5.12511 3.27869 5.70476 3.02502 6.71085 2.88976C7.73851 2.75159 9.09318 2.75 11 2.75H13C14.9068 2.75 16.2615 2.75159 17.2892 2.88976C18.2952 3.02502 18.8749 3.27869 19.2981 3.7019C19.7213 4.12511 19.975 4.70476 20.1102 5.71085C20.2018 6.39182 20.2334 7.21636 20.2443 8.25ZM5.75 5.5C5.75 5.08579 6.08579 4.75 6.5 4.75H9.5C9.91421 4.75 10.25 5.08579 10.25 5.5C10.25 5.91421 9.91421 6.25 9.5 6.25H6.5C6.08579 6.25 5.75 5.91421 5.75 5.5ZM12 12.75C10.7574 12.75 9.75 13.7574 9.75 15C9.75 16.2426 10.7574 17.25 12 17.25C13.2426 17.25 14.25 16.2426 14.25 15C14.25 13.7574 13.2426 12.75 12 12.75ZM8.25 15C8.25 12.9289 9.92893 11.25 12 11.25C14.0711 11.25 15.75 12.9289 15.75 15C15.75 17.0711 14.0711 18.75 12 18.75C9.92893 18.75 8.25 17.0711 8.25 15Z" fill={color} fillRule="evenodd"/>
	<Path d="M15.5 5.5C15.5 6.05229 15.0523 6.5 14.5 6.5C13.9477 6.5 13.5 6.05229 13.5 5.5C13.5 4.94772 13.9477 4.5 14.5 4.5C15.0523 4.5 15.5 4.94772 15.5 5.5Z" fill={color}/>
	<Path d="M18.5 5.5C18.5 6.05229 18.0523 6.5 17.5 6.5C16.9477 6.5 16.5 6.05229 16.5 5.5C16.5 4.94772 16.9477 4.5 17.5 4.5C18.0523 4.5 18.5 4.94772 18.5 5.5Z" fill={color}/>
</Svg>;

export default OutlineHomeWashingMachine;
