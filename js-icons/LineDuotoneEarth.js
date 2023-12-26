import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneEarth = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1.5"/>
	<Path d="M6 4.71053C6.78024 5.42105 8.38755 7.36316 8.57481 9.44737C8.74984 11.3955 10.0357 12.9786 12 13C12.7549 13.0082 13.5183 12.4629 13.5164 11.708C13.5158 11.4745 13.4773 11.2358 13.417 11.0163C13.3331 10.7108 13.3257 10.3595 13.5 10C14.1099 8.74254 15.3094 8.40477 16.2599 7.72186C16.6814 7.41898 17.0659 7.09947 17.2355 6.84211C17.7037 6.13158 18.1718 4.71053 17.9377 4" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M22 13C21.6706 13.931 21.4375 16.375 17.7182 16.4138C17.7182 16.4138 14.4246 16.4138 13.4365 18.2759C12.646 19.7655 13.1071 21.3793 13.4365 22" opacity="0.5" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneEarth;
