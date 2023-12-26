import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearDiploma = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="16" r="3" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 19.2597L9.73713 21.4292C9.41306 21.7399 9.25102 21.8952 9.1138 21.949C8.80111 22.0715 8.45425 21.9666 8.28977 21.6999C8.21758 21.5829 8.19509 21.3718 8.1501 20.9495C8.1247 20.7111 8.112 20.5919 8.07345 20.4921C7.98715 20.2686 7.80579 20.0947 7.57266 20.012C7.46853 19.975 7.3442 19.9629 7.09553 19.9385C6.65512 19.8954 6.43491 19.8738 6.31283 19.8046C6.03463 19.6469 5.92529 19.3144 6.05306 19.0146C6.10913 18.883 6.27116 18.7277 6.59523 18.417L8.07345 16.9998L9.1138 15.9595" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 19.2597L14.2629 21.4291C14.5869 21.7398 14.749 21.8952 14.8862 21.9489C15.1989 22.0714 15.5457 21.9666 15.7102 21.6999C15.7824 21.5828 15.8049 21.3717 15.8499 20.9495C15.8753 20.7111 15.888 20.5919 15.9265 20.4921C16.0129 20.2686 16.1942 20.0947 16.4273 20.012C16.5315 19.975 16.6558 19.9628 16.9045 19.9385C17.3449 19.8953 17.5651 19.8738 17.6872 19.8046C17.9654 19.6469 18.0747 19.3143 17.9469 19.0146C17.8909 18.883 17.7288 18.7277 17.4048 18.417L15.9265 16.9998L15 16.0732" stroke="black" strokeWidth="1.5"/>
	<Path d="M17.3197 17.9957C19.2921 17.9748 20.3915 17.8512 21.1213 17.1213C22 16.2426 22 14.8284 22 12V8C22 5.17157 22 3.75736 21.1213 2.87868C20.2426 2 18.8284 2 16 2L8 2C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8L2 12C2 14.8284 2 16.2426 2.87868 17.1213C3.64706 17.8897 4.82497 17.9862 7 17.9983" stroke="black" strokeWidth="1.5"/>
	<Path d="M9 6L15 6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 9.5H17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearDiploma;
