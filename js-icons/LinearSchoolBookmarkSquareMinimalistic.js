import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearSchoolBookmarkSquareMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M17 2V8.8076C17 9.78253 17 10.27 16.8709 10.5607C16.5766 11.2233 15.8506 11.5805 15.1461 11.4095C14.8369 11.3344 14.4507 11.037 13.6782 10.4422C13.2421 10.1064 13.024 9.9385 12.797 9.83985C12.2886 9.61899 11.7114 9.61899 11.203 9.83985C10.976 9.9385 10.7579 10.1064 10.3218 10.4422C9.5493 11.037 9.16307 11.3344 8.85391 11.4095C8.14942 11.5805 7.42342 11.2233 7.12914 10.5607C7 10.27 7 9.78253 7 8.8076V2" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearSchoolBookmarkSquareMinimalistic;