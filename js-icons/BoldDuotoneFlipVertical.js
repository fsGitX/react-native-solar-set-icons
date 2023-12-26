import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneFlipVertical = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<g opacity="0.5">
		<Path d="M18.1136 22H5.88641C4.18426 22 3.33319 22 3.05405 21.4576C2.77491 20.9152 3.26959 20.2226 4.25894 18.8375L5.3884 17.2563C5.8283 16.6404 6.04825 16.3325 6.3713 16.1662C6.69435 16 7.07277 16 7.8296 16H16.1705C16.9273 16 17.3057 16 17.6288 16.1662C17.9518 16.3325 18.1718 16.6404 18.6117 17.2563L19.7411 18.8375C20.7305 20.2226 21.2251 20.9152 20.946 21.4576C20.6669 22 19.8158 22 18.1136 22Z" fill={color}/>
		<Path d="M18.1136 2L5.88641 2C4.18426 2 3.33319 2 3.05405 2.54242C2.77491 3.08484 3.26959 3.77738 4.25894 5.16247L5.3884 6.74372C5.8283 7.35957 6.04825 7.6675 6.3713 7.83375C6.69435 8 7.07277 8 7.8296 8L16.1705 8C16.9273 8 17.3057 8 17.6288 7.83375C17.9518 7.6675 18.1718 7.35957 18.6117 6.74372L19.7411 5.16248C20.7305 3.77738 21.2251 3.08484 20.946 2.54242C20.6669 2 19.8158 2 18.1136 2Z" fill={color}/>
	</g>
	<Path d="M1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H6C6.41421 11.25 6.75 11.5858 6.75 12C6.75 12.4142 6.41421 12.75 6 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H14C14.4142 11.25 14.75 11.5858 14.75 12C14.75 12.4142 14.4142 12.75 14 12.75H10C9.58579 12.75 9.25 12.4142 9.25 12ZM17.25 12C17.25 11.5858 17.5858 11.25 18 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H18C17.5858 12.75 17.25 12.4142 17.25 12Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneFlipVertical;