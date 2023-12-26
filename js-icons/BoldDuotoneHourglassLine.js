import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneHourglassLine = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 2C7.86697 2 5.80046 2 5.19825 3.29918C5.14649 3.41086 5.10282 3.52686 5.06765 3.6461C4.65857 5.0333 6.11981 6.64111 9.0423 9.85674L11 12H13L14.9577 9.85674C17.8802 6.64111 19.3414 5.0333 18.9323 3.6461C18.8972 3.52686 18.8535 3.41086 18.8017 3.29918C18.1995 2 16.133 2 12 2ZM10 4.75C9.58579 4.75 9.25 5.08579 9.25 5.5C9.25 5.91421 9.58579 6.25 10 6.25H14C14.4142 6.25 14.75 5.91421 14.75 5.5C14.75 5.08579 14.4142 4.75 14 4.75H10Z" fill={color} fillRule="evenodd"/>
	<Path d="M5.19825 20.7008C5.80046 22 7.86697 22 12 22C16.133 22 18.1995 22 18.8017 20.7008C18.8535 20.5891 18.8972 20.4731 18.9323 20.3539C19.3414 18.9667 17.8802 17.3589 14.9577 14.1433L13 12H11L9.0423 14.1433C6.11981 17.3589 4.65857 18.9667 5.06765 20.3539C5.10282 20.4731 5.14649 20.5891 5.19825 20.7008Z" fill={color} opacity="0.5"/>
	<Path d="M10 17.75C9.58579 17.75 9.25 18.0858 9.25 18.5C9.25 18.9142 9.58579 19.25 10 19.25H14C14.4142 19.25 14.75 18.9142 14.75 18.5C14.75 18.0858 14.4142 17.75 14 17.75H10Z" fill={color}/>
</Svg>;

export default BoldDuotoneHourglassLine;