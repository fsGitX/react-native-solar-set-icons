import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDumbbell = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 14V10C22 9.06812 22 8.60218 21.8478 8.23463C21.6448 7.74458 21.2554 7.35523 20.7654 7.15224C20.3978 7 19.9319 7 19 7C18.0681 7 17.6022 7 17.2346 7.15224C16.7446 7.35523 16.3552 7.74458 16.1522 8.23463C16 8.60218 16 9.56812 16 10.5H8C8 9.56812 8 8.60218 7.84776 8.23463C7.64477 7.74458 7.25542 7.35523 6.76537 7.15224C6.39782 7 5.93188 7 5 7C4.06812 7 3.60218 7 3.23463 7.15224C2.74458 7.35523 2.35523 7.74458 2.15224 8.23463C2 8.60218 2 9.06812 2 10V14C2 14.9319 2 15.3978 2.15224 15.7654C2.35523 16.2554 2.74458 16.6448 3.23463 16.8478C3.60218 17 4.06812 17 5 17C5.93188 17 6.39782 17 6.76537 16.8478C7.25542 16.6448 7.64477 16.2554 7.84776 15.7654C8 15.3978 8 14.4319 8 13.5H16C16 14.4319 16 15.3978 16.1522 15.7654C16.3552 16.2554 16.7446 16.6448 17.2346 16.8478C17.6022 17 18.0681 17 19 17C19.9319 17 20.3978 17 20.7654 16.8478C21.2554 16.6448 21.6448 16.2554 21.8478 15.7654C22 15.3978 22 14.9319 22 14Z" fill={color}/>
</Svg>;

export default BoldDumbbell;
