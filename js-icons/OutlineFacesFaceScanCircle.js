import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineFacesFaceScanCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16 10.4999C16 11.3283 15.5523 11.9999 15 11.9999C14.4477 11.9999 14 11.3283 14 10.4999C14 9.67148 14.4477 8.9999 15 8.9999C15.5523 8.9999 16 9.67148 16 10.4999Z" fill={color}/>
	<Path d="M10 10.4999C10 11.3283 9.55229 11.9999 9 11.9999C8.44772 11.9999 8 11.3283 8 10.4999C8 9.67148 8.44772 8.9999 9 8.9999C9.55229 8.9999 10 9.67148 10 10.4999Z" fill={color}/>
	<Path d="M13.265 2.05067C13.3474 1.64473 13.7433 1.38245 14.1492 1.46484C18.3627 2.32007 21.6798 5.63714 22.5351 9.85065C22.6175 10.2566 22.3553 10.6525 21.9493 10.7349C21.5434 10.8173 21.1475 10.555 21.0651 10.149C20.3297 6.52593 17.474 3.67026 13.8508 2.93487C13.4449 2.85247 13.1826 2.4566 13.265 2.05067ZM10.7352 2.05072C10.8176 2.45666 10.5553 2.85253 10.1493 2.93492C6.52621 3.67032 3.6705 6.52598 2.93505 10.1491C2.85265 10.555 2.45677 10.8173 2.05084 10.7349C1.6449 10.6525 1.38263 10.2566 1.46503 9.8507C2.32032 5.6372 5.63744 2.32012 9.85097 1.46489C10.2569 1.3825 10.6528 1.64478 10.7352 2.05072ZM2.051 13.2649C2.45693 13.1825 2.85281 13.4448 2.93521 13.8507C3.67066 17.4738 6.52636 20.3295 10.1495 21.0649C10.5554 21.1473 10.8177 21.5431 10.7353 21.9491C10.6529 22.355 10.2571 22.6173 9.85113 22.5349C5.6376 21.6797 2.32048 18.3626 1.46519 14.1491C1.38279 13.7432 1.64506 13.3473 2.051 13.2649ZM21.9493 13.2649C22.3553 13.3473 22.6175 13.7432 22.5351 14.1491C21.6798 18.3626 18.3627 21.6797 14.1492 22.5349C13.7433 22.6173 13.3474 22.355 13.265 21.9491C13.1826 21.5431 13.4449 21.1473 13.8508 21.0649C17.474 20.3295 20.3297 17.4738 21.0651 13.8507C21.1475 13.4448 21.5434 13.1825 21.9493 13.2649ZM8.39748 15.5533C8.64413 15.2205 9.11385 15.1507 9.44661 15.3974C10.175 15.9372 11.0541 16.2499 12 16.2499C12.9459 16.2499 13.825 15.9372 14.5534 15.3974C14.8862 15.1507 15.3559 15.2205 15.6025 15.5533C15.8492 15.8861 15.7794 16.3558 15.4466 16.6024C14.4742 17.3232 13.285 17.7499 12 17.7499C10.715 17.7499 9.5258 17.3232 8.55339 16.6024C8.22062 16.3558 8.15082 15.8861 8.39748 15.5533Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineFacesFaceScanCircle;
