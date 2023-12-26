import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneSportsHiking = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14 4.5C14 5.88071 12.8807 7 11.5 7C10.1193 7 9 5.88071 9 4.5C9 3.11929 10.1193 2 11.5 2C12.8807 2 14 3.11929 14 4.5Z" fill={color}/>
	<Path d="M19 7.25C19.4142 7.25 19.75 7.58579 19.75 8V10.4943C19.75 10.4978 19.75 10.5014 19.75 10.5049V22C19.75 22.4142 19.4142 22.75 19 22.75C18.5858 22.75 18.25 22.4142 18.25 22V12.1014C17.7655 12.5057 17.38 12.8203 16.9431 12.9798C16.334 13.2022 15.666 13.2022 15.0569 12.9798C14.6042 12.8146 14.2068 12.4828 13.6972 12.0574C13.6666 12.0319 13.6356 12.006 13.6042 11.9798L13.5229 11.912C13.2914 11.7191 13.2006 11.6439 13.0529 11.5412C12.7954 11.362 12.2966 11.1095 11.9998 11.0081C11.9453 10.9894 11.9036 10.9746 11.8715 10.9625C11.8657 10.9602 11.8595 10.9578 11.853 10.9553C11.6736 10.911 11.5571 10.8829 11.4671 10.8656C11.4166 10.856 11.3884 10.8526 11.3754 10.8515C11.3709 10.8529 11.3646 10.8552 11.3563 10.8586C11.3301 10.8695 11.297 10.8872 11.2625 10.9116C11.228 10.9359 11.2001 10.9611 11.1811 10.9822C11.1722 10.992 11.1672 10.9987 11.1649 11.0019C11.1621 11.0092 11.1583 11.0215 11.1534 11.0496C11.1439 11.1029 11.1364 11.1738 11.1217 11.3208L10.9595 12.9425C10.866 13.8771 10.8554 14.127 10.9207 14.3356C10.9589 14.4577 11.0156 14.5732 11.0888 14.6781C11.2139 14.8574 11.4181 15.0019 12.2146 15.4997C12.2501 15.5219 12.2853 15.5438 12.3199 15.5655C13.1158 16.0625 13.6671 16.4067 14.0654 16.9015C14.2651 17.1497 14.4324 17.4222 14.5632 17.7127C14.8241 18.2918 14.8814 18.9392 14.9642 19.8739C14.9678 19.9146 14.9715 19.9558 14.9752 19.9976L15.1474 21.9335C15.1841 22.3461 14.8794 22.7103 14.4669 22.747C14.0543 22.7838 13.6901 22.4791 13.6533 22.0665L13.4811 20.1306C13.3826 19.0236 13.3394 18.6479 13.1956 18.3287C13.1171 18.1545 13.0167 17.9909 12.8969 17.842C12.6774 17.5693 12.362 17.3607 11.4196 16.7717C11.3819 16.7481 11.3447 16.7249 11.3079 16.702C10.6781 16.3092 10.1822 16 9.85885 15.5368C9.69775 15.306 9.57303 15.0519 9.48904 14.7833C9.32044 14.2441 9.37917 13.6626 9.45375 12.9242C9.45811 12.8811 9.46252 12.8374 9.46694 12.7932L9.6291 11.1716C9.63069 11.1557 9.63225 11.1397 9.63383 11.1236C9.65637 10.8935 9.68125 10.6394 9.80332 10.3722C9.93937 10.0745 10.1771 9.84157 10.3979 9.68582C10.6187 9.53007 10.9178 9.38431 11.244 9.35606C11.428 9.34012 11.5998 9.36376 11.7495 9.39245C11.8932 9.42 12.0647 9.46243 12.2563 9.50983L12.2817 9.51611C12.2836 9.51661 12.2916 9.5186 12.3005 9.52104C12.3051 9.5223 12.3156 9.5252 12.3286 9.5293C12.3373 9.53204 12.3708 9.54259 12.4111 9.56068C12.4163 9.56301 12.423 9.56609 12.431 9.56995C12.4439 9.57455 12.4615 9.58069 12.4849 9.58868C12.9137 9.73524 13.5377 10.0511 13.9096 10.3099C14.1147 10.4526 14.2517 10.5668 14.4711 10.7496L14.4831 10.7597L14.5645 10.8275C15.213 11.3679 15.3971 11.5072 15.5713 11.5708C15.8482 11.6718 16.1518 11.6718 16.4287 11.5708C16.6029 11.5072 16.787 11.3679 17.4355 10.8275L18.25 10.1487V8C18.25 7.58579 18.5858 7.25 19 7.25ZM12.3696 10.9465C12.3696 10.9465 12.3719 10.9456 12.375 10.9444C12.3668 10.9476 12.3633 10.9488 12.3696 10.9465ZM11.829 9.54727L11.8311 9.54647C11.8355 9.54473 11.8443 9.54141 11.8379 9.54382C11.8379 9.54382 11.8337 9.54541 11.829 9.54727Z" fill={color} fillRule="evenodd"/>
	<g opacity="0.5">
		<Path d="M8.71151 9.76303C8.8425 10.156 8.63013 10.5807 8.23717 10.7117L6.56517 11.269C6.07836 11.4313 5.75 11.8869 5.75 12.4C5.75 12.4838 5.79731 12.5603 5.87221 12.5978L8.33541 13.8294C8.70589 14.0146 8.85606 14.4651 8.67082 14.8356C8.48558 15.2061 8.03507 15.3563 7.66459 15.171L5.20139 13.9394C4.61832 13.6479 4.25 13.0519 4.25 12.4C4.25 11.2412 4.9915 10.2125 6.09083 9.84602L7.76283 9.28869C8.15579 9.15771 8.58053 9.37008 8.71151 9.76303Z" fill={color}/>
		<Path d="M9.41603 16.8762C9.76067 17.1059 9.8538 17.5716 9.62404 17.9162L6.62404 22.4162C6.39427 22.7609 5.92862 22.854 5.58397 22.6242C5.23933 22.3945 5.1462 21.9288 5.37596 21.5842L8.37596 17.0842C8.60573 16.7395 9.07138 16.6464 9.41603 16.8762Z" fill={color}/>
	</g>
</Svg>;

export default BoldDuotoneSportsHiking;
