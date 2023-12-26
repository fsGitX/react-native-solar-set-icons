import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldSportsTreadmillRound = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17 4C17 5.10457 16.1046 6 15 6C13.8954 6 13 5.10457 13 4C13 2.89543 13.8954 2 15 2C16.1046 2 17 2.89543 17 4Z" fill={color}/>
	<Path d="M7.25831 5.39162C7.99545 4.93091 8.91147 4.86037 9.71046 5.20279C11.4363 5.94244 11.8694 8.19127 10.5417 9.51898L10.2124 9.84822C10.0802 9.98049 10.0428 10.0186 10.018 10.0472C9.5827 10.5498 9.61696 11.3051 10.0959 11.7662C10.1232 11.7925 10.1639 11.827 10.3076 11.9467L10.3183 11.9556C10.3991 12.023 10.4549 12.0695 10.5077 12.117C11.2618 12.7952 11.709 13.75 11.7473 14.7636C11.75 14.8345 11.75 14.9072 11.75 15.0124V16C11.75 16.4142 11.4142 16.75 11 16.75C10.5858 16.75 10.25 16.4142 10.25 16V15.0263C10.25 14.902 10.2499 14.8593 10.2484 14.8202C10.2254 14.2121 9.9571 13.6392 9.50464 13.2322C9.47553 13.2061 9.44278 13.1786 9.34736 13.0991C9.34017 13.0931 9.33308 13.0872 9.32609 13.0814C9.21351 12.9876 9.12714 12.9156 9.05566 12.8468C8.00192 11.8325 7.92655 10.1708 8.88412 9.06518C8.94908 8.99019 9.02858 8.91072 9.13221 8.80712C9.13864 8.80069 9.14517 8.79417 9.15178 8.78756L9.48102 8.45832C10.0583 7.88099 9.87003 6.90313 9.11958 6.58151C8.77215 6.43261 8.37384 6.46329 8.05331 6.66362L4.8975 8.636C4.54625 8.85553 4.08353 8.74875 3.864 8.3975C3.64447 8.04625 3.75125 7.58353 4.1025 7.364L7.25831 5.39162ZM11.7885 9.76283C11.9195 9.36987 12.3442 9.1575 12.7372 9.28849C13.5569 9.56173 14.4431 9.56173 15.2628 9.28849C15.6558 9.1575 16.0805 9.36987 16.2115 9.76283C16.3425 10.1558 16.1301 10.5805 15.7372 10.7115C14.6096 11.0874 13.3904 11.0874 12.2628 10.7115C11.8699 10.5805 11.6575 10.1558 11.7885 9.76283ZM7.53033 13.4697C7.82322 13.7626 7.82322 14.2374 7.53033 14.5303C6.42924 15.6314 4.93585 16.25 3.37868 16.25H3C2.58579 16.25 2.25 15.9142 2.25 15.5C2.25 15.0858 2.58579 14.75 3 14.75H3.37868C4.53803 14.75 5.64989 14.2895 6.46967 13.4697C6.76256 13.1768 7.23744 13.1768 7.53033 13.4697Z" fill={color} fillRule="evenodd"/>
	<Path d="M22.1471 7.73544C22.5533 7.6542 22.8167 7.25908 22.7354 6.85291C22.6542 6.44674 22.2591 6.18333 21.8529 6.26456C20.0428 6.62658 18.6539 8.08452 18.3801 9.91005L17.2674 17.3278L2.89949 19.8422C2.37943 19.9332 2 20.3848 2 20.9128C2 21.513 2.48659 21.9996 3.08684 21.9996H19.4888C20.8757 21.9996 22 20.8753 22 19.4884C22 17.9284 20.5926 16.7459 19.0559 17.0148L18.8251 17.0552L19.8635 10.1326C20.0436 8.93217 20.9568 7.97349 22.1471 7.73544Z" fill={color}/>
</Svg>;

export default BoldSportsTreadmillRound;
