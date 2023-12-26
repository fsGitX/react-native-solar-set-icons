import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneElectronicSIMCardMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C12.3415 2 12.5122 2 12.6858 2.01515C13.4951 2.08581 14.2874 2.414 14.9097 2.93631C15.0431 3.04834 15.1668 3.17202 15.4141 3.41935L15.4142 3.41938L20.5806 8.58578C20.828 8.83317 20.9516 8.95687 21.0637 9.09034C21.586 9.71257 21.9142 10.5049 21.9848 11.3142C22 11.4878 22 11.6585 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z" fill={color} opacity="0.5"/>
	<Path d="M9.5 13C9.03535 13 8.80302 13 8.60982 13.0384C7.81644 13.1962 7.19624 13.8164 7.03843 14.6098C7 14.803 7 15.0353 7 15.5C7 15.9647 7 16.197 7.03843 16.3902C7.19624 17.1836 7.81644 17.8038 8.60982 17.9616C8.80302 18 9.03535 18 9.5 18H14.5C14.9647 18 15.197 18 15.3902 17.9616C16.1836 17.8038 16.8038 17.1836 16.9616 16.3902C17 16.197 17 15.9647 17 15.5C17 15.0353 17 14.803 16.9616 14.6098C16.8038 13.8164 16.1836 13.1962 15.3902 13.0384C15.197 13 14.9647 13 14.5 13H9.5Z" fill={color}/>
</Svg>;

export default BoldDuotoneElectronicSIMCardMinimalistic;
