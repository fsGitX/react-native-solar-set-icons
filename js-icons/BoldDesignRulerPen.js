import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDesignRulerPen = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.5858 21.4142C13.1716 22 14.1144 22 16 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V6C22 4.11439 22 3.17157 21.4142 2.58579C20.8284 2 19.8856 2 18 2H16C14.1144 2 13.1716 2 12.5858 2.58579C12.0834 3.08814 12.0119 3.85306 12.0017 5.25L14 5.25C14.4142 5.25 14.75 5.58579 14.75 6C14.75 6.41421 14.4142 6.75 14 6.75H12V8.25H15C15.4142 8.25 15.75 8.58578 15.75 9C15.75 9.41421 15.4142 9.75 15 9.75H12V11.25H14C14.4142 11.25 14.75 11.5858 14.75 12C14.75 12.4142 14.4142 12.75 14 12.75H12V14.25L15 14.25C15.4142 14.25 15.75 14.5858 15.75 15C15.75 15.4142 15.4142 15.75 15 15.75L12 15.75V17.25H14C14.4142 17.25 14.75 17.5858 14.75 18C14.75 18.4142 14.4142 18.75 14 18.75H12.0017C12.0119 20.1469 12.0834 20.9119 12.5858 21.4142Z" fill={color}/>
	<Path d="M8 15.1935L8 7.21416C7.23101 7.53116 6.21665 7.80306 5.00018 7.80306C3.78352 7.80306 2.76904 7.53107 2 7.21401L2 15.1935C2 15.8161 2 16.1275 2.03777 16.433C2.08232 16.7934 2.166 17.1479 2.28733 17.4902C2.39019 17.7804 2.52943 18.0589 2.8079 18.6158L4.27639 21.5528C4.41343 21.8269 4.69357 22 5 22C5.30643 22 5.58657 21.8269 5.72361 21.5528L7.1921 18.6158C7.47057 18.0589 7.60981 17.7804 7.71267 17.4902C7.834 17.1479 7.91768 16.7934 7.96223 16.433C8 16.1275 8 15.8161 8 15.1935Z" fill={color}/>
	<Path d="M8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5L2 5.95702C2.02634 5.97025 2.0532 5.98352 2.08057 5.99679C2.76149 6.32693 3.75513 6.65872 5.00018 6.65872C6.24524 6.65872 7.23887 6.32693 7.9198 5.99679C7.94704 5.98358 7.97378 5.97037 8 5.9572V5Z" fill={color}/>
</Svg>;

export default BoldDesignRulerPen;
