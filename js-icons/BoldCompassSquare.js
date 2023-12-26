import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldCompassSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM13.9563 14.0951C13.7631 14.2646 13.5168 14.3631 13.0241 14.5602C10.7143 15.4841 9.55942 15.9461 8.89976 15.4978C8.74336 15.3915 8.60846 15.2566 8.50218 15.1002C8.05392 14.4406 8.51587 13.2857 9.43979 10.9759C9.63685 10.4832 9.73539 10.2369 9.90486 10.0437C9.94804 9.99441 9.99441 9.94804 10.0437 9.90486C10.2369 9.73539 10.4832 9.63685 10.9759 9.43979C13.2857 8.51587 14.4406 8.05392 15.1002 8.50218C15.2566 8.60846 15.3915 8.74336 15.4978 8.89976C15.9461 9.55942 15.4841 10.7143 14.5602 13.0241C14.3631 13.5168 14.2646 13.7631 14.0951 13.9563C14.052 14.0056 14.0056 14.052 13.9563 14.0951Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldCompassSquare;
