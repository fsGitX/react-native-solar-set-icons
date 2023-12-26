import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldNetworkWiFiRouterMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.1091 7.43399C12.823 5.71031 14.521 4.5 16.4998 4.5C18.4787 4.5 20.1767 5.71031 20.8905 7.43399C21.049 7.81668 21.4878 7.99844 21.8704 7.83995C22.2531 7.68146 22.4349 7.24275 22.2764 6.86005C21.3385 4.5954 19.1064 3 16.4998 3C13.8933 3 11.6612 4.5954 10.7233 6.86005C10.5648 7.24275 10.7466 7.68146 11.1292 7.83995C11.5119 7.99844 11.9507 7.81668 12.1091 7.43399Z" fill={color}/>
	<Path d="M2.58579 12.3358C2 12.9216 2 13.8644 2 15.75C2 17.6356 2 18.5784 2.58579 19.1642C3.17157 19.75 4.11438 19.75 6 19.75H18C19.8856 19.75 20.8284 19.75 21.4142 19.1642C22 18.5784 22 17.6356 22 15.75C22 13.8644 22 12.9216 21.4142 12.3358C20.8284 11.75 19.8856 11.75 18 11.75H17.25V8.75C17.25 8.33579 16.9142 8 16.5 8C16.0858 8 15.75 8.33579 15.75 8.75V11.75H6C4.11438 11.75 3.17157 11.75 2.58579 12.3358ZM6 16.75C6.55228 16.75 7 16.3023 7 15.75C7 15.1977 6.55228 14.75 6 14.75C5.44772 14.75 5 15.1977 5 15.75C5 16.3023 5.44772 16.75 6 16.75ZM9 16.75C9.55228 16.75 10 16.3023 10 15.75C10 15.1977 9.55228 14.75 9 14.75C8.44772 14.75 8 15.1977 8 15.75C8 16.3023 8.44772 16.75 9 16.75Z" fill={color} fillRule="evenodd"/>
	<Path d="M14.3403 8.6182C14.6133 7.68244 15.4782 7 16.5006 7C17.5229 7 18.3878 7.68244 18.6609 8.6182C18.7769 9.01583 19.1933 9.24411 19.5909 9.12808C19.9886 9.01205 20.2168 8.59564 20.1008 8.19801C19.6461 6.63969 18.2074 5.5 16.5006 5.5C14.7938 5.5 13.3551 6.63969 12.9003 8.19801C12.7843 8.59564 13.0126 9.01205 13.4102 9.12808C13.8078 9.24411 14.2243 9.01583 14.3403 8.6182Z" fill={color}/>
</Svg>;

export default BoldNetworkWiFiRouterMinimalistic;
