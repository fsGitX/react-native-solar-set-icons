import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneVideoGalleryCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="15" cy="9" opacity="0.5" r="2" stroke="black" strokeWidth="1.5"/>
	<circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1.5"/>
	<Path d="M20 17.6001L17.7765 15.599C16.7369 14.6634 15.1888 14.5702 14.0446 15.3744L13.7464 15.5839C12.9513 16.1428 11.8695 16.0491 11.1822 15.3618L6.89249 11.0721C6.03628 10.2159 4.66287 10.1702 3.75159 10.9675L2.28113 12.2542" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneVideoGalleryCircle;
