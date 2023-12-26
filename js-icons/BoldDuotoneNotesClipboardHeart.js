import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneNotesClipboardHeart = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21 15.9983V9.99826C21 7.16983 21 5.75562 20.1213 4.87694C19.3529 4.10856 18.175 4.01211 16 4H8C5.82497 4.01211 4.64706 4.10856 3.87868 4.87694C3 5.75562 3 7.16983 3 9.99826V15.9983C3 18.8267 3 20.2409 3.87868 21.1196C4.75736 21.9983 6.17157 21.9983 9 21.9983H15C17.8284 21.9983 19.2426 21.9983 20.1213 21.1196C21 20.2409 21 18.8267 21 15.9983Z" fill={color} opacity="0.5"/>
	<Path d="M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z" fill={color}/>
	<Path d="M9 12.6967C9 13.6812 10.1649 14.7213 11.0429 15.3656C11.4626 15.6736 11.6725 15.8276 12 15.8276C12.3275 15.8276 12.5374 15.6736 12.9571 15.3656C13.8352 14.7214 15 13.6812 15 12.6967C15 11.0235 13.35 10.3988 12 11.6913C10.65 10.3988 9 11.0235 9 12.6967Z" fill={color}/>
</Svg>;

export default BoldDuotoneNotesClipboardHeart;
