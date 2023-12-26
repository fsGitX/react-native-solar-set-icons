import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneBody = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.0623 22H11.9377C11.1787 22 10.7991 22 10.4691 21.8506C10.1391 21.7013 9.902 21.4222 9.42782 20.8641L7.04634 18.0611C6.58132 17.5138 6.34881 17.2402 6.22802 16.9159C6.10722 16.5917 6.10722 16.2412 6.10722 15.5403V10.2771C6.10722 9.59221 6.10722 9.24977 5.96019 8.94876C5.81316 8.64776 5.53703 8.4249 4.98478 7.97919L4.77744 7.81185C3.59546 6.85789 3.00447 6.38092 3.00003 5.69048C2.99558 5.00004 3.51976 4.5665 4.56811 3.69941C4.7268 3.56815 4.88401 3.44537 5.03581 3.33647C5.60851 2.92561 6.43826 2.47259 7.02213 2.1703C7.45452 1.94644 7.97468 1.94578 8.41603 2.15357L8.68001 2.27785C8.74931 2.31047 8.80836 2.35956 8.85134 2.42026C10.3492 4.53585 13.6508 4.53585 15.1487 2.42026C15.1916 2.35956 15.2507 2.31047 15.32 2.27785L15.584 2.15357C16.0253 1.94578 16.5455 1.94644 16.9779 2.1703C17.5617 2.47259 18.3915 2.92561 18.9642 3.33647C19.116 3.44537 19.2732 3.56815 19.4319 3.69941C20.4802 4.5665 21.0044 5.00004 21 5.69048C20.9955 6.38092 20.4045 6.85789 19.2226 7.81185L19.0152 7.97919C18.463 8.4249 18.1868 8.64776 18.0398 8.94876C17.8928 9.24977 17.8928 9.59221 17.8928 10.2771V15.5403C17.8928 16.2412 17.8928 16.5917 17.772 16.9159C17.6512 17.2402 17.4187 17.5138 16.9537 18.0611L14.5722 20.8641C14.098 21.4222 13.8609 21.7013 13.5309 21.8506C13.2009 22 12.8213 22 12.0623 22Z" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneBody;
