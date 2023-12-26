import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearBagHeart = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.74166 20.5545C4.94128 22 7.17399 22 11.6394 22H12.3606C16.826 22 19.0587 22 20.2583 20.5545M3.74166 20.5545C2.54204 19.1091 2.9535 16.9146 3.77642 12.5257C4.36164 9.40452 4.65425 7.84393 5.76515 6.92196M3.74166 20.5545C3.74166 20.5545 3.74166 20.5545 3.74166 20.5545ZM20.2583 20.5545C21.4579 19.1091 21.0465 16.9146 20.2236 12.5257C19.6383 9.40452 19.3457 7.84393 18.2348 6.92196M20.2583 20.5545C20.2583 20.5545 20.2583 20.5545 20.2583 20.5545ZM18.2348 6.92196C17.1239 6 15.5361 6 12.3606 6H11.6394C8.46383 6 6.87605 6 5.76515 6.92196M18.2348 6.92196C18.2348 6.92196 18.2348 6.92196 18.2348 6.92196ZM5.76515 6.92196C5.76515 6.92196 5.76515 6.92196 5.76515 6.92196Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 12.1913L11.4813 12.7331C11.7713 13.0108 12.2287 13.0108 12.5187 12.7331L12 12.1913ZM11.0429 15.8656L10.5992 16.4703L11.0429 15.8656ZM12.9571 15.8656L12.5135 15.2609L12.9571 15.8656ZM12 16.3276L12 17.0776L12 16.3276ZM11.4865 15.2609C11.0686 14.9542 10.6081 14.5712 10.2595 14.1681C9.89122 13.7423 9.75 13.4113 9.75 13.1967H8.25C8.25 13.9666 8.6912 14.6479 9.1249 15.1493C9.57819 15.6735 10.1391 16.1327 10.5992 16.4703L11.4865 15.2609ZM9.75 13.1967C9.75 12.6207 10.0126 12.37 10.2419 12.2896C10.4922 12.2019 10.9558 12.2299 11.4813 12.7331L12.5187 11.6496C11.6943 10.8603 10.6579 10.5543 9.74566 10.8741C8.81245 11.2012 8.25 12.0995 8.25 13.1967H9.75ZM13.4008 16.4703C13.8609 16.1327 14.4218 15.6735 14.8751 15.1493C15.3088 14.6479 15.75 13.9666 15.75 13.1967H14.25C14.25 13.4113 14.1088 13.7423 13.7405 14.1681C13.3919 14.5713 12.9314 14.9542 12.5135 15.2609L13.4008 16.4703ZM15.75 13.1967C15.75 12.0995 15.1875 11.2012 14.2543 10.8741C13.3421 10.5543 12.3057 10.8603 11.4813 11.6496L12.5187 12.7331C13.0442 12.2299 13.5078 12.2019 13.7581 12.2896C13.9874 12.37 14.25 12.6207 14.25 13.1967H15.75ZM10.5992 16.4703C10.9678 16.7407 11.3816 17.0775 12 17.0776L12 15.5776C11.9756 15.5776 11.9605 15.5775 11.9061 15.5488C11.8202 15.5034 11.7128 15.4269 11.4865 15.2609L10.5992 16.4703ZM12.5135 15.2609C12.2872 15.4269 12.1798 15.5034 12.0939 15.5488C12.0395 15.5775 12.0244 15.5776 12 15.5776L12 17.0776C12.6184 17.0776 13.0322 16.7407 13.4008 16.4703L12.5135 15.2609Z" fill={color}/>
	<Path d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearBagHeart;
