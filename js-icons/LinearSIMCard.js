import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearSIMCard = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 11.6585 22 11.4878 21.9848 11.3142C21.9142 10.5049 21.586 9.71257 21.0637 9.09034C20.9516 8.95687 20.828 8.83317 20.5806 8.58578L15.4142 3.41944C15.1668 3.17206 15.0431 3.04835 14.9097 2.93631C14.2874 2.414 13.4951 2.08581 12.6858 2.01515C12.5122 2 12.3415 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 12H11.5C10.0955 12 9.39331 12 8.88886 12.3371C8.67048 12.483 8.48298 12.6705 8.33706 12.8889C8 13.3933 8 14.0955 8 15.5C8 16.9045 8 17.6067 8.33706 18.1111C8.48298 18.3295 8.67048 18.517 8.88886 18.6629C9.39331 19 10.0955 19 11.5 19H12M12 12H12.5C13.9045 12 14.6067 12 15.1111 12.3371C15.3295 12.483 15.517 12.6705 15.6629 12.8889C16 13.3933 16 14.0955 16 15.5M12 12V15.5M12 19H12.5C13.9045 19 14.6067 19 15.1111 18.6629C15.3295 18.517 15.517 18.3295 15.6629 18.1111C16 17.6067 16 16.9045 16 15.5M12 19V15.5M12 15.5H16" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearSIMCard;
