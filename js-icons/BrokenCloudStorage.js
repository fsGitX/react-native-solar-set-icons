import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenCloudStorage = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 12.3529C22 15.0599 20.0726 17.3221 17.5 17.8722M6.28571 18C3.91878 18 2 16.1038 2 13.7647C2 11.4256 3.91878 9.52941 6.28571 9.52941C6.56983 9.52941 6.8475 9.55673 7.11616 9.60887M14.381 7.02721C14.9767 6.81911 15.6178 6.70588 16.2857 6.70588C16.9404 6.70588 17.5693 6.81468 18.1551 7.01498M7.11616 9.60887C6.88706 8.9978 6.7619 8.33687 6.7619 7.64706C6.7619 4.52827 9.32028 2 12.4762 2C15.4159 2 17.8371 4.19371 18.1551 7.01498M7.11616 9.60887C7.68059 9.71839 8.20528 9.9374 8.66667 10.2426M18.1551 7.01498C18.8381 7.24853 19.4623 7.60648 20 8.06141" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8.5 17C8.5 15.5858 8.5 14.8787 8.93934 14.4393C9.37868 14 10.0858 14 11.5 14H12.5C13.9142 14 14.6213 14 15.0607 14.4393C15.5 14.8787 15.5 15.5858 15.5 17V19C15.5 20.4142 15.5 21.1213 15.0607 21.5607C14.6213 22 13.9142 22 12.5 22H11.5C10.0858 22 9.37868 22 8.93934 21.5607C8.5 21.1213 8.5 20.4142 8.5 19V17Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M11 18H13" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenCloudStorage;
