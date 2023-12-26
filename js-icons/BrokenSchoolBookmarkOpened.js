import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSchoolBookmarkOpened = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2M21.9449 16C21.8356 18.1934 21.5093 19.5618 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.43821 2.49073 5.80655 2.16444 8 2.0551" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 14C2 11.1997 2 9.79961 2.54497 8.73005C3.02433 7.78924 3.78924 7.02433 4.73005 6.54497C5.79961 6 7.19974 6 10 6H14C16.8003 6 18.2004 6 19.27 6.54497C20.2108 7.02433 20.9757 7.78924 21.455 8.73005C21.8514 9.50797 21.9595 10.4608 21.989 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17 6V10.8076C17 11.7825 17 12.27 16.8709 12.5607C16.5766 13.2233 15.8506 13.5805 15.1461 13.4095C14.8369 13.3344 14.4507 13.037 13.6782 12.4422C13.2421 12.1064 13.024 11.9385 12.797 11.8398C12.2886 11.619 11.7114 11.619 11.203 11.8398C10.976 11.9385 10.7579 12.1064 10.3218 12.4422C9.5493 13.037 9.16307 13.3344 8.85391 13.4095C8.14942 13.5805 7.42342 13.2233 7.12914 12.5607C7 12.27 7 11.7825 7 10.8076V6" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default BrokenSchoolBookmarkOpened;
