import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearMedalStarSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17 6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6" stroke="black" strokeWidth="1.5"/>
	<Path d="M11.1459 11.0225C11.5259 10.3408 11.7159 10 12 10C12.2841 10 12.4741 10.3408 12.8541 11.0225L12.9524 11.1989C13.0603 11.3926 13.1143 11.4894 13.1985 11.5533C13.2827 11.6172 13.3875 11.641 13.5972 11.6884L13.7881 11.7316C14.526 11.8986 14.895 11.982 14.9828 12.2643C15.0706 12.5466 14.819 12.8407 14.316 13.429L14.1858 13.5812C14.0429 13.7483 13.9714 13.8319 13.9392 13.9353C13.9071 14.0387 13.9179 14.1502 13.9395 14.3733L13.9592 14.5763C14.0352 15.3612 14.0733 15.7536 13.8435 15.9281C13.6136 16.1025 13.2682 15.9435 12.5773 15.6254L12.3986 15.5431C12.2022 15.4527 12.1041 15.4075 12 15.4075C11.8959 15.4075 11.7978 15.4527 11.6014 15.5431L11.4227 15.6254C10.7318 15.9435 10.3864 16.1025 10.1565 15.9281C9.92674 15.7536 9.96476 15.3612 10.0408 14.5763L10.0605 14.3733C10.0821 14.1502 10.0929 14.0387 10.0608 13.9353C10.0286 13.8319 9.95713 13.7483 9.81418 13.5812L9.68403 13.429C9.18097 12.8407 8.92945 12.5466 9.01723 12.2643C9.10501 11.982 9.47396 11.8986 10.2119 11.7316L10.4028 11.6884C10.6125 11.641 10.7173 11.6172 10.8015 11.5533C10.8857 11.4894 10.9397 11.3926 11.0476 11.1989L11.1459 11.0225Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M14 6H10C7.17157 6 5.75736 6 4.87868 6.87868C4 7.75736 4 9.17157 4 12V13.0557C4 15.4614 4 16.6642 4.5974 17.6308C5.19479 18.5974 6.27063 19.1353 8.42229 20.2111C10.1779 21.089 11.0557 21.5279 12 21.5279C12.9443 21.5279 13.8221 21.089 15.5777 20.2111C17.7294 19.1353 18.8052 18.5974 19.4026 17.6308C20 16.6642 20 15.4614 20 13.0557V12C20 9.17157 20 7.75736 19.1213 6.87868C18.2426 6 16.8284 6 14 6Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearMedalStarSquare;
