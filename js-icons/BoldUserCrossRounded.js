import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldUserCrossRounded = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="6" fill={color} r="4"/>
	<Path d="M15.4147 13.5074C14.4046 13.1842 13.24 13 12 13C8.13401 13 5 14.7909 5 17C5 19.1406 7.94244 20.8884 11.6421 20.9949C11.615 20.8686 11.594 20.7432 11.5775 20.6201C11.4998 20.0424 11.4999 19.3365 11.5 18.586V18.414C11.4999 17.6635 11.4998 16.9576 11.5775 16.3799C11.6639 15.737 11.8705 15.0333 12.4519 14.4519C13.0334 13.8705 13.737 13.6639 14.3799 13.5774C14.6919 13.5355 15.0412 13.5162 15.4147 13.5074Z" fill={color}/>
	<Path d="M16.5 22C14.8501 22 14.0251 22 13.5126 21.4874C13 20.9749 13 20.1499 13 18.5C13 16.8501 13 16.0251 13.5126 15.5126C14.0251 15 14.8501 15 16.5 15C18.1499 15 18.9749 15 19.4874 15.5126C20 16.0251 20 16.8501 20 18.5C20 20.1499 20 20.9749 19.4874 21.4874C18.9749 22 18.1499 22 16.5 22ZM15.3569 16.532C15.1291 16.3042 14.7598 16.3042 14.532 16.532C14.3042 16.7598 14.3042 17.1291 14.532 17.3569L15.675 18.5L14.532 19.6431C14.3042 19.8709 14.3042 20.2402 14.532 20.468C14.7598 20.6958 15.1291 20.6958 15.3569 20.468L16.5 19.325L17.6431 20.468C17.8709 20.6958 18.2402 20.6958 18.468 20.468C18.6958 20.2402 18.6958 19.8709 18.468 19.6431L17.325 18.5L18.468 17.3569C18.6958 17.1291 18.6958 16.7598 18.468 16.532C18.2402 16.3042 17.8709 16.3042 17.6431 16.532L16.5 17.675L15.3569 16.532Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldUserCrossRounded;
