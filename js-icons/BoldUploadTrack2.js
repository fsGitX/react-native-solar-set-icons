import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldUploadTrack2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17.4697 14.4697C17.7626 14.1768 18.2374 14.1768 18.5303 14.4697L21.0303 16.9697C21.3232 17.2626 21.3232 17.7374 21.0303 18.0303C20.7374 18.3232 20.2626 18.3232 19.9697 18.0303L18.75 16.8107V22C18.75 22.4142 18.4142 22.75 18 22.75C17.5858 22.75 17.25 22.4142 17.25 22V16.8107L16.0303 18.0303C15.7374 18.3232 15.2626 18.3232 14.9697 18.0303C14.6768 17.7374 14.6768 17.2626 14.9697 16.9697L17.4697 14.4697Z" fill={color} fillRule="evenodd"/>
	<Path d="M12.25 15C12.25 14.3096 11.6904 13.75 11 13.75C10.3096 13.75 9.75 14.3096 9.75 15C9.75 15.6904 10.3096 16.25 11 16.25C11.6904 16.25 12.25 15.6904 12.25 15Z" fill={color}/>
	<Path d="M15.75 21.2731C14.592 21.7419 13.3261 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 13.1455 21.8074 14.246 21.4528 15.2709L19.591 13.409C18.7123 12.5303 17.2877 12.5303 16.409 13.409L13.909 15.909C13.0303 16.7877 13.0303 18.2123 13.909 19.091C14.412 19.594 15.094 19.8091 15.75 19.7362V21.2731ZM13 6.25C13.4142 6.25 13.75 6.58579 13.75 7C13.75 8.24264 14.7574 9.25 16 9.25C16.4142 9.25 16.75 9.58579 16.75 10C16.75 10.4142 16.4142 10.75 16 10.75C15.1558 10.75 14.3767 10.471 13.75 10.0003V15C13.75 16.5188 12.5188 17.75 11 17.75C9.48122 17.75 8.25 16.5188 8.25 15C8.25 13.4812 9.48122 12.25 11 12.25C11.4501 12.25 11.875 12.3581 12.25 12.5499V7C12.25 6.58579 12.5858 6.25 13 6.25Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldUploadTrack2;
