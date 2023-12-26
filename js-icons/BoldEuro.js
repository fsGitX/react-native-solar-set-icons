import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldEuro = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM6.75 12C6.75 11.7454 6.76813 11.495 6.80317 11.25H10C10.4142 11.25 10.75 10.9142 10.75 10.5C10.75 10.0858 10.4142 9.75 10 9.75H7.25522C8.09782 7.97629 9.9057 6.75 12 6.75C12.9575 6.75 13.853 7.00564 14.6245 7.4519C14.983 7.65931 15.4418 7.53678 15.6492 7.17824C15.8566 6.81969 15.7341 6.3609 15.3755 6.15349C14.3819 5.57872 13.2282 5.25 12 5.25C9.06101 5.25 6.56072 7.12832 5.63409 9.75H5C4.58579 9.75 4.25 10.0858 4.25 10.5C4.25 10.9142 4.58579 11.25 5 11.25H5.2912C5.26397 11.4963 5.25 11.7465 5.25 12C5.25 12.2535 5.26397 12.5037 5.2912 12.75H5C4.58579 12.75 4.25 13.0858 4.25 13.5C4.25 13.9142 4.58579 14.25 5 14.25H5.63409C6.56072 16.8717 9.06101 18.75 12 18.75C13.2282 18.75 14.3819 18.4213 15.3755 17.8465C15.7341 17.6391 15.8566 17.1803 15.6492 16.8218C15.4418 16.4632 14.983 16.3407 14.6245 16.5481C13.853 16.9944 12.9575 17.25 12 17.25C9.9057 17.25 8.09782 16.0237 7.25522 14.25H10C10.4142 14.25 10.75 13.9142 10.75 13.5C10.75 13.0858 10.4142 12.75 10 12.75H6.80317C6.76813 12.505 6.75 12.2546 6.75 12Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldEuro;
