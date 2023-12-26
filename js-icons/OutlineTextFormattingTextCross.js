import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineTextFormattingTextCross = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7.948 2.25H16.052C16.9505 2.24997 17.6997 2.24995 18.2945 2.32991C18.9223 2.41432 19.4891 2.59999 19.9445 3.05546C20.4 3.51093 20.5857 4.07773 20.6701 4.70552C20.7501 5.30031 20.75 6.04953 20.75 6.94801V7.95C20.75 8.36422 20.4142 8.7 20 8.7C19.5858 8.7 19.25 8.36422 19.25 7.95V7C19.25 6.03599 19.2484 5.38843 19.1835 4.9054C19.1214 4.44393 19.0142 4.24644 18.8839 4.11612C18.7536 3.9858 18.5561 3.87858 18.0946 3.81654C17.6116 3.7516 16.964 3.75 16 3.75H12.75V9C12.75 9.41422 12.4142 9.75 12 9.75C11.5858 9.75 11.25 9.41422 11.25 9V3.75H8C7.03599 3.75 6.38843 3.7516 5.9054 3.81654C5.44393 3.87858 5.24644 3.9858 5.11612 4.11612C4.9858 4.24644 4.87858 4.44393 4.81654 4.9054C4.7516 5.38843 4.75 6.03599 4.75 7V7.95C4.75 8.36422 4.41422 8.7 4 8.7C3.58579 8.7 3.25 8.36422 3.25 7.95L3.25 6.948C3.24997 6.04954 3.24995 5.3003 3.32991 4.70552C3.41432 4.07773 3.59999 3.51093 4.05546 3.05546C4.51093 2.59999 5.07773 2.41432 5.70552 2.32991C6.3003 2.24995 7.04954 2.24997 7.948 2.25Z" fill={color}/>
	<Path d="M12 14.25C12.4142 14.25 12.75 14.5858 12.75 15V20.25H17C17.4142 20.25 17.75 20.5858 17.75 21C17.75 21.4142 17.4142 21.75 17 21.75H7C6.58579 21.75 6.25 21.4142 6.25 21C6.25 20.5858 6.58579 20.25 7 20.25H11.25V15C11.25 14.5858 11.5858 14.25 12 14.25Z" fill={color}/>
	<Path d="M4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H20C20.4142 12.75 20.75 12.4142 20.75 12C20.75 11.5858 20.4142 11.25 20 11.25H4Z" fill={color}/>
</Svg>;

export default OutlineTextFormattingTextCross;
