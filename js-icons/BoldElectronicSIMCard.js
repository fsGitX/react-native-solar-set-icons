import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldElectronicSIMCard = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C12.3415 2 12.5122 2 12.6858 2.01515C13.4951 2.08581 14.2874 2.414 14.9097 2.93631C15.0431 3.04834 15.1668 3.17204 15.4142 3.41938L20.5806 8.58578C20.828 8.83317 20.9516 8.95687 21.0637 9.09034C21.586 9.71257 21.9142 10.5049 21.9848 11.3142C22 11.4878 22 11.6585 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM8.88886 18.6629C9.39331 19 10.0955 19 11.5 19V12C10.0955 12 9.39331 12 8.88886 12.3371C8.67048 12.483 8.48298 12.6705 8.33706 12.8889C8 13.3933 8 14.0955 8 15.5C8 16.9045 8 17.6067 8.33706 18.1111C8.48298 18.3295 8.67048 18.517 8.88886 18.6629ZM15.1111 18.6629C14.6067 19 13.9045 19 12.5 19V16H15.9993C15.9946 17.0789 15.9574 17.6705 15.6629 18.1111C15.517 18.3295 15.3295 18.517 15.1111 18.6629ZM12.5 12C13.9045 12 14.6067 12 15.1111 12.3371C15.3295 12.483 15.517 12.6705 15.6629 12.8889C15.9574 13.3295 15.9946 13.9211 15.9993 15H12.5V12Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldElectronicSIMCard;
