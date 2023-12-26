import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlinePointOnMap = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5.25 7.70031C5.25 4.10215 8.30876 1.25 12 1.25C15.608 1.25 18.6116 3.97488 18.7454 7.45788L19.2231 7.61714C19.6863 7.77148 20.0922 7.90676 20.4142 8.05657C20.7623 8.21853 21.0814 8.42714 21.3253 8.76554C21.5692 9.10394 21.6662 9.47259 21.7098 9.85407C21.7501 10.207 21.75 10.6348 21.75 11.123V16.8712C21.75 17.4806 21.7501 18.0005 21.7028 18.4176C21.653 18.8563 21.5418 19.2875 21.2404 19.6553C21.0674 19.8665 20.8573 20.0445 20.6205 20.1805C20.2081 20.4173 19.7645 20.4561 19.3236 20.433C18.9044 20.4111 18.3915 20.3256 17.7904 20.2254L17.7488 20.2185C16.456 20.003 15.9351 19.9216 15.4274 19.9641C15.2417 19.9796 15.0571 20.0074 14.875 20.0471C14.3774 20.1558 13.8988 20.3891 12.716 20.9805C12.6749 21.0011 12.6342 21.0214 12.594 21.0415C11.2114 21.7331 10.3595 22.1592 9.44031 22.2923C9.16384 22.3323 8.88482 22.3522 8.60546 22.3516C7.67668 22.3499 6.77995 22.0508 5.32536 21.5657C5.28328 21.5517 5.24074 21.5375 5.19772 21.5231L4.81415 21.3953L4.77684 21.3828C4.31373 21.2285 3.90783 21.0932 3.5858 20.9434C3.23766 20.7815 2.91861 20.5729 2.67471 20.2345C2.4308 19.8961 2.33379 19.5274 2.29024 19.1459C2.24995 18.793 2.24997 18.3652 2.25 17.877L2.25 12.8572C2.24997 12.0711 2.24994 11.4085 2.31729 10.8895C2.38759 10.3478 2.54652 9.81811 2.98262 9.4198C3.11082 9.30271 3.25213 9.20085 3.40375 9.11626C3.91953 8.8285 4.47226 8.84521 5.00841 8.94983C5.11717 8.97105 5.23109 8.99718 5.35019 9.02754C5.28411 8.5817 5.25 8.13723 5.25 7.70031ZM5.74869 10.7093C5.32072 10.5713 4.99224 10.475 4.72113 10.4221C4.32599 10.345 4.19646 10.3917 4.13459 10.4262C4.08405 10.4544 4.03694 10.4883 3.99421 10.5274C3.9419 10.5751 3.85663 10.6833 3.80482 11.0825C3.75151 11.4933 3.75 12.0575 3.75 12.908V17.8377C3.75 18.3768 3.75114 18.7181 3.78055 18.9758C3.80779 19.2143 3.85234 19.303 3.89157 19.3574C3.9308 19.4118 4.00083 19.4821 4.21849 19.5834C4.45364 19.6928 4.77709 19.8018 5.28849 19.9723L5.67205 20.1001C7.29563 20.6413 7.95089 20.8504 8.6083 20.8516C8.81478 20.852 9.02101 20.8374 9.22537 20.8078C9.87582 20.7136 10.5009 20.411 12.0452 19.6389C12.0765 19.6232 12.1074 19.6078 12.138 19.5925C13.1987 19.062 13.852 18.7352 14.555 18.5817C14.8014 18.5279 15.051 18.4903 15.3023 18.4693C16.0193 18.4093 16.7344 18.5286 17.8945 18.7221C17.9278 18.7276 17.9614 18.7332 17.9954 18.7389C18.6497 18.8479 19.0779 18.9181 19.4019 18.9351C19.7138 18.9514 19.821 18.9098 19.8735 18.8797C19.9524 18.8344 20.0225 18.775 20.0801 18.7046C20.1185 18.6578 20.1771 18.5589 20.2123 18.2486C20.2489 17.9262 20.25 17.4923 20.25 16.829V11.1623C20.25 10.6232 20.2489 10.2819 20.2195 10.0242C20.1922 9.7857 20.1477 9.69704 20.1084 9.64261C20.0692 9.58818 19.9992 9.51787 19.7815 9.41661C19.5464 9.30722 19.2229 9.19821 18.7115 9.02774L18.6527 9.00813C18.4625 10.3095 17.9996 11.6233 17.3173 12.7959C16.4048 14.364 15.0697 15.7299 13.3971 16.4595C12.5094 16.8468 11.4906 16.8468 10.6029 16.4595C8.93027 15.7299 7.59519 14.364 6.68273 12.7959C6.29871 12.136 5.9842 11.4313 5.74869 10.7093ZM12 2.75C9.06383 2.75 6.75 5.00208 6.75 7.70031C6.75 9.11775 7.18744 10.6808 7.97922 12.0415C8.77121 13.4026 9.88753 14.5109 11.2027 15.0847C11.708 15.3051 12.292 15.3051 12.7973 15.0847C14.1125 14.5109 15.2288 13.4026 16.0208 12.0415C16.8126 10.6808 17.25 9.11775 17.25 7.70031C17.25 5.00208 14.9362 2.75 12 2.75ZM12 6.75C11.3096 6.75 10.75 7.30964 10.75 8C10.75 8.69036 11.3096 9.25 12 9.25C12.6904 9.25 13.25 8.69036 13.25 8C13.25 7.30964 12.6904 6.75 12 6.75ZM9.25 8C9.25 6.48122 10.4812 5.25 12 5.25C13.5188 5.25 14.75 6.48122 14.75 8C14.75 9.51878 13.5188 10.75 12 10.75C10.4812 10.75 9.25 9.51878 9.25 8Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlinePointOnMap;
