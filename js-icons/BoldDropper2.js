import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDropper2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.2937 2.10195C13.6301 1.55699 12.7996 1.25627 11.9409 1.25009L11.8927 1.25H7.94513C6.57755 1.24998 5.47521 1.24997 4.60825 1.36653C3.70814 1.48754 2.95027 1.74644 2.34835 2.34835C1.74644 2.95027 1.48754 3.70814 1.36653 4.60825C1.24997 5.47521 1.24998 6.57752 1.25 7.9451L1.25 22.25C1.25 22.6642 1.58579 23 2 23C2.41422 23 2.75 22.6642 2.75 22.25V8C2.75 6.56459 2.7516 5.56347 2.85315 4.80812C2.9518 4.07435 3.13225 3.68577 3.40901 3.40901C3.68577 3.13225 4.07435 2.9518 4.80812 2.85315L8 2.75H11.8907L11.9301 2.75006L11.932 2.75007C12.4459 2.75421 12.9429 2.93416 13.3403 3.26L13.3418 3.26117L13.3726 3.28677L13.3767 3.2902C13.4124 3.31999 13.4373 3.34073 13.4597 3.35879C13.9929 3.78944 14.6125 4.05173 15.25 4.14872V6H16.75V4.07349C17.3633 3.91609 17.9437 3.60173 18.4266 3.13349C18.4473 3.11334 18.47 3.09066 18.5033 3.05738L19.0303 2.53033C19.3232 2.23744 19.3232 1.76257 19.0303 1.46967C18.7374 1.17678 18.2626 1.17678 17.9697 1.46967L17.4471 1.99228C17.4075 2.03182 17.3937 2.04566 17.3823 2.05668C17.1927 2.24051 16.9785 2.38474 16.75 2.48894V2C16.75 1.58579 16.4142 1.25 16 1.25C15.5858 1.25 15.25 1.58579 15.25 2V2.61957C14.9482 2.54134 14.6588 2.39908 14.4022 2.19186L14.3318 2.13359L14.2969 2.10454L14.2937 2.10195Z" fill={color}/>
	<Path d="M22 12.25V10.75H19C18.5858 10.75 18.25 10.4142 18.25 10C18.25 9.58579 18.5858 9.25 19 9.25H21.9983C21.9881 7.85306 21.9166 7.08814 21.4142 6.58579C20.8284 6 19.8856 6 18 6H14C12.1144 6 11.1716 6 10.5858 6.58579C10 7.17157 10 8.11438 10 10V16.5069C10 17.1639 10.277 17.7906 10.7629 18.2329C12.0492 19.4037 13.6299 20.0673 15.25 20.2234V21.25C15.25 21.6642 15.5858 22 16 22C16.4142 22 16.75 21.6642 16.75 21.25V20.2234C18.3701 20.0673 19.9508 19.4037 21.2371 18.2329C21.723 17.7906 22 17.1639 22 16.5069V13.75H20C19.5858 13.75 19.25 13.4142 19.25 13C19.25 12.5858 19.5858 12.25 20 12.25H22ZM16 15C17.1046 15 18 14.0673 18 12.9167C18 12.1968 17.217 11.2359 16.6309 10.6174C16.2839 10.2513 15.7161 10.2513 15.3691 10.6174C14.783 11.2359 14 12.1968 14 12.9167C14 14.0673 14.8954 15 16 15Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDropper2;
