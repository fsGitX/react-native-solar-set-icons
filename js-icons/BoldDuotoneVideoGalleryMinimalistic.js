import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneVideoGalleryMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z" fill={color} fillRule="evenodd" opacity="0.5"/>
	<Path d="M8.50397 13.1766C7.91991 12.5566 6.94501 12.5241 6.32092 13.1038L5.51041 13.8566C5.20691 14.1385 4.73236 14.1209 4.45047 13.8174C4.16858 13.5139 4.1861 13.0394 4.4896 12.7575L5.3001 12.0047C6.52816 10.8641 8.44651 10.9281 9.59579 12.1481L12.2433 14.9584C12.5202 15.2523 12.9735 15.2919 13.2972 15.0504C14.4971 14.1553 16.1679 14.257 17.2503 15.2911L19.5181 17.4577C19.8176 17.7438 19.8284 18.2186 19.5423 18.5181C19.2562 18.8176 18.7814 18.8284 18.4819 18.5423L16.2141 16.3757C15.661 15.8473 14.8073 15.7953 14.1941 16.2527C13.2596 16.9499 11.9509 16.8356 11.1515 15.9869L8.50397 13.1766Z" fill={color}/>
	<Path d="M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8Z" fill={color}/>
</Svg>;

export default BoldDuotoneVideoGalleryMinimalistic;
