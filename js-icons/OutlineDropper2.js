import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineDropper2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17.1752 10.1014C16.5324 9.42322 15.4676 9.42322 14.8248 10.1014C14.5172 10.426 14.1419 10.8566 13.8388 11.3157C13.5544 11.7466 13.25 12.3242 13.25 12.9166C13.25 14.4523 14.4527 15.7499 16 15.7499C17.5473 15.7499 18.75 14.4523 18.75 12.9166C18.75 12.3242 18.4456 11.7466 18.1612 11.3157C17.8581 10.8566 17.4828 10.426 17.1752 10.1014ZM15.9135 11.1333C15.9428 11.1024 15.9734 11.0928 16 11.0928C16.0266 11.0928 16.0572 11.1024 16.0865 11.1333C16.3651 11.4272 16.6744 11.7862 16.9093 12.1421C17.1629 12.5263 17.25 12.7891 17.25 12.9166C17.25 13.6821 16.6618 14.2499 16 14.2499C15.3382 14.2499 14.75 13.6821 14.75 12.9166C14.75 12.7891 14.8371 12.5263 15.0907 12.1421C15.3256 11.7862 15.6349 11.4272 15.9135 11.1333Z" fill={color} fillRule="evenodd"/>
	<Path d="M11.9409 1.25009C12.7996 1.25627 13.6301 1.55699 14.2937 2.10196L14.2969 2.10454L14.3318 2.13359L14.4022 2.19187C14.6588 2.39908 14.9482 2.54134 15.25 2.61957V2C15.25 1.58579 15.5858 1.25 16 1.25C16.4142 1.25 16.75 1.58579 16.75 2V2.48894C16.9785 2.38474 17.1927 2.24051 17.3823 2.05668C17.3937 2.04566 17.4075 2.03182 17.4471 1.99228L17.9697 1.46967C18.2626 1.17678 18.7374 1.17678 19.0303 1.46967C19.3232 1.76257 19.3232 2.23744 19.0303 2.53033L18.5033 3.05738C18.47 3.09066 18.4473 3.11334 18.4266 3.13349C17.9437 3.60173 17.3633 3.91609 16.75 4.07349V5.25L18.052 5.25C18.9505 5.24997 19.6997 5.24995 20.2945 5.32991C20.9223 5.41432 21.4891 5.59999 21.9445 6.05546C22.4 6.51093 22.5857 7.07773 22.6701 7.70552C22.7501 8.30029 22.75 9.04949 22.75 9.94794L22.75 16.5069C22.75 17.3751 22.384 18.2031 21.742 18.7875C20.3125 20.0887 18.5512 20.8185 16.7496 20.9767C16.7499 20.9844 16.75 20.9922 16.75 21V22C16.75 22.4142 16.4142 22.75 16 22.75C15.5858 22.75 15.25 22.4142 15.25 22V21C15.25 20.9922 15.2501 20.9844 15.2504 20.9767C13.4488 20.8185 11.6875 20.0887 10.258 18.7875C9.61597 18.2031 9.25 17.3751 9.25 16.5069L9.25 9.948C9.24997 9.04952 9.24995 8.3003 9.32991 7.70552C9.41432 7.07773 9.59999 6.51093 10.0555 6.05546C10.5109 5.59999 11.0777 5.41432 11.7055 5.32991C12.3003 5.24995 13.0495 5.24997 13.948 5.25L15.25 5.25V4.14872C14.6125 4.05173 13.9929 3.78944 13.4597 3.35879C13.4374 3.34076 13.4125 3.32003 13.3768 3.29031L13.3726 3.28677L13.3418 3.26117L13.3403 3.26C12.9429 2.93416 12.4459 2.75421 11.932 2.75008L11.9301 2.75006L11.8907 2.75H8L4.80812 2.85315C4.07435 2.9518 3.68578 3.13225 3.40901 3.40901C3.13225 3.68578 2.9518 4.07435 2.85315 4.80812C2.7516 5.56347 2.75 6.56459 2.75 8V22.25C2.75 22.6642 2.41422 23 2 23C1.58579 23 1.25 22.6642 1.25 22.25V7.9451C1.24998 6.57753 1.24997 5.47521 1.36653 4.60825C1.48754 3.70814 1.74644 2.95027 2.34835 2.34835C2.95027 1.74644 3.70814 1.48754 4.60825 1.36653C5.47521 1.24997 6.57754 1.24998 7.94511 1.25H11.8927L11.9409 1.25009ZM19 9.25H21.2482C21.244 8.68056 21.2299 8.25089 21.1835 7.90539C21.1214 7.44393 21.0142 7.24643 20.8839 7.11612C20.7536 6.9858 20.5561 6.87858 20.0946 6.81654C19.6116 6.75159 18.964 6.75 18 6.75H14C13.036 6.75 12.3884 6.75159 11.9054 6.81654C11.4439 6.87858 11.2464 6.9858 11.1161 7.11612C10.9858 7.24643 10.8786 7.44393 10.8165 7.90539C10.7516 8.38843 10.75 9.03599 10.75 10V16.5069C10.75 16.9528 10.938 17.3781 11.2677 17.6783C13.9502 20.1199 18.0499 20.1199 20.7323 17.6783C21.062 17.3781 21.25 16.9528 21.25 16.5069V13.75H20C19.5858 13.75 19.25 13.4142 19.25 13C19.25 12.5858 19.5858 12.25 20 12.25H21.25V10.75H19C18.5858 10.75 18.25 10.4142 18.25 10C18.25 9.58579 18.5858 9.25 19 9.25Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineDropper2;