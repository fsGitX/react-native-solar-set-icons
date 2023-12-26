import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneFileFavourite = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M15.3929 4.05365L14.8912 4.61112L14.8912 4.61112L15.3929 4.05365ZM19.3517 7.61654L18.85 8.17402L18.85 8.17402L19.3517 7.61654ZM21.654 10.1541L20.9689 10.4592L20.9689 10.4592L21.654 10.1541ZM3.17157 20.8284L3.7019 20.2981L3.7019 20.2981L3.17157 20.8284ZM20.8284 20.8284L20.2981 20.2981L20.2981 20.2981L20.8284 20.8284ZM14 21.25H10V22.75H14V21.25ZM2.75 14V10H1.25V14H2.75ZM21.25 13.5629V14H22.75V13.5629H21.25ZM14.8912 4.61112L18.85 8.17402L19.8534 7.05907L15.8947 3.49618L14.8912 4.61112ZM22.75 13.5629C22.75 11.8745 22.7651 10.8055 22.3391 9.84897L20.9689 10.4592C21.2349 11.0565 21.25 11.742 21.25 13.5629H22.75ZM18.85 8.17402C20.2034 9.3921 20.7029 9.86199 20.9689 10.4592L22.3391 9.84897C21.9131 8.89241 21.1084 8.18853 19.8534 7.05907L18.85 8.17402ZM10.0298 2.75C11.6116 2.75 12.2085 2.76158 12.7405 2.96573L13.2779 1.5653C12.4261 1.23842 11.498 1.25 10.0298 1.25V2.75ZM15.8947 3.49618C14.8087 2.51878 14.1297 1.89214 13.2779 1.5653L12.7405 2.96573C13.2727 3.16993 13.7215 3.55836 14.8912 4.61112L15.8947 3.49618ZM10 21.25C8.09318 21.25 6.73851 21.2484 5.71085 21.1102C4.70476 20.975 4.12511 20.7213 3.7019 20.2981L2.64124 21.3588C3.38961 22.1071 4.33855 22.4392 5.51098 22.5969C6.66182 22.7516 8.13558 22.75 10 22.75V21.25ZM1.25 14C1.25 15.8644 1.24841 17.3382 1.40313 18.489C1.56076 19.6614 1.89288 20.6104 2.64124 21.3588L3.7019 20.2981C3.27869 19.8749 3.02502 19.2952 2.88976 18.2892C2.75159 17.2615 2.75 15.9068 2.75 14H1.25ZM14 22.75C15.8644 22.75 17.3382 22.7516 18.489 22.5969C19.6614 22.4392 20.6104 22.1071 21.3588 21.3588L20.2981 20.2981C19.8749 20.7213 19.2952 20.975 18.2892 21.1102C17.2615 21.2484 15.9068 21.25 14 21.25V22.75ZM21.25 14C21.25 15.9068 21.2484 17.2615 21.1102 18.2892C20.975 19.2952 20.7213 19.8749 20.2981 20.2981L21.3588 21.3588C22.1071 20.6104 22.4392 19.6614 22.5969 18.489C22.7516 17.3382 22.75 15.8644 22.75 14H21.25ZM2.75 10C2.75 8.09318 2.75159 6.73851 2.88976 5.71085C3.02502 4.70476 3.27869 4.12511 3.7019 3.7019L2.64124 2.64124C1.89288 3.38961 1.56076 4.33855 1.40313 5.51098C1.24841 6.66182 1.25 8.13558 1.25 10H2.75ZM10.0298 1.25C8.15538 1.25 6.67442 1.24842 5.51887 1.40307C4.34232 1.56054 3.39019 1.8923 2.64124 2.64124L3.7019 3.7019C4.12453 3.27928 4.70596 3.02525 5.71785 2.88982C6.75075 2.75158 8.11311 2.75 10.0298 2.75V1.25Z" fill={color}/>
	<Path d="M13 2.5V5C13 7.35702 13 8.53553 13.7322 9.26777C14.4645 10 15.643 10 18 10H22" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M8.14595 13.0225C8.52594 12.3408 8.71594 12 9 12C9.28406 12 9.47406 12.3408 9.85405 13.0225L9.95236 13.1989C10.0603 13.3926 10.1143 13.4894 10.1985 13.5533C10.2827 13.6172 10.3875 13.641 10.5972 13.6884L10.7881 13.7316C11.526 13.8986 11.895 13.982 11.9828 14.2643C12.0706 14.5466 11.819 14.8407 11.316 15.429L11.1858 15.5812C11.0429 15.7483 10.9714 15.8319 10.9392 15.9353C10.9071 16.0387 10.9179 16.1502 10.9395 16.3733L10.9592 16.5763C11.0352 17.3612 11.0733 17.7536 10.8435 17.9281C10.6136 18.1025 10.2682 17.9435 9.5773 17.6254L9.39855 17.5431C9.20222 17.4527 9.10406 17.4075 9 17.4075C8.89594 17.4075 8.79778 17.4527 8.60145 17.5431L8.4227 17.6254C7.7318 17.9435 7.38635 18.1025 7.15654 17.9281C6.92674 17.7536 6.96476 17.3612 7.04082 16.5763L7.0605 16.3733C7.08211 16.1502 7.09291 16.0387 7.06076 15.9353C7.0286 15.8319 6.95713 15.7483 6.81418 15.5812L6.68403 15.429C6.18097 14.8407 5.92945 14.5466 6.01723 14.2643C6.10501 13.982 6.47396 13.8986 7.21186 13.7316L7.40277 13.6884C7.61246 13.641 7.7173 13.6172 7.80148 13.5533C7.88567 13.4894 7.93966 13.3926 8.04764 13.1989L8.14595 13.0225Z" opacity="0.5" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneFileFavourite;
