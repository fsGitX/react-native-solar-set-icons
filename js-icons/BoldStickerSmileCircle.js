import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldStickerSmileCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.9358 13.1007C17.804 12.7969 18.8834 12.756 21.1392 12.7508H22.7242C22.7167 12.859 22.7348 12.6434 22.7242 12.7508C22.6895 13.1321 22.5227 13.4894 22.2526 13.7608L13.7454 22.3107C13.4821 22.5754 13.1241 22.7242 12.7508 22.7242C12.6434 22.7348 12.859 22.7167 12.7508 22.7242V21.1392C12.756 18.8834 12.7969 17.804 13.1007 16.9358C13.7289 15.1405 15.1405 13.7289 16.9358 13.1007Z" fill={color}/>
	<Path d="M11.5515 16.8809C11.2763 17.9436 11.2521 19.2445 11.2501 21.22V22.7243C5.66292 22.3393 1.25 17.685 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.685 1.25 22.3393 5.66292 22.7243 11.2501H21.22C18.9634 11.2524 17.587 11.2837 16.4403 11.6849C14.6151 12.3236 13.1098 13.6152 12.1975 15.2866C12.1782 15.2885 12.1589 15.2911 12.1396 15.2945C11.0656 15.4824 10.0235 15.4383 9.09494 15.2056C8.69315 15.1049 8.2858 15.349 8.1851 15.7508C8.0844 16.1526 8.32847 16.5599 8.73026 16.6606C9.61622 16.8827 10.5717 16.9615 11.5515 16.8809ZM14.8977 11.2234C15.4311 11.0805 15.6898 10.3159 15.4754 9.51572C15.2609 8.71552 14.6547 8.18271 14.1212 8.32565C13.5877 8.4686 13.3291 9.23316 13.5435 10.0334C13.7579 10.8336 14.3642 11.3664 14.8977 11.2234ZM9.10225 12.7764C9.63571 12.6335 9.89436 11.8689 9.67994 11.0687C9.46553 10.2685 8.85926 9.73569 8.32579 9.87863C7.79232 10.0216 7.53368 10.7861 7.74809 11.5863C7.9625 12.3865 8.56878 12.9194 9.10225 12.7764Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldStickerSmileCircle;
