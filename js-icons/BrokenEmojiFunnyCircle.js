import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenEmojiFunnyCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.9126 15.9331C10.1709 16.2485 11.5985 16.2487 13.0351 15.8638C14.4717 15.4788 15.7079 14.7649 16.64 13.8626" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M13 15.9999L13.478 16.9737C13.8393 17.7099 14.7249 18.0193 15.4661 17.6685C16.2223 17.3105 16.5394 16.403 16.1708 15.6519L15.7115 14.7163" stroke="black" strokeWidth="1.5"/>
	<Path d="M4.92847 4.92711C6.12901 3.72457 7.65248 2.8122 9.41185 2.34078C14.7465 0.911364 20.2299 4.07719 21.6593 9.41185C23.0887 14.7465 19.9229 20.2299 14.5882 21.6593C9.25357 23.0887 3.7702 19.9229 2.34078 14.5882C1.86936 12.8289 1.89775 11.0533 2.33892 9.41235" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<ellipse cx="14.5094" cy="9.77454" fill={color} rx="1" ry="1.5" transform="rotate(-15 14.5094 9.77454)"/>
	<ellipse cx="8.71402" cy="11.3278" fill={color} rx="1" ry="1.5" transform="rotate(-15 8.71402 11.3278)"/>
</Svg>;

export default BrokenEmojiFunnyCircle;
