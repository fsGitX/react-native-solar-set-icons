import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneRouting2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 5.25732C2 3.45835 3.567 2 5.5 2C7.433 2 9 3.45835 9 5.25732C9 7.04219 7.88292 9.12496 6.14003 9.86978C5.73374 10.0434 5.26626 10.0434 4.85997 9.86978C3.11708 9.12496 2 7.04219 2 5.25732Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M15 17.2573C15 15.4584 16.567 14 18.5 14C20.433 14 22 15.4584 22 17.2573C22 19.0422 20.8829 21.125 19.14 21.8698C18.7337 22.0434 18.2663 22.0434 17.86 21.8698C16.1171 21.125 15 19.0422 15 17.2573Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 4.25C11.5858 4.25 11.25 4.58579 11.25 5C11.25 5.41421 11.5858 5.75 12 5.75V4.25ZM12 19L12.5303 19.5303C12.8232 19.2374 12.8232 18.7626 12.5303 18.4697L12 19ZM17.2056 8.68732L17.6083 9.32007L17.6083 9.32007L17.2056 8.68732ZM6.79434 15.3127L7.197 15.9454L7.197 15.9454L6.79434 15.3127ZM11.0303 16.9697C10.7374 16.6768 10.2625 16.6768 9.96964 16.9697C9.67675 17.2626 9.67675 17.7374 9.96964 18.0303L11.0303 16.9697ZM9.96964 19.9697C9.67675 20.2626 9.67675 20.7374 9.96964 21.0303C10.2625 21.3232 10.7374 21.3232 11.0303 21.0303L9.96964 19.9697ZM16.1319 4.25H12V5.75H16.1319V4.25ZM12 18.25H7.86809V19.75H12V18.25ZM16.803 8.05458L6.39169 14.6799L7.197 15.9454L17.6083 9.32007L16.803 8.05458ZM12.5303 18.4697L11.0303 16.9697L9.96964 18.0303L11.4696 19.5303L12.5303 18.4697ZM11.4696 18.4697L9.96964 19.9697L11.0303 21.0303L12.5303 19.5303L11.4696 18.4697ZM7.86809 18.25C6.61754 18.25 6.14195 16.6168 7.197 15.9454L6.39169 14.6799C4.07059 16.157 5.11685 19.75 7.86809 19.75V18.25ZM16.1319 5.75C17.3824 5.75 17.858 7.38318 16.803 8.05458L17.6083 9.32007C19.9294 7.843 18.8831 4.25 16.1319 4.25V5.75Z" fill={color} opacity="0.5"/>
	<Path d="M18.5 17.5H18.509" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<Path d="M5.49072 5.5H5.49972" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</Svg>;

export default LineDuotoneRouting2;
