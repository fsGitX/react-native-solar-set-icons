import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneNatureLeaf = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C7.58172 22 4 18.3541 4 13.8567C4 9.39453 6.55332 4.18759 10.5371 2.32555C11.0014 2.10852 11.5007 2 12 2V22Z" fill={color} fillRule="evenodd"/>
	<Path d="M13.4629 2.32555C12.9986 2.10852 12.4993 2 12 2V9.00006L16.4317 4.56841C15.5689 3.62059 14.5713 2.84361 13.4629 2.32555Z" fill={color} opacity="0.3"/>
	<Path d="M12 9.00001V14.5L18.6142 7.88572C18.0421 6.66554 17.3062 5.52917 16.4317 4.56836L12 9.00001Z" fill={color} opacity="0.4"/>
	<Path d="M12 19.5L19.811 11.689C19.5911 10.3986 19.1838 9.10061 18.6142 7.88574L12 14.5V19.5Z" fill={color} opacity="0.6"/>
	<Path d="M19.811 11.689L12 19.5V21.9999C16.4183 21.9999 20 18.354 20 13.8566C20 13.1474 19.9355 12.4194 19.811 11.689Z" fill={color} opacity="0.7"/>
</Svg>;

export default BoldDuotoneNatureLeaf;
