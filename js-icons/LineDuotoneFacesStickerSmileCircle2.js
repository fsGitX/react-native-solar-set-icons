import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneFacesStickerSmileCircle2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 17.5228 6.47715 22 12 22C12.6477 22 13.2503 21.7004 13.7083 21.2424L21.2424 13.7083C21.7004 13.2503 22 12.6477 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" opacity="0.5" stroke="black" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M12 17C10.8846 17 9.85038 16.6303 9 16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 22C12 19.2071 12 17.8107 12.3928 16.688C13.0964 14.6773 14.6773 13.0964 16.688 12.3928C17.8107 12 19.2071 12 22 12" stroke="black" strokeWidth="1.5"/>
	<ellipse cx="15" cy="10.5" fill={color} rx="1" ry="1.5"/>
	<ellipse cx="9" cy="10.5" fill={color} rx="1" ry="1.5"/>
</Svg>;

export default LineDuotoneFacesStickerSmileCircle2;
