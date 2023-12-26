import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineMusicNote3 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.1448 3.99487C13.5688 3.92768 13.0222 4.26549 12.8247 4.81074C12.8031 4.87048 12.7777 4.986 12.7639 5.2477C12.7502 5.50737 12.75 5.84825 12.75 6.34203C12.75 6.78035 12.7532 6.89956 12.7723 6.99932C12.83 7.30096 12.9968 7.57079 13.2408 7.75732C13.3215 7.81902 13.4266 7.87519 13.8187 8.07121L16.4521 9.38793C16.8938 9.60875 17.1988 9.76098 17.4371 9.86488C17.6774 9.9696 17.7921 9.99854 17.8552 10.0059C18.4312 10.0731 18.9778 9.73528 19.1753 9.19003C19.1969 9.1303 19.2223 9.01477 19.2361 8.75308C19.2498 8.49341 19.25 8.15252 19.25 7.65875C19.25 7.22042 19.2468 7.10122 19.2277 7.00146C19.17 6.69982 19.0032 6.42999 18.7592 6.24345C18.6785 6.18176 18.5734 6.12559 18.1813 5.92957L15.5479 4.61285C15.1062 4.39203 14.8012 4.2398 14.5629 4.13589C14.3226 4.03117 14.2079 4.00224 14.1448 3.99487ZM12.75 9.21061C12.8548 9.26648 12.9683 9.32317 13.0927 9.38527C13.1108 9.39434 13.1292 9.40353 13.1479 9.41285L15.8001 10.739C16.2184 10.9481 16.5588 11.1183 16.8378 11.2399C17.119 11.3625 17.3958 11.4625 17.6814 11.4958C18.9486 11.6436 20.1511 10.9004 20.5856 9.70089C20.6835 9.43055 20.7179 9.13826 20.734 8.83189C20.75 8.52805 20.75 8.14748 20.75 7.67982V7.65875C20.75 7.63792 20.75 7.61736 20.75 7.59705C20.7502 7.24929 20.7503 6.97726 20.701 6.71946C20.5739 6.05585 20.2071 5.46223 19.6703 5.05185C19.4618 4.89242 19.2184 4.77088 18.9073 4.6155C18.8892 4.60643 18.8708 4.59724 18.8521 4.58793L16.1999 3.26179C15.7816 3.05264 15.4412 2.88244 15.1622 2.76086C14.881 2.63826 14.6042 2.53829 14.3186 2.50498C13.0514 2.35716 11.8489 3.10033 11.4144 4.29989C11.3165 4.57023 11.2821 4.86251 11.266 5.16888C11.2538 5.4001 11.2509 5.67574 11.2502 6.00039L11.25 6.28373C11.25 6.29608 11.25 6.30849 11.25 6.32096V6.34203C11.25 6.36286 11.25 6.38341 11.25 6.40371C11.25 6.44352 11.2499 6.48233 11.25 6.52025V14.5363C10.4003 13.7388 9.25721 13.2504 8 13.2504C5.37665 13.2504 3.25 15.377 3.25 18.0004C3.25 20.6237 5.37665 22.7504 8 22.7504C10.6234 22.7504 12.75 20.6237 12.75 18.0004V9.21061ZM11.25 18.0004C11.25 16.2055 9.79493 14.7504 8 14.7504C6.20507 14.7504 4.75 16.2055 4.75 18.0004C4.75 19.7953 6.20507 21.2504 8 21.2504C9.79493 21.2504 11.25 19.7953 11.25 18.0004Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineMusicNote3;