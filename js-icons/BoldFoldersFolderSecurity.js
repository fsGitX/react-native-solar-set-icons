import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldFoldersFolderSecurity = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 11.75C11.3096 11.75 10.75 12.3096 10.75 13C10.75 13.6904 11.3096 14.25 12 14.25C12.6904 14.25 13.25 13.6904 13.25 13C13.25 12.3096 12.6904 11.75 12 11.75Z" fill={color} fillRule="evenodd"/>
	<Path d="M22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C22 7.84935 22 9.16554 22 11.7979ZM12 10.25C10.4812 10.25 9.25 11.4812 9.25 13C9.25 14.2588 10.0957 15.32 11.25 15.6465V17.5C11.25 17.9142 11.5858 18.25 12 18.25C12.4142 18.25 12.75 17.9142 12.75 17.5V15.6465C13.9043 15.32 14.75 14.2588 14.75 13C14.75 11.4812 13.5188 10.25 12 10.25Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldFoldersFolderSecurity;
