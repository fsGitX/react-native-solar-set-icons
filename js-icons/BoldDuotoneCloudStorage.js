import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneCloudStorage = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.93934 14.4393C8.5 14.8787 8.5 15.5858 8.5 17V19C8.5 20.4142 8.5 21.1213 8.93934 21.5607C9.37868 22 10.0858 22 11.5 22H12.5C13.9142 22 14.6213 22 15.0607 21.5607C15.5 21.1213 15.5 20.4142 15.5 19V17C15.5 15.5858 15.5 14.8787 15.0607 14.4393C14.6213 14 13.9142 14 12.5 14H11.5C10.0858 14 9.37868 14 8.93934 14.4393ZM10.25 18C10.25 17.5858 10.5858 17.25 11 17.25H13C13.4142 17.25 13.75 17.5858 13.75 18C13.75 18.4142 13.4142 18.75 13 18.75H11C10.5858 18.75 10.25 18.4142 10.25 18Z" fill={color} fillRule="evenodd"/>
	<Path d="M22 12.3529C22 15.2327 19.8188 17.6089 17 17.9563L15.5 17.9629V17C15.5 15.5858 15.5 14.8787 15.0607 14.4393C14.6213 14 13.9142 14 12.5 14H11.5C10.0858 14 9.37868 14 8.93934 14.4393C8.5 14.8787 8.5 15.5858 8.5 17V17.9934L7.00002 18H6.28571C3.91878 18 2 16.1038 2 13.7647C2 11.4256 3.91878 9.52941 6.28571 9.52941C6.56983 9.52941 6.8475 9.55673 7.11616 9.60887C6.88706 8.9978 6.7619 8.33687 6.7619 7.64706C6.7619 4.52827 9.32028 2 12.4762 2C15.4159 2 17.8371 4.19371 18.1551 7.01498C20.393 7.78024 22 9.88113 22 12.3529Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneCloudStorage;