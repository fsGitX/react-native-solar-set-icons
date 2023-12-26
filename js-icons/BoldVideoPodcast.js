import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldVideoPodcast = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.8372 10.5455C10.8372 10.1438 10.5248 9.81818 10.1395 9.81818H8.58141C8.90462 8.15837 10.3124 6.90909 12 6.90909C13.6876 6.90909 15.0954 8.15837 15.4186 9.81818H12.9302C12.5449 9.81818 12.2326 10.1438 12.2326 10.5455C12.2326 10.9471 12.5449 11.2727 12.9302 11.2727H15.4884V12.7273H12.9302C12.5449 12.7273 12.2326 13.0529 12.2326 13.4545C12.2326 13.8562 12.5449 14.1818 12.9302 14.1818H15.4186C15.1411 15.6066 14.0645 16.7289 12.6977 17.0182V19.2727C12.6977 19.6744 12.3853 20 12 20C11.6147 20 11.3023 19.6744 11.3023 19.2727V17.0182C9.93549 16.7289 8.85886 15.6066 8.58141 14.1818H10.1395C10.5248 14.1818 10.8372 13.8562 10.8372 13.4545C10.8372 13.0529 10.5248 12.7273 10.1395 12.7273H8.51163V11.2727H10.1395C10.5248 11.2727 10.8372 10.9471 10.8372 10.5455Z" fill={color}/>
	<Path d="M12 4C8.67054 4 5.94634 6.70128 5.73422 10.1161C5.38211 9.92573 4.98218 9.81818 4.55814 9.81818C3.14532 9.81818 2 11.0121 2 12.4848V14.4242C2 15.897 3.14532 17.0909 4.55814 17.0909C4.60616 17.0909 4.65388 17.0895 4.70125 17.0868V17.0909C6.03503 17.0909 7.11628 15.9638 7.11628 14.5734V10.5454C7.11628 7.73382 9.30279 5.45455 12 5.45455C14.6972 5.45455 16.8837 7.73382 16.8837 10.5454V14.5734C16.8837 15.9638 17.9649 17.0909 19.2987 17.0909V17.0868C19.3461 17.0895 19.3938 17.0909 19.4419 17.0909C20.8547 17.0909 22 15.897 22 14.4242V12.4848C22 11.0121 20.8547 9.81818 19.4419 9.81818C19.0178 9.81818 18.6179 9.92574 18.2657 10.1161C18.0536 6.70129 15.3294 4 12 4Z" fill={color}/>
</Svg>;

export default BoldVideoPodcast;
