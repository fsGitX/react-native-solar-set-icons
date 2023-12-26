import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDesignRulerAngular = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.25 2H6C4.11438 2 3.17157 2 2.58579 2.58579C2 3.17157 2 4.11438 2 6V8.25H5C5.41421 8.25 5.75 8.58579 5.75 9C5.75 9.41421 5.41421 9.75 5 9.75H2V11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2V14.25L5 14.25C5.41421 14.25 5.75 14.5858 5.75 15C5.75 15.4142 5.41421 15.75 5 15.75L2 15.75V17.25H4C4.41421 17.25 4.75 17.5858 4.75 18C4.75 18.4142 4.41421 18.75 4 18.75H2.00008C2.00126 19.9896 2.02062 20.6376 2.33706 21.1111C2.48298 21.3295 2.67048 21.517 2.88886 21.6629C3.39331 22 4.09554 22 5.5 22C6.90446 22 7.60669 22 8.11114 21.6629C8.32952 21.517 8.51702 21.3295 8.66294 21.1111C9 20.6067 9 19.9045 9 18.5V11C9 10.0572 9 9.58579 9.29289 9.29289C9.58579 9 10.0572 9 11 9H18.5C19.9045 9 20.6067 9 21.1111 8.66294C21.3295 8.51702 21.517 8.32952 21.6629 8.11114C22 7.60669 22 6.90446 22 5.5C22 4.09554 22 3.39331 21.6629 2.88886C21.517 2.67048 21.3295 2.48298 21.1111 2.33706C20.6376 2.02062 19.9896 2.00126 18.75 2.00008V4C18.75 4.41421 18.4142 4.75 18 4.75C17.5858 4.75 17.25 4.41421 17.25 4V2H15.75V5C15.75 5.41421 15.4142 5.75 15 5.75C14.5858 5.75 14.25 5.41421 14.25 5V2H12.75V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2H9.75L9.75 5C9.75 5.41421 9.41421 5.75 9 5.75C8.58579 5.75 8.25 5.41421 8.25 5L8.25 2Z" fill={color}/>
</Svg>;

export default BoldDesignRulerAngular;
