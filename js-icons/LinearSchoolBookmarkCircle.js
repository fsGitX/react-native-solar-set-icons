import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearSchoolBookmarkCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16 14.0455V11.5488C16 9.40445 16 8.3323 15.4142 7.66615C14.8284 7 13.8856 7 12 7C10.1144 7 9.17157 7 8.58579 7.66615C8 8.3323 8 9.40445 8 11.5488V14.0455C8 15.5937 8 16.3679 8.32627 16.7062C8.48187 16.8675 8.67829 16.9688 8.88752 16.9958C9.32623 17.0522 9.83855 16.5425 10.8632 15.5229C11.3161 15.0722 11.5426 14.8469 11.8046 14.7875C11.9336 14.7583 12.0664 14.7583 12.1954 14.7875C12.4574 14.8469 12.6839 15.0722 13.1368 15.5229C14.1615 16.5425 14.6738 17.0522 15.1125 16.9958C15.3217 16.9688 15.5181 16.8675 15.6737 16.7062C16 16.3679 16 15.5937 16 14.0455Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearSchoolBookmarkCircle;
