import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldMuted = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.4697 8.46967C13.7626 8.17678 14.2374 8.17678 14.5303 8.46967L17 10.9394L19.4697 8.46969C19.7626 8.1768 20.2374 8.1768 20.5303 8.46969C20.8232 8.76259 20.8232 9.23746 20.5303 9.53035L18.0607 12L20.5303 14.4696C20.8232 14.7625 20.8232 15.2374 20.5303 15.5303C20.2374 15.8232 19.7625 15.8232 19.4696 15.5303L17 13.0607L14.5304 15.5303C14.2375 15.8232 13.7626 15.8232 13.4697 15.5303C13.1768 15.2374 13.1768 14.7626 13.4697 14.4697L15.9394 12L13.4697 9.53033C13.1768 9.23744 13.1768 8.76256 13.4697 8.46967Z" fill={color} fillRule="evenodd"/>
	<Path d="M3.68099 8.16363C3.05988 8.95215 3.04093 9.87326 3.00304 11.7155C3.00104 11.8122 3 11.9072 3 12C3 12.0928 3.00104 12.1878 3.00304 12.2845C3.04093 14.1267 3.05988 15.0478 3.68099 15.8364C3.79436 15.9803 3.9607 16.1513 4.10011 16.2673C4.86393 16.9026 5.8724 16.9026 7.88932 16.9026C8.60991 16.9026 8.97021 16.9026 9.31366 16.9955C9.38503 17.0148 9.45565 17.037 9.52534 17.0622C9.86075 17.1833 10.1616 17.3916 10.7632 17.8084C13.137 19.4526 14.3239 20.2747 15.3201 19.9176C15.5111 19.8491 15.6959 19.7503 15.861 19.6284C16.647 19.0481 16.7702 17.7654 16.8852 15.2969L15.591 16.591C14.7123 17.4697 13.2877 17.4697 12.409 16.591C11.5304 15.7123 11.5304 14.2877 12.409 13.409L13.818 12L12.409 10.591C11.5303 9.71231 11.5303 8.28769 12.409 7.40901C13.2877 6.53033 14.7123 6.53033 15.591 7.40901L16.8852 8.70318C16.7702 6.23464 16.647 4.95188 15.861 4.37162C15.6959 4.24972 15.5111 4.15088 15.3201 4.08241C14.3239 3.72527 13.137 4.54738 10.7632 6.19161C10.1616 6.60836 9.86075 6.81675 9.52534 6.93781C9.45565 6.96296 9.38503 6.98522 9.31366 7.00452C8.97021 7.09741 8.60991 7.09741 7.88932 7.09741C5.8724 7.09741 4.86393 7.09741 4.10011 7.73274C3.9607 7.8487 3.79436 8.01971 3.68099 8.16363Z" fill={color}/>
</Svg>;

export default BoldMuted;