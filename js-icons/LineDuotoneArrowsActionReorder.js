import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneArrowsActionReorder = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 17.5C2 16.5654 2 16.0981 2.20096 15.75C2.33261 15.522 2.52197 15.3326 2.75 15.201C3.09808 15 3.56538 15 4.5 15C5.43462 15 5.90192 15 6.25 15.201C6.47803 15.3326 6.66739 15.522 6.79904 15.75C7 16.0981 7 16.5654 7 17.5C7 18.4346 7 18.9019 6.79904 19.25C6.66739 19.478 6.47803 19.6674 6.25 19.799C5.90192 20 5.43462 20 4.5 20C3.56538 20 3.09808 20 2.75 19.799C2.52197 19.6674 2.33261 19.478 2.20096 19.25C2 18.9019 2 18.4346 2 17.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M9.5 17.5C9.5 16.5654 9.5 16.0981 9.70096 15.75C9.83261 15.522 10.022 15.3326 10.25 15.201C10.5981 15 11.0654 15 12 15C12.9346 15 13.4019 15 13.75 15.201C13.978 15.3326 14.1674 15.522 14.299 15.75C14.5 16.0981 14.5 16.5654 14.5 17.5C14.5 18.4346 14.5 18.9019 14.299 19.25C14.1674 19.478 13.978 19.6674 13.75 19.799C13.4019 20 12.9346 20 12 20C11.0654 20 10.5981 20 10.25 19.799C10.022 19.6674 9.83261 19.478 9.70096 19.25C9.5 18.9019 9.5 18.4346 9.5 17.5Z" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M17 17.5C17 16.5654 17 16.0981 17.201 15.75C17.3326 15.522 17.522 15.3326 17.75 15.201C18.0981 15 18.5654 15 19.5 15C20.4346 15 20.9019 15 21.25 15.201C21.478 15.3326 21.6674 15.522 21.799 15.75C22 16.0981 22 16.5654 22 17.5C22 18.4346 22 18.9019 21.799 19.25C21.6674 19.478 21.478 19.6674 21.25 19.799C20.9019 20 20.4346 20 19.5 20C18.5654 20 18.0981 20 17.75 19.799C17.522 19.6674 17.3326 19.478 17.201 19.25C17 18.9019 17 18.4346 17 17.5Z" opacity="0.7" stroke="black" strokeWidth="1.5"/>
	<Path d="M4.5 15V9C4.5 6.64298 4.5 5.46447 5.23223 4.73223C5.96447 4 7.14298 4 9.5 4H14.5C16.857 4 18.0355 4 18.7678 4.73223C19.5 5.46447 19.5 6.64298 19.5 9V12M19.5 12L21.5 10M19.5 12L17.5 10" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneArrowsActionReorder;
