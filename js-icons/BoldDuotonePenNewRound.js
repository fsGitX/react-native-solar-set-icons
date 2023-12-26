import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotonePenNewRound = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" fill={color} opacity="0.5" r="10"/>
	<Path d="M13.9265 14.3018C14.1716 14.1107 14.3938 13.8885 14.8382 13.4441L20.3785 7.90374C20.5125 7.7698 20.4512 7.53909 20.2722 7.477C19.6182 7.25011 18.7675 6.82414 17.9717 6.02835C17.176 5.23257 16.75 4.38186 16.5231 3.72788C16.461 3.54892 16.2303 3.48761 16.0964 3.62156L10.556 9.16192C10.1116 9.60634 9.88937 9.82854 9.69827 10.0736C9.47284 10.3626 9.27957 10.6753 9.12188 11.0062C8.9882 11.2867 8.88883 11.5848 8.69008 12.181L8.43327 12.9515L8.02491 14.1765L7.64202 15.3252C7.54422 15.6186 7.62058 15.9421 7.83928 16.1608C8.05798 16.3795 8.38148 16.4559 8.6749 16.3581L9.82357 15.9752L11.0486 15.5668L11.8191 15.31L11.8191 15.31C12.4153 15.1113 12.7134 15.0119 12.9939 14.8782C13.3248 14.7205 13.6375 14.5273 13.9265 14.3018Z" fill={color}/>
	<Path d="M22.1132 6.16905C23.2957 4.98656 23.2957 3.06936 22.1132 1.88687C20.9307 0.704377 19.0135 0.704377 17.831 1.88687L17.6529 2.06499C17.481 2.23687 17.4032 2.47695 17.4461 2.7162C17.4731 2.8667 17.5232 3.08674 17.6143 3.3493C17.7965 3.87439 18.1405 4.56368 18.7885 5.21165C19.4364 5.85961 20.1257 6.20364 20.6508 6.38581C20.9134 6.4769 21.1334 6.52697 21.2839 6.55399C21.5231 6.59693 21.7632 6.51905 21.9351 6.34717L22.1132 6.16905Z" fill={color}/>
</Svg>;

export default BoldDuotonePenNewRound;
