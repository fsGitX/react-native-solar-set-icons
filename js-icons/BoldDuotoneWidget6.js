import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneWidget6 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 17.5C2 15.0147 4.01472 13 6.5 13H9.2C9.83006 13 10.1451 13 10.3857 13.1226C10.5974 13.2305 10.7695 13.4026 10.8774 13.6143C11 13.8549 11 14.1699 11 14.8V17.5C11 19.9853 8.98528 22 6.5 22C4.01472 22 2 19.9853 2 17.5Z" fill={color}/>
	<Path d="M13 6.5C13 4.01472 15.0147 2 17.5 2C19.9853 2 22 4.01472 22 6.5C22 8.98528 19.9853 11 17.5 11H14.2857C14.1365 11 14.0618 11 13.999 10.9929C13.4775 10.9342 13.0658 10.5225 13.0071 10.001C13 9.93818 13 9.86355 13 9.71429V6.5Z" fill={color}/>
	<g opacity="0.5">
		<Path d="M2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5V9.5C11 9.84874 11 10.0231 10.9617 10.1662C10.8576 10.5544 10.5544 10.8576 10.1662 10.9617C10.0231 11 9.84874 11 9.5 11H6.5C4.01472 11 2 8.98528 2 6.5Z" fill={color}/>
		<Path d="M13 14.5C13 14.1513 13 13.9769 13.0383 13.8338C13.1424 13.4456 13.4456 13.1424 13.8338 13.0383C13.9769 13 14.1513 13 14.5 13H17.5C19.9853 13 22 15.0147 22 17.5C22 19.9853 19.9853 22 17.5 22C15.0147 22 13 19.9853 13 17.5V14.5Z" fill={color}/>
	</g>
</Svg>;

export default BoldDuotoneWidget6;
