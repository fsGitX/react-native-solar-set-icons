import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneVideoMuted = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17 16C15.1144 16 14.1716 16 13.5858 15.4142C13 14.8284 13 13.8856 13 12C13 10.1144 13 9.17157 13.5858 8.58579C14.1716 8 15.1144 8 17 8C18.8856 8 19.8284 8 20.4142 8.58579C21 9.17157 21 10.1144 21 12C21 13.8856 21 14.8284 20.4142 15.4142C19.8284 16 18.8856 16 17 16ZM15.6936 9.75082C15.4333 9.49047 15.0112 9.49047 14.7508 9.75082C14.4905 10.0112 14.4905 10.4333 14.7508 10.6936L16.0572 12L14.7508 13.3064C14.4905 13.5667 14.4905 13.9888 14.7508 14.2492C15.0112 14.5095 15.4333 14.5095 15.6936 14.2492L17 12.9428L18.3064 14.2492C18.5667 14.5095 18.9888 14.5095 19.2492 14.2492C19.5095 13.9888 19.5095 13.5667 19.2492 13.3064L17.9428 12L19.2492 10.6936C19.5095 10.4333 19.5095 10.0112 19.2492 9.75082C18.9888 9.49047 18.5667 9.49047 18.3064 9.75082L17 11.0572L15.6936 9.75082Z" fill={color} fillRule="evenodd"/>
	<Path d="M3.00304 11.7155C3.04093 9.87326 3.05988 8.95215 3.68099 8.16363C3.79436 8.0197 3.9607 7.8487 4.10011 7.73274C4.86393 7.09741 5.8724 7.09741 7.88932 7.09741C8.60991 7.09741 8.97021 7.09741 9.31366 7.00452C9.38503 6.98522 9.45565 6.96296 9.52534 6.93781C9.86075 6.81675 10.1616 6.60837 10.7632 6.19162C13.137 4.54739 14.3239 3.72526 15.3201 4.0824C15.5111 4.15088 15.6959 4.24972 15.861 4.37162C16.5687 4.89405 16.739 5.98595 16.8499 8.00001C15.0639 8.00042 14.1558 8.01576 13.5858 8.58579C13 9.17157 13 10.1144 13 12C13 13.8856 13 14.8284 13.5858 15.4142C14.1558 15.9842 15.0639 15.9996 16.8499 16C16.739 18.0141 16.5687 19.1059 15.861 19.6284C15.6959 19.7503 15.5111 19.8491 15.3201 19.9176C14.3239 20.2747 13.137 19.4526 10.7632 17.8084C10.1616 17.3916 9.86075 17.1833 9.52534 17.0622C9.45565 17.037 9.38503 17.0148 9.31366 16.9955C8.97021 16.9026 8.60991 16.9026 7.88932 16.9026C5.8724 16.9026 4.86393 16.9026 4.10011 16.2673C3.9607 16.1513 3.79436 15.9803 3.68099 15.8364C3.05988 15.0478 3.04093 14.1267 3.00304 12.2845C3.00104 12.1878 3 12.0928 3 12C3 11.9072 3.00104 11.8122 3.00304 11.7155Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneVideoMuted;