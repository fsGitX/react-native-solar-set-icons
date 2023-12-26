import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneHomeBath = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3 13.0827C3 13.0059 3 12.9675 3.00211 12.9351C3.0347 12.4339 3.43395 12.0347 3.93511 12.0021C3.96752 12 4.00591 12 4.08268 12H19.9173C19.9941 12 20.0325 12 20.0649 12.0021C20.5661 12.0347 20.9653 12.4339 20.9979 12.9351C21 12.9675 21 13.0059 21 13.0827C21 13.4784 21 13.6762 20.9859 13.8977C20.7773 17.1854 17.983 20.0867 14.7053 20.4186C14.4845 20.441 14.3558 20.4458 14.0982 20.4555C13.364 20.4831 12.6493 20.5 12 20.5C11.3507 20.5 10.636 20.4831 9.90183 20.4555C9.64425 20.4458 9.51545 20.441 9.29467 20.4186C6.01705 20.0867 3.22272 17.1854 3.01406 13.8977C3 13.6762 3 13.4784 3 13.0827Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M6 20L5 22" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M18 20L19 22" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2 12H22" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M3 13V4.38516C3 3.06787 4.06787 2 5.38516 2C6.36047 2 7.23752 2.59379 7.59973 3.49934L8 4.38516" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7.97894 4.44719L8.30722 5.12153L7.97894 4.44719ZM6.3622 6.19238L7.05709 6.47457L7.05709 6.47457L6.3622 6.19238ZM10.5771 4.37789L10.2824 5.06759L10.2824 5.06759L10.5771 4.37789ZM6.34567 8.74162L5.64789 9.01657C5.7223 9.2054 5.87006 9.35602 6.05744 9.43402C6.24482 9.51202 6.45581 9.51075 6.64223 9.4305L6.34567 8.74162ZM12.3064 6.17554L12.603 6.86442C12.9751 6.70423 13.1527 6.2775 13.0042 5.90059L12.3064 6.17554ZM7.04346 8.46667C6.80176 7.85327 6.78647 7.14098 7.05709 6.47457L5.66731 5.91019C5.24701 6.9452 5.26967 8.0567 5.64789 9.01657L7.04346 8.46667ZM12.0099 5.48666L6.04912 8.05274L6.64223 9.4305L12.603 6.86442L12.0099 5.48666ZM10.2824 5.06759C10.904 5.33313 11.3671 5.83747 11.6086 6.45049L13.0042 5.90059C12.6259 4.94035 11.8871 4.12195 10.8717 3.68819L10.2824 5.06759ZM7.05709 6.47457C7.31127 5.84866 7.76836 5.38386 8.30722 5.12153L7.65066 3.77285C6.78346 4.19502 6.06261 4.93677 5.66731 5.91019L7.05709 6.47457ZM8.30722 5.12153C8.91461 4.82585 9.62514 4.78678 10.2824 5.06759L10.8717 3.68819C9.79395 3.22774 8.62883 3.29667 7.65066 3.77285L8.30722 5.12153Z" fill={color}/>
</Svg>;

export default LineDuotoneHomeBath;
