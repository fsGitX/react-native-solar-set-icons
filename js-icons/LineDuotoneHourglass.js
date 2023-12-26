import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneHourglass = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.9577 9.07107L12 12L9.0423 9.07107L9.0423 9.07107C6.11981 6.177 4.65857 4.72997 5.06765 3.48149C5.10282 3.37417 5.14649 3.26977 5.19825 3.16926C5.80046 2 7.86697 2 12 2C16.133 2 18.1995 2 18.8017 3.16926C18.8535 3.26977 18.8972 3.37417 18.9323 3.48149C19.3414 4.72997 17.8802 6.177 14.9577 9.07107Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M9.0423 14.9289L12 12L14.9577 14.9289C17.8802 17.823 19.3414 19.27 18.9323 20.5185C18.8972 20.6258 18.8535 20.7302 18.8017 20.8307C18.1995 22 16.133 22 12 22C7.86697 22 5.80046 22 5.19825 20.8307C5.14649 20.7302 5.10282 20.6258 5.06765 20.5185C4.65857 19.27 6.11981 17.823 9.04229 14.9289L9.0423 14.9289Z" opacity="0.5" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneHourglass;
