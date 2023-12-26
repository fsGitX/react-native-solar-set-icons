import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneSettingsWidget2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 6.63415C2 4.07478 4.07478 2 6.63415 2C9.19352 2 11.2683 4.07478 11.2683 6.63415C11.2683 9.19352 9.19352 11.2683 6.63415 11.2683C4.07478 11.2683 2 9.19352 2 6.63415Z" fill={color} fillRule="evenodd"/>
	<Path d="M12.7319 17.3658C12.7319 14.8065 14.8067 12.7317 17.3661 12.7317C19.9254 12.7317 22.0002 14.8065 22.0002 17.3658C22.0002 19.9252 19.9254 22 17.3661 22C14.8067 22 12.7319 19.9252 12.7319 17.3658Z" fill={color} fillRule="evenodd" opacity="0.5"/>
	<Path d="M2 17.5C2 15.3787 2 14.318 2.65901 13.659C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 13.659C11 14.318 11 15.3787 11 17.5C11 19.6213 11 20.682 10.341 21.341C9.68198 22 8.62132 22 6.5 22C4.37868 22 3.31802 22 2.65901 21.341C2 20.682 2 19.6213 2 17.5Z" fill={color}/>
	<Path d="M13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneSettingsWidget2;