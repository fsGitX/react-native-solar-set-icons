import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldTextFormattingParagraphSpacing = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.25 3C3.25 2.58579 3.58579 2.25 4 2.25H20C20.4142 2.25 20.75 2.58579 20.75 3C20.75 3.41421 20.4142 3.75 20 3.75H4C3.58579 3.75 3.25 3.41421 3.25 3Z" fill={color}/>
	<Path d="M3.25 21C3.25 20.5858 3.58579 20.25 4 20.25H20C20.4142 20.25 20.75 20.5858 20.75 21C20.75 21.4142 20.4142 21.75 20 21.75H4C3.58579 21.75 3.25 21.4142 3.25 21Z" fill={color}/>
	<Path d="M12.5303 4.96967C12.2374 4.67678 11.7626 4.67678 11.4697 4.96967L8.46967 7.96967C8.17678 8.26256 8.17678 8.73744 8.46967 9.03033C8.76256 9.32322 9.23744 9.32322 9.53033 9.03033L11.25 7.31066V16.6893L9.53033 14.9697C9.23744 14.6768 8.76256 14.6768 8.46967 14.9697C8.17678 15.2626 8.17678 15.7374 8.46967 16.0303L11.4697 19.0303C11.7626 19.3232 12.2374 19.3232 12.5303 19.0303L15.5303 16.0303C15.8232 15.7374 15.8232 15.2626 15.5303 14.9697C15.2374 14.6768 14.7626 14.6768 14.4697 14.9697L12.75 16.6893V7.31066L14.4697 9.03033C14.7626 9.32322 15.2374 9.32322 15.5303 9.03033C15.8232 8.73744 15.8232 8.26256 15.5303 7.96967L12.5303 4.96967Z" fill={color}/>
</Svg>;

export default BoldTextFormattingParagraphSpacing;
