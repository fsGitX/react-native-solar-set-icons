import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneTextFormattingEraserSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z" fill={color} opacity="0.5"/>
	<Path d="M8.98781 10.2886L13.7114 15.0122L16.33 12.3936C17.4433 11.2803 18 10.7236 18 10.0318C18 9.34008 17.4433 8.7834 16.33 7.67004C15.2166 6.55668 14.6599 6 13.9682 6C13.2764 6 12.7197 6.55668 11.6064 7.67004L8.98781 10.2886Z" fill={color}/>
	<Path d="M12.3936 16.33L12.6507 16.0729L7.92715 11.3493L7.67004 11.6064C6.55668 12.7197 6 13.2764 6 13.9682C6 14.6599 6.55668 15.2166 7.67004 16.33C8.7834 17.4433 9.34008 18 10.0318 18C10.7236 18 11.2803 17.4433 12.3936 16.33Z" fill={color}/>
</Svg>;

export default BoldDuotoneTextFormattingEraserSquare;
