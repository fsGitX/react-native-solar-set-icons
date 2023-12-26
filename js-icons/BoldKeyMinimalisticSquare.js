import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldKeyMinimalisticSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.3905 9.72378C12.9112 9.20308 13.7554 9.20308 14.2761 9.72378C14.7968 10.2445 14.7968 11.0887 14.2761 11.6094C13.7554 12.1301 12.9112 12.1301 12.3905 11.6094C11.8698 11.0887 11.8698 10.2445 12.3905 9.72378Z" fill={color}/>
	<Path d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM16.6514 7.34861C18.4495 9.14675 18.4495 12.0621 16.6514 13.8603C15.4574 15.0542 13.7709 15.4554 12.2459 15.0638C12 15.0006 11.7342 15.0565 11.5546 15.2361L10.4371 16.3536L10.4342 16.3507L9.26813 15.1975C8.97363 14.9062 8.49876 14.9088 8.20748 15.2033C7.91621 15.4978 7.91882 15.9727 8.21332 16.264L9.3764 17.4143L9.0797 17.711C8.86776 17.9229 8.57097 18.0271 8.27307 17.994L6.88068 17.8392C6.73223 17.8228 6.59381 17.7562 6.4882 17.6506L6.34939 17.5118C6.24377 17.4062 6.17725 17.2678 6.16075 17.1193L6.00604 15.7269C5.97294 15.429 6.07705 15.1322 6.28899 14.9203L8.76372 12.4456C8.94328 12.266 8.99937 12 8.93621 11.7541C8.5446 10.2291 8.94578 8.54257 10.1397 7.34861C11.9379 5.55046 14.8532 5.55046 16.6514 7.34861Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldKeyMinimalisticSquare;