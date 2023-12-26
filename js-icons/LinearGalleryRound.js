import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearGalleryRound = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M2 10.1537L2.98073 10.0129C9.95896 9.01086 15.9238 15.0312 14.8571 21.9998" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 13.385L21.0266 13.2502C18.1828 12.8564 15.6097 14.2722 14.2846 16.5005" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="16" cy="8" r="2" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearGalleryRound;
