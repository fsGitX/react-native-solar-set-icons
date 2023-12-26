import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenFacesStickerSmileCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.9126 15.9331C9.94668 16.1923 11.0951 16.2386 12.2688 16.0333" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 12.6477 21.7004 13.2503 21.2424 13.7083L13.7083 21.2424C13.2503 21.7004 12.6477 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 22C12 19.2071 12 17.8107 12.3928 16.688C13.0964 14.6773 14.6773 13.0964 16.688 12.3928C17.8107 12 19.2071 12 22 12" stroke="black" strokeWidth="1.5"/>
	<ellipse cx="14.5094" cy="9.77454" fill={color} rx="1" ry="1.5" transform="rotate(-15 14.5094 9.77454)"/>
	<ellipse cx="8.71402" cy="11.3278" fill={color} rx="1" ry="1.5" transform="rotate(-15 8.71402 11.3278)"/>
</Svg>;

export default BrokenFacesStickerSmileCircle;
