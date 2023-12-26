import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineMedicineMedicalKit = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 11.75C12.4142 11.75 12.75 12.0858 12.75 12.5V13.25H13.5C13.9142 13.25 14.25 13.5858 14.25 14C14.25 14.4142 13.9142 14.75 13.5 14.75H12.75V15.5C12.75 15.9142 12.4142 16.25 12 16.25C11.5858 16.25 11.25 15.9142 11.25 15.5V14.75H10.5C10.0858 14.75 9.75 14.4142 9.75 14C9.75 13.5858 10.0858 13.25 10.5 13.25H11.25V12.5C11.25 12.0858 11.5858 11.75 12 11.75Z" fill={color}/>
	<Path d="M12 9.25C9.37665 9.25 7.25 11.3767 7.25 14C7.25 16.6234 9.37665 18.75 12 18.75C14.6234 18.75 16.75 16.6234 16.75 14C16.75 11.3767 14.6234 9.25 12 9.25ZM8.75 14C8.75 12.2051 10.2051 10.75 12 10.75C13.7949 10.75 15.25 12.2051 15.25 14C15.25 15.7949 13.7949 17.25 12 17.25C10.2051 17.25 8.75 15.7949 8.75 14Z" fill={color} fillRule="evenodd"/>
	<Path d="M11.948 1.25C11.0495 1.24997 10.3003 1.24995 9.70552 1.32991C9.07773 1.41432 8.51093 1.59999 8.05546 2.05546C7.59999 2.51093 7.41432 3.07773 7.32991 3.70552C7.27081 4.14512 7.2554 4.66909 7.2514 5.27533C6.60288 5.29614 6.02475 5.33406 5.51098 5.40314C4.33856 5.56077 3.38961 5.89288 2.64124 6.64125C1.89288 7.38961 1.56076 8.33856 1.40314 9.51098C1.24997 10.6502 1.24998 12.1058 1.25 13.9436V14.0564C1.24998 15.8942 1.24997 17.3498 1.40314 18.489C1.56076 19.6614 1.89288 20.6104 2.64124 21.3588C3.38961 22.1071 4.33856 22.4392 5.51098 22.5969C6.65018 22.75 8.1058 22.75 9.94354 22.75H14.0564C15.8942 22.75 17.3498 22.75 18.489 22.5969C19.6614 22.4392 20.6104 22.1071 21.3588 21.3588C22.1071 20.6104 22.4392 19.6614 22.5969 18.489C22.75 17.3498 22.75 15.8942 22.75 14.0565V13.9436C22.75 12.1059 22.75 10.6502 22.5969 9.51098C22.4392 8.33856 22.1071 7.38961 21.3588 6.64125C20.6104 5.89288 19.6614 5.56077 18.489 5.40314C17.9752 5.33406 17.3971 5.29614 16.7486 5.27533C16.7446 4.66909 16.7292 4.14512 16.6701 3.70552C16.5857 3.07773 16.4 2.51093 15.9445 2.05546C15.4891 1.59999 14.9223 1.41432 14.2945 1.32991C13.6997 1.24995 12.9505 1.24997 12.052 1.25H11.948ZM15.2482 5.25178C15.244 4.68146 15.23 4.25125 15.1835 3.9054C15.1214 3.44393 15.0142 3.24644 14.8839 3.11612C14.7536 2.9858 14.5561 2.87858 14.0946 2.81654C13.6116 2.7516 12.964 2.75 12 2.75C11.036 2.75 10.3884 2.7516 9.90539 2.81654C9.44393 2.87858 9.24643 2.9858 9.11612 3.11612C8.9858 3.24644 8.87858 3.44393 8.81654 3.9054C8.77004 4.25125 8.75602 4.68146 8.7518 5.25178C9.12993 5.25 9.52694 5.25 9.94358 5.25H14.0564C14.4731 5.25 14.8701 5.25 15.2482 5.25178ZM3.7019 7.70191C4.12511 7.2787 4.70476 7.02503 5.71085 6.88976C6.73851 6.7516 8.09318 6.75 10 6.75H14C15.9068 6.75 17.2615 6.7516 18.2892 6.88976C19.2952 7.02503 19.8749 7.2787 20.2981 7.70191C20.7213 8.12512 20.975 8.70476 21.1102 9.71085C21.2484 10.7385 21.25 12.0932 21.25 14C21.25 15.9068 21.2484 17.2615 21.1102 18.2892C20.975 19.2952 20.7213 19.8749 20.2981 20.2981C19.8749 20.7213 19.2952 20.975 18.2892 21.1102C17.2615 21.2484 15.9068 21.25 14 21.25H10C8.09318 21.25 6.73851 21.2484 5.71085 21.1102C4.70476 20.975 4.12511 20.7213 3.7019 20.2981C3.27869 19.8749 3.02503 19.2952 2.88976 18.2892C2.75159 17.2615 2.75 15.9068 2.75 14C2.75 12.0932 2.75159 10.7385 2.88976 9.71085C3.02503 8.70476 3.27869 8.12512 3.7019 7.70191Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineMedicineMedicalKit;
