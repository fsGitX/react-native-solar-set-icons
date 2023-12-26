import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldUsersUserHeartRounded = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="6" fill={color} r="4"/>
	<Path d="M13.5126 21.4874C14.0251 22 14.8501 22 16.5 22C18.1499 22 18.9749 22 19.4874 21.4874C20 20.9749 20 20.1499 20 18.5C20 16.8501 20 16.0251 19.4874 15.5126C18.9749 15 18.1499 15 16.5 15C14.8501 15 14.0251 15 13.5126 15.5126C13 16.0251 13 16.8501 13 18.5C13 20.1499 13 20.9749 13.5126 21.4874ZM15.5266 19.9765C14.8245 19.4738 14 18.8833 14 17.8598C14 16.7299 15.375 15.9285 16.5 17.0148C17.625 15.9285 19 16.7299 19 17.8598C19 18.8833 18.1755 19.4738 17.4734 19.9765C17.4005 20.0287 17.3288 20.08 17.2596 20.1308C17 20.3209 16.75 20.5 16.5 20.5C16.25 20.5 16 20.3209 15.7404 20.1308C15.6712 20.08 15.5995 20.0287 15.5266 19.9765Z" fill={color} fillRule="evenodd"/>
	<Path d="M15.4147 13.5074C14.4046 13.1842 13.24 13 12 13C8.13401 13 5 14.7909 5 17C5 19.1406 7.94244 20.8884 11.6421 20.9949C11.615 20.8686 11.594 20.7432 11.5775 20.6201C11.4998 20.0424 11.4999 19.3365 11.5 18.586V18.414C11.4999 17.6635 11.4998 16.9576 11.5775 16.3799C11.6639 15.737 11.8705 15.0333 12.4519 14.4519C13.0334 13.8705 13.737 13.6639 14.3799 13.5774C14.6919 13.5355 15.0412 13.5162 15.4147 13.5074Z" fill={color}/>
</Svg>;

export default BoldUsersUserHeartRounded;
