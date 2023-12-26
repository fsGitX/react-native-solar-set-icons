import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineMinimizeSquare3 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.9425 1.25H12.0573C14.3657 1.24999 16.1747 1.24998 17.5862 1.43975C19.0309 1.63399 20.171 2.03933 21.0658 2.93414C21.9606 3.82895 22.3659 4.96897 22.5602 6.41371C22.7499 7.82519 22.7499 9.63423 22.7499 11.9426V12.0574C22.7499 14.3658 22.7499 16.1748 22.5602 17.5863C22.3659 19.031 21.9606 20.1711 21.0658 21.0659C20.2374 21.8943 19.198 22.3038 17.8993 22.514C16.6225 22.7207 15.0164 22.7458 13.0013 22.7494C12.5871 22.7502 12.2507 22.415 12.2499 22.0008C12.2492 21.5866 12.5843 21.2502 12.9986 21.2494C15.0385 21.2457 16.5216 21.2175 17.6596 21.0333C18.7756 20.8526 19.4765 20.5338 20.0051 20.0052C20.5748 19.4355 20.9017 18.6648 21.0735 17.3864C21.2483 16.0864 21.2499 14.3782 21.2499 12C21.2499 9.62178 21.2483 7.91356 21.0735 6.61358C20.9017 5.33517 20.5748 4.56445 20.0051 3.9948C19.4355 3.42514 18.6647 3.09825 17.3863 2.92637C16.0864 2.75159 14.3781 2.75 11.9999 2.75C9.62169 2.75 7.91347 2.75159 6.61349 2.92637C5.33509 3.09825 4.56437 3.42514 3.99471 3.9948C3.46609 4.52341 3.1473 5.22427 2.96665 6.34031C2.78246 7.47827 2.75416 8.96143 2.75049 11.0014C2.74974 11.4156 2.41335 11.7507 1.99914 11.75C1.58493 11.7493 1.24975 11.4129 1.25049 10.9986C1.25412 8.9835 1.27926 7.37741 1.48592 6.10063C1.69614 4.80193 2.10563 3.76255 2.93405 2.93414C3.82886 2.03933 4.96888 1.63399 6.41362 1.43975C7.82511 1.24998 9.63414 1.24999 11.9425 1.25Z" fill={color}/>
	<Path d="M16.5 12C16.5 12.4142 16.1642 12.75 15.75 12.75H12C11.5858 12.75 11.25 12.4142 11.25 12V8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25V10.1893L16.4697 6.46967C16.7626 6.17678 17.2374 6.17678 17.5303 6.46967C17.8232 6.76256 17.8232 7.23744 17.5303 7.53033L13.8107 11.25H15.75C16.1642 11.25 16.5 11.5858 16.5 12Z" fill={color}/>
	<Path d="M5.948 13.25C5.04952 13.25 4.3003 13.2499 3.70552 13.3299C3.07773 13.4143 2.51093 13.6 2.05546 14.0555C1.59999 14.5109 1.41432 15.0777 1.32991 15.7055C1.24995 16.3003 1.24997 17.0495 1.25 17.948V18.052C1.24997 18.9505 1.24995 19.6997 1.32991 20.2945C1.41432 20.9223 1.59999 21.4891 2.05546 21.9445C2.51093 22.4 3.07773 22.5857 3.70552 22.6701C4.3003 22.7501 5.04951 22.75 5.94798 22.75H6.052C6.95047 22.75 7.69971 22.7501 8.29448 22.6701C8.92228 22.5857 9.48908 22.4 9.94455 21.9445C10.4 21.4891 10.5857 20.9223 10.6701 20.2945C10.7501 19.6997 10.75 18.9505 10.75 18.052V17.948C10.75 17.0495 10.7501 16.3003 10.6701 15.7055C10.5857 15.0777 10.4 14.5109 9.94455 14.0555C9.48908 13.6 8.92228 13.4143 8.29448 13.3299C7.6997 13.2499 6.95048 13.25 6.052 13.25H5.948ZM3.11612 15.1161C3.24644 14.9858 3.44393 14.8786 3.9054 14.8165C4.38843 14.7516 5.03599 14.75 6 14.75C6.96401 14.75 7.61157 14.7516 8.09461 14.8165C8.55607 14.8786 8.75357 14.9858 8.88389 15.1161C9.0142 15.2464 9.12143 15.4439 9.18347 15.9054C9.24841 16.3884 9.25 17.036 9.25 18C9.25 18.964 9.24841 19.6116 9.18347 20.0946C9.12143 20.5561 9.0142 20.7536 8.88389 20.8839C8.75357 21.0142 8.55607 21.1214 8.09461 21.1835C7.61157 21.2484 6.96401 21.25 6 21.25C5.03599 21.25 4.38843 21.2484 3.9054 21.1835C3.44393 21.1214 3.24644 21.0142 3.11612 20.8839C2.9858 20.7536 2.87858 20.5561 2.81654 20.0946C2.7516 19.6116 2.75 18.964 2.75 18C2.75 17.036 2.7516 16.3884 2.81654 15.9054C2.87858 15.4439 2.9858 15.2464 3.11612 15.1161Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineMinimizeSquare3;
