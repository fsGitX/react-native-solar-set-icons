import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineNetworkSlashCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.0184 7.36452C14.1256 6.96443 13.8882 6.55317 13.4881 6.44597C13.088 6.33876 12.6767 6.5762 12.5695 6.9763L9.98131 16.6356C9.8741 17.0357 10.1115 17.4469 10.5116 17.5541C10.9117 17.6613 11.323 17.4239 11.4302 17.0238L14.0184 7.36452Z" fill={color}/>
	<Path d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineNetworkSlashCircle;
