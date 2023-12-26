import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineToPIP = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.94358 2.25H14.0564C15.8942 2.24998 17.3498 2.24997 18.489 2.40314C19.6614 2.56076 20.6104 2.89288 21.3588 3.64124C22.1071 4.38961 22.4392 5.33856 22.5969 6.51098C22.75 7.65019 22.75 9.10583 22.75 10.9436V11C22.75 11.4142 22.4142 11.75 22 11.75C21.5858 11.75 21.25 11.4142 21.25 11C21.25 9.09318 21.2484 7.73851 21.1102 6.71085C20.975 5.70476 20.7213 5.12511 20.2981 4.7019C19.8749 4.27869 19.2952 4.02502 18.2892 3.88976C17.2615 3.75159 15.9068 3.75 14 3.75H10C8.09318 3.75 6.73851 3.75159 5.71085 3.88976C4.70476 4.02502 4.12511 4.27869 3.7019 4.7019C3.27869 5.12511 3.02502 5.70476 2.88976 6.71085C2.75159 7.73851 2.75 9.09318 2.75 11V13C2.75 14.9068 2.75159 16.2615 2.88976 17.2892C3.02502 18.2952 3.27869 18.8749 3.7019 19.2981C4.12511 19.7213 4.70476 19.975 5.71085 20.1102C6.73851 20.2484 8.09318 20.25 10 20.25H11C11.4142 20.25 11.75 20.5858 11.75 21C11.75 21.4142 11.4142 21.75 11 21.75H9.94359C8.10583 21.75 6.65019 21.75 5.51098 21.5969C4.33856 21.4392 3.38961 21.1071 2.64124 20.3588C1.89288 19.6104 1.56076 18.6614 1.40314 17.489C1.24997 16.3498 1.24998 14.8942 1.25 13.0564V10.9436C1.24998 9.10582 1.24997 7.65019 1.40314 6.51098C1.56076 5.33856 1.89288 4.38961 2.64124 3.64124C3.38961 2.89288 4.33856 2.56076 5.51098 2.40314C6.65019 2.24997 8.10582 2.24998 9.94358 2.25ZM6.96967 6.96967C7.26256 6.67678 7.73744 6.67678 8.03033 6.96967L10.75 9.68934V8.5C10.75 8.08579 11.0858 7.75 11.5 7.75C11.9142 7.75 12.25 8.08579 12.25 8.5V11.5C12.25 11.9142 11.9142 12.25 11.5 12.25H8.5C8.08579 12.25 7.75 11.9142 7.75 11.5C7.75 11.0858 8.08579 10.75 8.5 10.75H9.68934L6.96967 8.03033C6.67678 7.73744 6.67678 7.26256 6.96967 6.96967ZM16.948 12.25H18.052C18.9505 12.25 19.6997 12.2499 20.2945 12.3299C20.9223 12.4143 21.4891 12.6 21.9445 13.0555C22.4 13.5109 22.5857 14.0777 22.6701 14.7055C22.7501 15.3003 22.75 16.0495 22.75 16.948V17.052C22.75 17.9505 22.7501 18.6997 22.6701 19.2945C22.5857 19.9223 22.4 20.4891 21.9445 20.9445C21.4891 21.4 20.9223 21.5857 20.2945 21.6701C19.6997 21.7501 18.9505 21.75 18.052 21.75H16.948C16.0495 21.75 15.3003 21.7501 14.7055 21.6701C14.0777 21.5857 13.5109 21.4 13.0555 20.9445C12.6 20.4891 12.4143 19.9223 12.3299 19.2945C12.2499 18.6997 12.25 17.9505 12.25 17.052V16.948C12.25 16.0495 12.2499 15.3003 12.3299 14.7055C12.4143 14.0777 12.6 13.5109 13.0555 13.0555C13.5109 12.6 14.0777 12.4143 14.7055 12.3299C15.3003 12.2499 16.0495 12.25 16.948 12.25ZM14.9054 13.8165C14.4439 13.8786 14.2464 13.9858 14.1161 14.1161C13.9858 14.2464 13.8786 14.4439 13.8165 14.9054C13.7516 15.3884 13.75 16.036 13.75 17C13.75 17.964 13.7516 18.6116 13.8165 19.0946C13.8786 19.5561 13.9858 19.7536 14.1161 19.8839C14.2464 20.0142 14.4439 20.1214 14.9054 20.1835C15.3884 20.2484 16.036 20.25 17 20.25H18C18.964 20.25 19.6116 20.2484 20.0946 20.1835C20.5561 20.1214 20.7536 20.0142 20.8839 19.8839C21.0142 19.7536 21.1214 19.5561 21.1835 19.0946C21.2484 18.6116 21.25 17.964 21.25 17C21.25 16.036 21.2484 15.3884 21.1835 14.9054C21.1214 14.4439 21.0142 14.2464 20.8839 14.1161C20.7536 13.9858 20.5561 13.8786 20.0946 13.8165C19.6116 13.7516 18.964 13.75 18 13.75H17C16.036 13.75 15.3884 13.7516 14.9054 13.8165Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineToPIP;
