import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineCartCross = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.0304 8.96987C11.7375 8.67698 11.2626 8.67698 10.9697 8.96987C10.6768 9.26277 10.6768 9.73764 10.9697 10.0305L11.9394 11.0002L10.9697 11.9699C10.6768 12.2628 10.6768 12.7376 10.9697 13.0305C11.2626 13.3234 11.7375 13.3234 12.0304 13.0305L13 12.0609L13.9697 13.0305C14.2626 13.3234 14.7375 13.3234 15.0304 13.0305C15.3232 12.7376 15.3232 12.2628 15.0304 11.9699L14.0607 11.0002L15.0304 10.0305C15.3232 9.73764 15.3232 9.26277 15.0304 8.96987C14.7375 8.67698 14.2626 8.67698 13.9697 8.96987L13 9.93954L12.0304 8.96987Z" fill={color}/>
	<Path d="M1.29248 2.75145C1.42986 2.36068 1.85801 2.15527 2.24878 2.29266L2.55018 2.39862C3.16671 2.61536 3.69034 2.79943 4.10243 3.00163C4.54306 3.21784 4.92091 3.48417 5.20509 3.90003C5.48707 4.31268 5.60349 4.76539 5.65722 5.26177C5.66106 5.29731 5.66462 5.33345 5.6679 5.3702L17.1201 5.3702C17.9387 5.37019 18.7733 5.37018 19.4604 5.44698C19.8101 5.48608 20.1567 5.54838 20.4632 5.65607C20.7637 5.76166 21.094 5.93456 21.329 6.23998C21.7108 6.73637 21.7776 7.31438 21.7414 7.90058C21.7069 8.4587 21.5684 9.15259 21.4037 9.97747L21.3933 10.0298L21.3923 10.0344L20.8834 12.5036C20.7337 13.23 20.6078 13.8413 20.4453 14.3234C20.2729 14.8349 20.0339 15.2844 19.6074 15.632C19.1809 15.9796 18.6923 16.1229 18.1566 16.1884C17.6516 16.2502 17.0276 16.2502 16.286 16.2502L10.8802 16.2502C9.53446 16.2502 8.44461 16.2502 7.58638 16.1285C6.69014 16.0015 5.93733 15.7288 5.34347 15.1024C4.79724 14.5263 4.50511 13.9146 4.35878 13.0603C4.22173 12.2601 4.2081 11.2127 4.2081 9.7602V7.03856C4.2081 6.29862 4.20708 5.8034 4.16593 5.42319C4.1266 5.05984 4.05689 4.87842 3.96663 4.74634C3.87857 4.61747 3.7449 4.49704 3.44168 4.34826C3.11883 4.18985 2.68008 4.0343 2.01247 3.79958L1.75126 3.70775C1.3605 3.57036 1.15509 3.14221 1.29248 2.75145ZM5.70809 6.8702L5.7081 9.7602C5.7081 11.2492 5.72609 12.1581 5.83725 12.8071C5.93915 13.402 6.11184 13.7327 6.432 14.0704C6.70455 14.3578 7.08217 14.542 7.79698 14.6434C8.53765 14.7484 9.52071 14.7502 10.9375 14.7502H16.2404C17.0397 14.7502 17.5712 14.7489 17.9744 14.6996C18.3571 14.6527 18.5346 14.5712 18.6598 14.4692C18.7851 14.3672 18.9007 14.2097 19.0238 13.8444C19.1535 13.4595 19.2621 12.9391 19.4235 12.1563L19.9223 9.73615L19.9227 9.73393C20.1004 8.844 20.2169 8.25174 20.2442 7.80818C20.2702 7.38672 20.2041 7.23952 20.1427 7.15811C20.1365 7.15284 20.093 7.11589 19.9659 7.07125C19.8105 7.01664 19.5893 6.97074 19.2937 6.9377C18.6989 6.87121 17.9452 6.8702 17.0889 6.8702H5.70809Z" fill={color} fillRule="evenodd"/>
	<Path d="M5.25002 19.5002C5.25002 20.7428 6.25738 21.7502 7.50002 21.7502C8.74266 21.7502 9.75002 20.7428 9.75002 19.5002C9.75002 18.2576 8.74266 17.2502 7.50002 17.2502C6.25738 17.2502 5.25002 18.2576 5.25002 19.5002ZM7.50002 20.2502C7.08581 20.2502 6.75002 19.9144 6.75002 19.5002C6.75002 19.086 7.08581 18.7502 7.50002 18.7502C7.91424 18.7502 8.25002 19.086 8.25002 19.5002C8.25002 19.9144 7.91424 20.2502 7.50002 20.2502Z" fill={color} fillRule="evenodd"/>
	<Path d="M14.25 19.5003C14.25 20.7429 15.2574 21.7503 16.5 21.7503C17.7427 21.7503 18.75 20.7429 18.75 19.5003C18.75 18.2576 17.7427 17.2503 16.5 17.2503C15.2574 17.2503 14.25 18.2576 14.25 19.5003ZM16.5 20.2503C16.0858 20.2503 15.75 19.9145 15.75 19.5003C15.75 19.0861 16.0858 18.7503 16.5 18.7503C16.9142 18.7503 17.25 19.0861 17.25 19.5003C17.25 19.9145 16.9142 20.2503 16.5 20.2503Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineCartCross;
