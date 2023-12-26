import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearLikeHeartBroken = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 5.50088C7.50016 0.825708 2 4.27441 2 9.13734C2 14.0003 6.01943 16.5917 8.96173 18.9111C10 19.7296 11 20.5002 12 20.5002M12 5.50088C16.4998 0.825708 22 4.27441 22 9.13734C22 14.0003 17.9806 16.5917 15.0383 18.9111C14 19.7296 13 20.5002 12 20.5002M12 5.50088L10.5 8.50024L14 11.0002L11 14.5002L13 16.5002L12 20.5002" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearLikeHeartBroken;
