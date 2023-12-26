import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineSettingsTuning3 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 8.75C11.5858 8.75 11.25 8.41421 11.25 8V5C11.25 4.58579 11.5858 4.25 12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V8C12.75 8.41421 12.4142 8.75 12 8.75Z" fill={color}/>
	<Path d="M4 7.25C5.51878 7.25 6.75 8.48122 6.75 10C6.75 11.5188 5.51878 12.75 4 12.75C2.48122 12.75 1.25 11.5188 1.25 10C1.25 8.48122 2.48122 7.25 4 7.25ZM5.25 10C5.25 9.30964 4.69036 8.75 4 8.75C3.30964 8.75 2.75 9.30964 2.75 10C2.75 10.6904 3.30964 11.25 4 11.25C4.69036 11.25 5.25 10.6904 5.25 10Z" fill={color} fillRule="evenodd"/>
	<Path d="M14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12ZM12 13.25C12.6904 13.25 13.25 12.6904 13.25 12C13.25 11.3096 12.6904 10.75 12 10.75C11.3096 10.75 10.75 11.3096 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25Z" fill={color} fillRule="evenodd"/>
	<Path d="M22.75 14C22.75 15.5188 21.5188 16.75 20 16.75C18.4812 16.75 17.25 15.5188 17.25 14C17.25 12.4812 18.4812 11.25 20 11.25C21.5188 11.25 22.75 12.4812 22.75 14ZM20 15.25C20.6904 15.25 21.25 14.6904 21.25 14C21.25 13.3096 20.6904 12.75 20 12.75C19.3096 12.75 18.75 13.3096 18.75 14C18.75 14.6904 19.3096 15.25 20 15.25Z" fill={color} fillRule="evenodd"/>
	<Path d="M19.25 10C19.25 10.4142 19.5858 10.75 20 10.75C20.4142 10.75 20.75 10.4142 20.75 10V5C20.75 4.58579 20.4142 4.25 20 4.25C19.5858 4.25 19.25 4.58579 19.25 5V10Z" fill={color}/>
	<Path d="M4 13.25C3.58579 13.25 3.25 13.5858 3.25 14L3.25 19C3.25 19.4142 3.58579 19.75 4 19.75C4.41421 19.75 4.75 19.4142 4.75 19L4.75 14C4.75 13.5858 4.41421 13.25 4 13.25Z" fill={color}/>
	<Path d="M11.25 19C11.25 19.4142 11.5858 19.75 12 19.75C12.4142 19.75 12.75 19.4142 12.75 19V16C12.75 15.5858 12.4142 15.25 12 15.25C11.5858 15.25 11.25 15.5858 11.25 16V19Z" fill={color}/>
	<Path d="M20 19.75C19.5858 19.75 19.25 19.4142 19.25 19V18C19.25 17.5858 19.5858 17.25 20 17.25C20.4142 17.25 20.75 17.5858 20.75 18V19C20.75 19.4142 20.4142 19.75 20 19.75Z" fill={color}/>
	<Path d="M3.25 5C3.25 4.58579 3.58579 4.25 4 4.25C4.41421 4.25 4.75 4.58579 4.75 5V6C4.75 6.41421 4.41421 6.75 4 6.75C3.58579 6.75 3.25 6.41421 3.25 6V5Z" fill={color}/>
</Svg>;

export default OutlineSettingsTuning3;
