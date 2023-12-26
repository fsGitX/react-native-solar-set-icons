import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldShop = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.77791 3.65484C3.59687 4.01573 3.50783 4.46093 3.32975 5.35133L2.73183 8.34093C2.35324 10.2339 3.8011 12 5.73155 12C7.30318 12 8.61911 10.8091 8.77549 9.24527L8.8445 8.55515C8.68141 10.4038 10.1385 12 11.9998 12C13.8737 12 15.338 10.382 15.1515 8.51737L15.2245 9.24527C15.3809 10.8091 16.6968 12 18.2685 12C20.1989 12 21.6468 10.2339 21.2682 8.34093L20.6703 5.35133C20.4922 4.46095 20.4031 4.01573 20.2221 3.65484C19.8406 2.89439 19.1542 2.33168 18.3337 2.10675C17.9443 2 17.4903 2 16.5823 2H14.4998H7.41771C6.50969 2 6.05567 2 5.66628 2.10675C4.84579 2.33168 4.15938 2.89439 3.77791 3.65484Z" fill={color}/>
	<Path d="M18.2685 13.4997C19.0856 13.4997 19.8448 13.2874 20.5 12.9187V13.9997C20.5 17.771 20.5 19.6566 19.3284 20.8282C18.3853 21.7712 16.9796 21.9552 14.5 21.991V18.4998C14.5 17.5651 14.5 17.0978 14.299 16.7498C14.1674 16.5217 13.978 16.3324 13.75 16.2007C13.4019 15.9998 12.9346 15.9998 12 15.9998C11.0654 15.9998 10.5981 15.9998 10.25 16.2007C10.022 16.3324 9.83261 16.5217 9.70096 16.7498C9.5 17.0978 9.5 17.5651 9.5 18.4998V21.991C7.02043 21.9552 5.61466 21.7712 4.67157 20.8282C3.5 19.6566 3.5 17.771 3.5 13.9997V12.9186C4.15524 13.2874 4.91439 13.4997 5.73157 13.4997C6.92864 13.4997 8.02617 13.0361 8.84435 12.2717C9.67168 13.0318 10.7765 13.4997 11.9998 13.4997C13.2232 13.4997 14.3281 13.0317 15.1555 12.2715C15.9737 13.036 17.0713 13.4997 18.2685 13.4997Z" fill={color}/>
</Svg>;

export default BoldShop;