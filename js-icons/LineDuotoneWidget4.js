import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneWidget4 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2.5 6.5C2.5 4.61438 2.5 3.67157 3.08579 3.08579C3.67157 2.5 4.61438 2.5 6.5 2.5C8.38562 2.5 9.32843 2.5 9.91421 3.08579C10.5 3.67157 10.5 4.61438 10.5 6.5V17.5C10.5 19.3856 10.5 20.3284 9.91421 20.9142C9.32843 21.5 8.38562 21.5 6.5 21.5C4.61438 21.5 3.67157 21.5 3.08579 20.9142C2.5 20.3284 2.5 19.3856 2.5 17.5V6.5Z" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M13.5 15.5C13.5 13.6144 13.5 12.6716 14.0858 12.0858C14.6716 11.5 15.6144 11.5 17.5 11.5C19.3856 11.5 20.3284 11.5 20.9142 12.0858C21.5 12.6716 21.5 13.6144 21.5 15.5V17.5C21.5 19.3856 21.5 20.3284 20.9142 20.9142C20.3284 21.5 19.3856 21.5 17.5 21.5C15.6144 21.5 14.6716 21.5 14.0858 20.9142C13.5 20.3284 13.5 19.3856 13.5 17.5V15.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M13.5 5.5C13.5 4.56812 13.5 4.10218 13.6522 3.73463C13.8552 3.24458 14.2446 2.85523 14.7346 2.65224C15.1022 2.5 15.5681 2.5 16.5 2.5H18.5C19.4319 2.5 19.8978 2.5 20.2654 2.65224C20.7554 2.85523 21.1448 3.24458 21.3478 3.73463C21.5 4.10218 21.5 4.56812 21.5 5.5C21.5 6.43188 21.5 6.89782 21.3478 7.26537C21.1448 7.75542 20.7554 8.14477 20.2654 8.34776C19.8978 8.5 19.4319 8.5 18.5 8.5H16.5C15.5681 8.5 15.1022 8.5 14.7346 8.34776C14.2446 8.14477 13.8552 7.75542 13.6522 7.26537C13.5 6.89782 13.5 6.43188 13.5 5.5Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneWidget4;