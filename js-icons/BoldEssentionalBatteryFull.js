import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldEssentionalBatteryFull = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H11.5C15.2712 4 17.1569 4 18.3284 5.17157C19.2715 6.11466 19.4554 7.52043 19.4913 10H19.9999C20.9427 10 21.4141 10 21.707 10.2929C21.9999 10.5858 21.9999 11.0572 21.9999 12C21.9999 12.9428 21.9999 13.4142 21.707 13.7071C21.4141 14 20.9427 14 19.9999 14H19.4913C19.4554 16.4796 19.2715 17.8853 18.3284 18.8284C17.1569 20 15.2712 20 11.5 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12ZM6.63577 8.34438C6.99786 8.14322 7.45446 8.27368 7.65562 8.63577L7 9C7.65562 8.63577 7.65616 8.63675 7.65634 8.63708L7.65711 8.63847L7.65878 8.64152L7.66263 8.64864L7.67226 8.66699C7.67951 8.68106 7.68839 8.69881 7.69863 8.72032C7.71912 8.76335 7.74506 8.82135 7.77448 8.89489C7.83335 9.04206 7.90593 9.251 7.9765 9.52622C8.11776 10.0772 8.25 10.8899 8.25 12C8.25 13.1101 8.11776 13.9228 7.9765 14.4738C7.90593 14.749 7.83335 14.9579 7.77448 15.1051C7.74506 15.1787 7.71912 15.2367 7.69863 15.2797C7.68839 15.3012 7.67951 15.3189 7.67226 15.333L7.66263 15.3514L7.65878 15.3585L7.65711 15.3615L7.65634 15.3629L7.65562 15.3642L7 15C7.65052 15.3614 7.65541 15.3645 7.65562 15.3642C7.45446 15.7263 6.99786 15.8568 6.63577 15.6556C6.27675 15.4562 6.14545 15.0056 6.33933 14.645L6.34434 14.6348C6.35119 14.6204 6.36431 14.5917 6.38177 14.548C6.41665 14.4608 6.46907 14.3135 6.5235 14.1012C6.63224 13.6772 6.75 12.9899 6.75 12C6.75 11.0101 6.63224 10.3228 6.5235 9.89878C6.46907 9.6865 6.41665 9.53919 6.38177 9.45198C6.36431 9.40834 6.35119 9.37962 6.34434 9.36522L6.33933 9.35499C6.14545 8.99441 6.27675 8.54383 6.63577 8.34438ZM11.1556 8.63577C10.9545 8.27368 10.4979 8.14322 10.1358 8.34438C9.77675 8.54383 9.64545 8.99441 9.83933 9.35499L9.84434 9.36522C9.85119 9.37962 9.86431 9.40834 9.88177 9.45198C9.91665 9.53919 9.96907 9.6865 10.0235 9.89878C10.1322 10.3228 10.25 11.0101 10.25 12C10.25 12.9899 10.1322 13.6772 10.0235 14.1012C9.96907 14.3135 9.91665 14.4608 9.88177 14.548C9.86431 14.5917 9.85119 14.6204 9.84434 14.6348L9.83933 14.645C9.64545 15.0056 9.77675 15.4562 10.1358 15.6556C10.4979 15.8568 10.9545 15.7263 11.1556 15.3642L10.5 15C11.1556 15.3642 11.1562 15.3632 11.1563 15.3629L11.1571 15.3615L11.1588 15.3585L11.1626 15.3514L11.1723 15.333C11.1795 15.3189 11.1884 15.3012 11.1986 15.2797C11.2191 15.2367 11.2451 15.1787 11.2745 15.1051C11.3333 14.9579 11.4059 14.749 11.4765 14.4738C11.6178 13.9228 11.75 13.1101 11.75 12C11.75 10.8899 11.6178 10.0772 11.4765 9.52622C11.4059 9.251 11.3333 9.04206 11.2745 8.89489C11.2451 8.82135 11.2191 8.76335 11.1986 8.72032C11.1884 8.69881 11.1795 8.68106 11.1723 8.66699L11.1626 8.64864L11.1588 8.64152L11.1571 8.63847L11.1563 8.63708L11.1556 8.63577ZM10.5002 8.99986C11.1505 8.63861 11.1554 8.63548 11.1556 8.63577L10.5002 8.99986ZM13.6358 8.34438C13.9979 8.14322 14.4545 8.27368 14.6556 8.63577L14 9C14.6556 8.63577 14.6562 8.63675 14.6563 8.63708L14.6571 8.63847L14.6588 8.64152L14.6626 8.64864L14.6723 8.66699C14.6795 8.68106 14.6884 8.69881 14.6986 8.72032C14.7191 8.76335 14.7451 8.82135 14.7745 8.89489C14.8333 9.04206 14.9059 9.251 14.9765 9.52622C15.1178 10.0772 15.25 10.8899 15.25 12C15.25 13.1101 15.1178 13.9228 14.9765 14.4738C14.9059 14.749 14.8333 14.9579 14.7745 15.1051C14.7451 15.1787 14.7191 15.2367 14.6986 15.2797C14.6884 15.3012 14.6795 15.3189 14.6723 15.333L14.6626 15.3514L14.6588 15.3585L14.6571 15.3615L14.6563 15.3629L14.6556 15.3642L14.0024 15.0014C14.6505 15.3614 14.6554 15.3645 14.6556 15.3642C14.4545 15.7263 13.9979 15.8568 13.6358 15.6556C13.2768 15.4562 13.1455 15.0056 13.3393 14.645L13.3443 14.6348C13.3512 14.6204 13.3643 14.5917 13.3818 14.548C13.4167 14.4608 13.4691 14.3135 13.5235 14.1012C13.6322 13.6772 13.75 12.9899 13.75 12C13.75 11.0101 13.6322 10.3228 13.5235 9.89878C13.4691 9.6865 13.4167 9.53919 13.3818 9.45198C13.3643 9.40834 13.3512 9.37962 13.3443 9.36522L13.3393 9.35499C13.1455 8.99441 13.2768 8.54383 13.6358 8.34438Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldEssentionalBatteryFull;
