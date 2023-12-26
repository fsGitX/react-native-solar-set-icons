import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenEarth = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6 4.71053C6.78024 5.42105 8.38755 7.36316 8.57481 9.44737C8.70011 10.8421 9.39473 12.0496 10.5 12.631C10.9386 12.8618 11.4419 12.9939 12 13C12.7549 13.0082 13.5183 12.4629 13.5164 11.708C13.5158 11.4745 13.4773 11.2358 13.417 11.0163C13.3331 10.7108 13.3257 10.3595 13.5 10C14.1099 8.74254 15.3094 8.40477 16.2599 7.72186C16.6814 7.41898 17.0659 7.09947 17.2355 6.84211C17.7037 6.13158 18.1718 4.71053 17.9377 4" stroke="black" strokeWidth="1.5"/>
	<Path d="M22 13C21.6706 13.931 21.4375 16.375 17.7182 16.4138C17.7182 16.4138 16.9248 16.4138 16 16.6339M13.4365 18.2759C12.646 19.7655 13.1071 21.3793 13.4365 22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 20.6622C8.47087 21.513 10.1786 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenEarth;
