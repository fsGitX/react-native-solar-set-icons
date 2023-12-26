import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineWidget = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.448 1.75C5.54954 1.74997 4.8003 1.74995 4.20552 1.82991C3.57773 1.91432 3.01093 2.09999 2.55546 2.55546C2.09999 3.01093 1.91432 3.57773 1.82991 4.20552C1.74995 4.8003 1.74997 5.54951 1.75 6.44798V6.552C1.74997 7.45047 1.74995 8.19971 1.82991 8.79448C1.91432 9.42228 2.09999 9.98908 2.55546 10.4445C3.01093 10.9 3.57773 11.0857 4.20552 11.1701C4.8003 11.2501 5.54951 11.25 6.44798 11.25H6.552C7.45047 11.25 8.19971 11.2501 8.79448 11.1701C9.42228 11.0857 9.98908 10.9 10.4445 10.4445C10.9 9.98908 11.0857 9.42228 11.1701 8.79448C11.2501 8.19971 11.25 7.4505 11.25 6.55203V6.44801C11.25 5.54954 11.2501 4.8003 11.1701 4.20552C11.0857 3.57773 10.9 3.01093 10.4445 2.55546C9.98908 2.09999 9.42228 1.91432 8.79448 1.82991C8.19971 1.74995 7.4505 1.74997 6.55203 1.75H6.448ZM3.61612 3.61612C3.74644 3.4858 3.94393 3.37858 4.4054 3.31654C4.88843 3.2516 5.53599 3.25 6.5 3.25C7.46401 3.25 8.11157 3.2516 8.59461 3.31654C9.05607 3.37858 9.25357 3.4858 9.38389 3.61612C9.5142 3.74644 9.62143 3.94393 9.68347 4.4054C9.74841 4.88843 9.75 5.53599 9.75 6.5C9.75 7.46401 9.74841 8.11157 9.68347 8.59461C9.62143 9.05607 9.5142 9.25357 9.38389 9.38389C9.25357 9.5142 9.05607 9.62143 8.59461 9.68347C8.11157 9.74841 7.46401 9.75 6.5 9.75C5.53599 9.75 4.88843 9.74841 4.4054 9.68347C3.94393 9.62143 3.74644 9.5142 3.61612 9.38389C3.4858 9.25357 3.37858 9.05607 3.31654 8.59461C3.2516 8.11157 3.25 7.46401 3.25 6.5C3.25 5.53599 3.2516 4.88843 3.31654 4.4054C3.37858 3.94393 3.4858 3.74644 3.61612 3.61612Z" fill={color} fillRule="evenodd"/>
	<Path d="M17.448 12.75C16.5495 12.75 15.8003 12.7499 15.2055 12.8299C14.5777 12.9143 14.0109 13.1 13.5555 13.5555C13.1 14.0109 12.9143 14.5777 12.8299 15.2055C12.7499 15.8003 12.75 16.5495 12.75 17.448V17.552C12.75 18.4505 12.7499 19.1997 12.8299 19.7945C12.9143 20.4223 13.1 20.9891 13.5555 21.4445C14.0109 21.9 14.5777 22.0857 15.2055 22.1701C15.8003 22.2501 16.5495 22.25 17.4479 22.25H17.552C18.4504 22.25 19.1997 22.2501 19.7945 22.1701C20.4223 22.0857 20.9891 21.9 21.4445 21.4445C21.9 20.9891 22.0857 20.4223 22.1701 19.7945C22.2501 19.1997 22.25 18.4505 22.25 17.5521V17.448C22.25 16.5496 22.2501 15.8003 22.1701 15.2055C22.0857 14.5777 21.9 14.0109 21.4445 13.5555C20.9891 13.1 20.4223 12.9143 19.7945 12.8299C19.1997 12.7499 18.4505 12.75 17.552 12.75H17.448ZM14.6161 14.6161C14.7464 14.4858 14.9439 14.3786 15.4054 14.3165C15.8884 14.2516 16.536 14.25 17.5 14.25C18.464 14.25 19.1116 14.2516 19.5946 14.3165C20.0561 14.3786 20.2536 14.4858 20.3839 14.6161C20.5142 14.7464 20.6214 14.9439 20.6835 15.4054C20.7484 15.8884 20.75 16.536 20.75 17.5C20.75 18.464 20.7484 19.1116 20.6835 19.5946C20.6214 20.0561 20.5142 20.2536 20.3839 20.3839C20.2536 20.5142 20.0561 20.6214 19.5946 20.6835C19.1116 20.7484 18.464 20.75 17.5 20.75C16.536 20.75 15.8884 20.7484 15.4054 20.6835C14.9439 20.6214 14.7464 20.5142 14.6161 20.3839C14.4858 20.2536 14.3786 20.0561 14.3165 19.5946C14.2516 19.1116 14.25 18.464 14.25 17.5C14.25 16.536 14.2516 15.8884 14.3165 15.4054C14.3786 14.9439 14.4858 14.7464 14.6161 14.6161Z" fill={color} fillRule="evenodd"/>
	<Path d="M6.448 12.75H6.552C7.45048 12.75 8.1997 12.7499 8.79448 12.8299C9.42228 12.9143 9.98908 13.1 10.4445 13.5555C10.9 14.0109 11.0857 14.5777 11.1701 15.2055C11.2501 15.8003 11.25 16.5495 11.25 17.448V17.552C11.25 18.4505 11.2501 19.1997 11.1701 19.7945C11.0857 20.4223 10.9 20.9891 10.4445 21.4445C9.98908 21.9 9.42228 22.0857 8.79448 22.1701C8.19971 22.2501 7.45051 22.25 6.55206 22.25H6.44801C5.54955 22.25 4.80029 22.2501 4.20552 22.1701C3.57773 22.0857 3.01093 21.9 2.55546 21.4445C2.09999 20.9891 1.91432 20.4223 1.82991 19.7945C1.74995 19.1997 1.74997 18.4505 1.75 17.552V17.448C1.74997 16.5495 1.74995 15.8003 1.82991 15.2055C1.91432 14.5777 2.09999 14.0109 2.55546 13.5555C3.01093 13.1 3.57773 12.9143 4.20552 12.8299C4.8003 12.7499 5.54952 12.75 6.448 12.75ZM4.4054 14.3165C3.94393 14.3786 3.74644 14.4858 3.61612 14.6161C3.4858 14.7464 3.37858 14.9439 3.31654 15.4054C3.2516 15.8884 3.25 16.536 3.25 17.5C3.25 18.464 3.2516 19.1116 3.31654 19.5946C3.37858 20.0561 3.4858 20.2536 3.61612 20.3839C3.74644 20.5142 3.94393 20.6214 4.4054 20.6835C4.88843 20.7484 5.53599 20.75 6.5 20.75C7.46401 20.75 8.11157 20.7484 8.59461 20.6835C9.05607 20.6214 9.25357 20.5142 9.38389 20.3839C9.5142 20.2536 9.62143 20.0561 9.68347 19.5946C9.74841 19.1116 9.75 18.464 9.75 17.5C9.75 16.536 9.74841 15.8884 9.68347 15.4054C9.62143 14.9439 9.5142 14.7464 9.38389 14.6161C9.25357 14.4858 9.05607 14.3786 8.59461 14.3165C8.11157 14.2516 7.46401 14.25 6.5 14.25C5.53599 14.25 4.88843 14.2516 4.4054 14.3165Z" fill={color} fillRule="evenodd"/>
	<Path d="M17.448 1.75C16.5495 1.74997 15.8003 1.74995 15.2055 1.82991C14.5777 1.91432 14.0109 2.09999 13.5555 2.55546C13.1 3.01093 12.9143 3.57773 12.8299 4.20552C12.7499 4.8003 12.75 5.54952 12.75 6.448V6.552C12.75 7.45048 12.7499 8.1997 12.8299 8.79448C12.9143 9.42228 13.1 9.98908 13.5555 10.4445C14.0109 10.9 14.5777 11.0857 15.2055 11.1701C15.8003 11.2501 16.5495 11.25 17.448 11.25H17.552C18.4505 11.25 19.1997 11.2501 19.7945 11.1701C20.4223 11.0857 20.9891 10.9 21.4445 10.4445C21.9 9.98908 22.0857 9.42228 22.1701 8.79448C22.2501 8.19971 22.25 7.4505 22.25 6.55203V6.44801C22.25 5.54954 22.2501 4.8003 22.1701 4.20552C22.0857 3.57773 21.9 3.01093 21.4445 2.55546C20.9891 2.09999 20.4223 1.91432 19.7945 1.82991C19.1997 1.74995 18.4505 1.74997 17.552 1.75H17.448ZM14.6161 3.61612C14.7464 3.4858 14.9439 3.37858 15.4054 3.31654C15.8884 3.2516 16.536 3.25 17.5 3.25C18.464 3.25 19.1116 3.2516 19.5946 3.31654C20.0561 3.37858 20.2536 3.4858 20.3839 3.61612C20.5142 3.74644 20.6214 3.94393 20.6835 4.4054C20.7484 4.88843 20.75 5.53599 20.75 6.5C20.75 7.46401 20.7484 8.11157 20.6835 8.59461C20.6214 9.05607 20.5142 9.25357 20.3839 9.38389C20.2536 9.5142 20.0561 9.62143 19.5946 9.68347C19.1116 9.74841 18.464 9.75 17.5 9.75C16.536 9.75 15.8884 9.74841 15.4054 9.68347C14.9439 9.62143 14.7464 9.5142 14.6161 9.38389C14.4858 9.25357 14.3786 9.05607 14.3165 8.59461C14.2516 8.11157 14.25 7.46401 14.25 6.5C14.25 5.53599 14.2516 4.88843 14.3165 4.4054C14.3786 3.94393 14.4858 3.74644 14.6161 3.61612Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineWidget;
