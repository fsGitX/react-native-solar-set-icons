import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearVideoMusicNote4 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 18C12 20.2091 10.2091 22 8 22C5.79086 22 4 20.2091 4 18C4 15.7909 5.79086 14 8 14C10.2091 14 12 15.7909 12 18Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M12 18V8" stroke="black" strokeWidth="1.5"/>
	<Path d="M16.1167 3.94199L13.4833 5.25871C13.1184 5.44117 12.9359 5.5324 12.7852 5.64761C12.3949 5.94608 12.128 6.3778 12.0357 6.86043C12 7.04673 12 7.25073 12 7.65871C12 8.6298 12 9.11535 12.1196 9.44543C12.4356 10.3178 13.3101 10.8583 14.2317 10.7508C14.5804 10.7101 15.0147 10.493 15.8833 10.0587L18.5167 8.74199C18.8816 8.55954 19.0641 8.46831 19.2148 8.35309C19.6051 8.05463 19.872 7.62291 19.9643 7.14028C20 6.95397 20 6.74998 20 6.34199C20 5.3709 20 4.88536 19.8804 4.55528C19.5644 3.68288 18.6899 3.14239 17.7683 3.24989C17.4196 3.29057 16.9853 3.50771 16.1167 3.94199Z" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearVideoMusicNote4;
