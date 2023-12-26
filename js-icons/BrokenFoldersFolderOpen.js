import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenFoldersFolderOpen = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4 11.5V9M20 11.5V9.34843C20 7.37415 20 6.38701 19.3844 5.74537C19.3278 5.68635 19.2679 5.63018 19.2049 5.5771C18.5205 5 17.4676 5 15.3617 5H15.0627C14.1398 5 13.6783 5 13.2483 4.88508C13.012 4.82195 12.7844 4.73353 12.5697 4.62157C12.1789 4.41775 11.8526 4.11183 11.2 3.5L10.7598 3.08731C10.5411 2.88224 10.4317 2.77971 10.3168 2.69039C9.82122 2.30528 9.21332 2.06921 8.57246 2.01303C8.42381 2 8.26914 2 7.9598 2C7.25377 2 6.90076 2 6.60671 2.05201C5.31225 2.28098 4.29971 3.23023 4.05548 4.44379C4.02473 4.59657 4.01103 4.76633 4.00491 5C4 5.18795 4 5.41725 4 5.71231" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 17H14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 11H8.7053C6.0379 11 4.7042 11 3.87908 11.7634C3.66852 11.9582 3.4866 12.1838 3.33908 12.433C2.761 13.4097 2.99958 14.7678 3.47674 17.4839C3.82024 19.4391 3.99198 20.4167 4.58706 21.0655C4.74145 21.2338 4.9142 21.383 5.10183 21.5101C5.825 22 6.7851 22 8.70531 22H15.2947C17.2149 22 18.175 22 18.8982 21.5101C19.0858 21.383 19.2585 21.2338 19.4129 21.0655C20.008 20.4167 20.1798 19.4391 20.5233 17.4839C21.0004 14.7678 21.239 13.4097 20.6609 12.433C20.5134 12.1838 20.3315 11.9582 20.1209 11.7634C19.2958 11 17.9621 11 15.2947 11H14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenFoldersFolderOpen;