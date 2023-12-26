import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldScissorsSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM16.379 5.35294C16.0216 5.14361 15.5622 5.26367 15.3528 5.62109L12.0001 11.3457L8.64742 5.62109C8.43809 5.26367 7.97864 5.14361 7.62121 5.35294C7.26379 5.56227 7.14373 6.02172 7.35306 6.37915L11.131 12.8298L10.0195 14.7277C9.53906 14.0703 8.74784 13.6501 7.875 13.6501C6.4544 13.6501 5.25 14.7632 5.25 16.2001C5.25 17.637 6.4544 18.7501 7.875 18.7501C8.86733 18.7501 9.75417 18.207 10.1987 17.3898L12.0001 14.3139L13.8015 17.3898C14.2461 18.207 15.1329 18.7501 16.1252 18.7501C17.5458 18.7501 18.7502 17.637 18.7502 16.2001C18.7502 14.7632 17.5458 13.6501 16.1252 13.6501C15.2524 13.6501 14.4612 14.0703 13.9808 14.7277L12.8693 12.8298L16.6472 6.37915C16.8565 6.02172 16.7365 5.56227 16.379 5.35294Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldScissorsSquare;