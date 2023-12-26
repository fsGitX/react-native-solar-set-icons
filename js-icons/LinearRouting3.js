import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearRouting3 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="5" cy="5" r="3" stroke="black" strokeWidth="1.5"/>
	<circle cx="19" cy="19" r="3" stroke="black" strokeWidth="1.5"/>
	<Path d="M11 4.25C10.5858 4.25 10.25 4.58579 10.25 5C10.25 5.41421 10.5858 5.75 11 5.75V4.25ZM13 19L13.5303 19.5303C13.8232 19.2374 13.8232 18.7626 13.5303 18.4697L13 19ZM17.2056 8.68732L17.6083 9.32007L17.6083 9.32007L17.2056 8.68732ZM6.79434 15.3127L7.197 15.9454L7.197 15.9454L6.79434 15.3127ZM12.0303 16.9697C11.7374 16.6768 11.2625 16.6768 10.9696 16.9697C10.6767 17.2626 10.6767 17.7374 10.9696 18.0303L12.0303 16.9697ZM10.9696 19.9697C10.6767 20.2626 10.6767 20.7374 10.9696 21.0303C11.2625 21.3232 11.7374 21.3232 12.0303 21.0303L10.9696 19.9697ZM16.1319 4.25H11V5.75H16.1319V4.25ZM13 18.25H7.86809V19.75H13V18.25ZM16.803 8.05458L6.39169 14.6799L7.197 15.9454L17.6083 9.32007L16.803 8.05458ZM13.5303 18.4697L12.0303 16.9697L10.9696 18.0303L12.4696 19.5303L13.5303 18.4697ZM12.4696 18.4697L10.9696 19.9697L12.0303 21.0303L13.5303 19.5303L12.4696 18.4697ZM7.86809 18.25C6.61754 18.25 6.14195 16.6168 7.197 15.9454L6.39169 14.6799C4.07059 16.157 5.11685 19.75 7.86809 19.75V18.25ZM16.1319 5.75C17.3824 5.75 17.858 7.38318 16.803 8.05458L17.6083 9.32007C19.9294 7.843 18.8831 4.25 16.1319 4.25V5.75Z" fill={color}/>
</Svg>;

export default LinearRouting3;
