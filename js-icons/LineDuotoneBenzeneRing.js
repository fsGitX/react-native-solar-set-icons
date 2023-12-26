import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneBenzeneRing = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.97927 4.87931C10.9655 4.2931 11.4585 4 12 4C12.5415 4 13.0345 4.2931 14.0207 4.87931L16.9793 6.63792C17.9655 7.22412 18.4585 7.51723 18.7293 8C19 8.48277 19 9.06898 19 10.2414V13.7586C19 14.931 19 15.5172 18.7293 16C18.4585 16.4828 17.9655 16.7759 16.9793 17.3621L14.0207 19.1207C13.0345 19.7069 12.5415 20 12 20C11.4585 20 10.9655 19.7069 9.97927 19.1207L7.02073 17.3621C6.03454 16.7759 5.54145 16.4828 5.27073 16C5 15.5172 5 14.931 5 13.7586V10.2414C5 9.06898 5 8.48277 5.27073 8C5.54145 7.51723 6.03454 7.22412 7.02073 6.63792L9.97927 4.87931Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M5 8L2 6" opacity="0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M19 8L22 6" opacity="0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M5 16L2 18" opacity="0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M12 16.8841L16 14.5" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneBenzeneRing;
