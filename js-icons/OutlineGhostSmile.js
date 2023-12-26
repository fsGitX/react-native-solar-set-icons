import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineGhostSmile = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10 9.5C10 10.3284 9.55228 11 9 11C8.44772 11 8 10.3284 8 9.5C8 8.67157 8.44772 8 9 8C9.55228 8 10 8.67157 10 9.5Z" fill={color}/>
	<Path d="M15 11C15.5523 11 16 10.3284 16 9.5C16 8.67157 15.5523 8 15 8C14.4477 8 14 8.67157 14 9.5C14 10.3284 14.4477 11 15 11Z" fill={color}/>
	<Path d="M9.4466 14.3975C9.11383 14.1508 8.64412 14.2206 8.39746 14.5534C8.1508 14.8862 8.22061 15.3559 8.55337 15.6025C9.52578 16.3233 10.715 16.75 12 16.75C13.285 16.75 14.4742 16.3233 15.4466 15.6025C15.7794 15.3559 15.8492 14.8862 15.6025 14.5534C15.3559 14.2206 14.8861 14.1508 14.5534 14.3975C13.825 14.9373 12.9459 15.25 12 15.25C11.0541 15.25 10.1749 14.9373 9.4466 14.3975Z" fill={color}/>
	<Path d="M12 1.25C6.04216 1.25 1.25 6.21861 1.25 12.3006V19.723C1.25 21.5695 3.16246 22.8461 4.8426 21.9808C5.52425 21.6297 6.33486 21.6808 6.97157 22.1181C8.19859 22.9606 9.80141 22.9606 11.0284 22.1181L11.3811 21.8759C11.7572 21.6176 12.2428 21.6176 12.6189 21.8759L12.9716 22.1181C14.1986 22.9606 15.8014 22.9606 17.0284 22.1181C17.6651 21.6808 18.4757 21.6297 19.1574 21.9808C20.8375 22.8461 22.75 21.5695 22.75 19.723V12.3006C22.75 6.21861 17.9578 1.25 12 1.25ZM2.75 12.3006C2.75 7.00485 6.91215 2.75 12 2.75C17.0879 2.75 21.25 7.00485 21.25 12.3006V19.723C21.25 20.5212 20.4605 20.9647 19.8442 20.6472C18.6697 20.0424 17.2693 20.133 16.1793 20.8815C15.4639 21.3728 14.5361 21.3728 13.8207 20.8815L13.468 20.6394C12.5804 20.0298 11.4196 20.0298 10.532 20.6394L10.1793 20.8815C9.46387 21.3728 8.53613 21.3728 7.8207 20.8815C6.73074 20.133 5.33026 20.0424 4.1558 20.6472C3.53949 20.9647 2.75 20.5212 2.75 19.723V12.3006Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineGhostSmile;
