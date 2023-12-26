import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneMoneyRuble = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill={color} fillRule="evenodd" opacity="0.5"/>
	<Path d="M9 13.2501C8.58579 13.2501 8.25 13.5858 8.25 14.0001C8.25 14.4143 8.58579 14.7501 9 14.7501H9.25V17.0001C9.25 17.4143 9.58579 17.7501 10 17.7501C10.4142 17.7501 10.75 17.4143 10.75 17.0001V14.7501H12C12.4142 14.7501 12.75 14.4143 12.75 14.0001C12.75 13.5858 12.4142 13.2501 12 13.2501H10.75V12.7501H13.5C15.2949 12.7501 16.75 11.295 16.75 9.50006C16.75 7.70514 15.2949 6.25006 13.5 6.25006L11.1615 6.25003C11.016 6.24986 10.8647 6.24968 10.7262 6.27161C9.97743 6.39021 9.39015 6.97749 9.27155 7.7263C9.24961 7.86478 9.24979 8.01605 9.24997 8.16157L9.25 11.2501H9C8.58579 11.2501 8.25 11.5858 8.25 12.0001C8.25 12.4143 8.58579 12.7501 9 12.7501H9.25V13.2501H9ZM13.5 11.2501H10.75V8.20006C10.75 8.1031 10.7501 8.04537 10.7513 8.00186C10.752 7.97425 10.7531 7.96225 10.7533 7.95936C10.7708 7.85368 10.8536 7.77083 10.9593 7.7534C10.9622 7.75311 10.9742 7.75208 11.0018 7.75132C11.0453 7.75013 11.103 7.75006 11.2 7.75006H13.5C14.4665 7.75006 15.25 8.53356 15.25 9.50006C15.25 10.4666 14.4665 11.2501 13.5 11.2501Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneMoneyRuble;
