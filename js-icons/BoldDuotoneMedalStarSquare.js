import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneMedalStarSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6V8H17V6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2Z" fill={color} opacity="0.5"/>
	<Path d="M10 6H14C16.8284 6 18.2426 6 19.1213 6.87868C20 7.75736 20 9.17157 20 12V13.0557C20 15.4614 20 16.6642 19.4026 17.6308C18.8052 18.5974 17.7294 19.1353 15.5777 20.2111C13.8221 21.089 12.9443 21.5279 12 21.5279C11.0557 21.5279 10.1779 21.089 8.42229 20.2111C6.27063 19.1353 5.19479 18.5974 4.5974 17.6308C4 16.6642 4 15.4614 4 13.0557V12C4 9.17157 4 7.75736 4.87868 6.87868C5.75736 6 7.17157 6 10 6ZM12 10C11.7159 10 11.5259 10.3408 11.1459 11.0225L11.0476 11.1989C10.9397 11.3926 10.8857 11.4894 10.8015 11.5533C10.7173 11.6172 10.6125 11.641 10.4028 11.6884L10.2119 11.7316C9.47396 11.8986 9.10501 11.982 9.01723 12.2643C8.92945 12.5466 9.18097 12.8407 9.68403 13.429L9.81418 13.5812C9.95713 13.7483 10.0286 13.8319 10.0608 13.9353C10.0929 14.0387 10.0821 14.1502 10.0605 14.3733L10.0408 14.5763C9.96476 15.3612 9.92674 15.7536 10.1565 15.9281C10.3864 16.1025 10.7318 15.9435 11.4227 15.6254L11.6014 15.5431C11.7978 15.4527 11.8959 15.4075 12 15.4075C12.1041 15.4075 12.2022 15.4527 12.3986 15.5431L12.5773 15.6254C13.2682 15.9435 13.6136 16.1025 13.8435 15.9281C14.0733 15.7536 14.0352 15.3612 13.9592 14.5763L13.9395 14.3733C13.9179 14.1502 13.9071 14.0387 13.9392 13.9353C13.9714 13.8319 14.0429 13.7483 14.1858 13.5812L14.316 13.429C14.819 12.8407 15.0706 12.5466 14.9828 12.2643C14.895 11.982 14.526 11.8986 13.7881 11.7316L13.5972 11.6884C13.3875 11.641 13.2827 11.6172 13.1985 11.5533C13.1143 11.4894 13.0603 11.3926 12.9524 11.1989L12.8541 11.0225C12.4741 10.3408 12.2841 10 12 10Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneMedalStarSquare;
