import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldElectronicGamepadMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M15.0005 3.25C15.4147 3.25 15.7505 3.58579 15.7505 4V5C15.7505 5.9665 14.967 6.75 14.0005 6.75H13.0005C12.8624 6.75 12.7505 6.86193 12.7505 7V8H13.1721C15.7112 8 16.9807 8 17.9568 8.61367C18.2038 8.76898 18.4331 8.95085 18.6405 9.15603C19.4603 9.96679 19.7493 11.203 20.3272 13.6753L21.3496 18.0491C21.7091 19.5866 20.7537 21.1243 19.216 21.483C17.9193 21.7856 16.5855 21.1527 15.9998 19.9569L15.8792 19.7106C15.3414 18.6127 14.2255 17.9167 13.003 17.9167H10.998C9.7755 17.9167 8.6596 18.6127 8.12184 19.7106L8.00121 19.9569C7.41551 21.1527 6.08168 21.7856 4.78499 21.483C3.24734 21.1243 2.29194 19.5866 2.65136 18.0491L3.6738 13.6753C4.25175 11.203 4.54073 9.96679 5.36047 9.15603C5.56793 8.95085 5.79722 8.76898 6.04424 8.61367C7.02032 8 8.28983 8 10.8288 8H11.2505V7C11.2505 6.0335 12.034 5.25 13.0005 5.25H14.0005C14.1386 5.25 14.2505 5.13807 14.2505 5V4C14.2505 3.58579 14.5863 3.25 15.0005 3.25ZM16.0005 12C16.0005 12.5523 15.5528 13 15.0005 13C14.4482 13 14.0005 12.5523 14.0005 12C14.0005 11.4477 14.4482 11 15.0005 11C15.5528 11 16.0005 11.4477 16.0005 12ZM8.50049 11.25C8.9147 11.25 9.25049 11.5858 9.25049 12V12.75H10.0005C10.4147 12.75 10.7505 13.0858 10.7505 13.5C10.7505 13.9142 10.4147 14.25 10.0005 14.25H9.25049V15C9.25049 15.4142 8.9147 15.75 8.50049 15.75C8.08627 15.75 7.75049 15.4142 7.75049 15V14.25H7.00049C6.58627 14.25 6.25049 13.9142 6.25049 13.5C6.25049 13.0858 6.58627 12.75 7.00049 12.75H7.75049V12C7.75049 11.5858 8.08627 11.25 8.50049 11.25ZM17.0005 15.5C17.5528 15.5 18.0005 15.0523 18.0005 14.5C18.0005 13.9477 17.5528 13.5 17.0005 13.5C16.4482 13.5 16.0005 13.9477 16.0005 14.5C16.0005 15.0523 16.4482 15.5 17.0005 15.5Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldElectronicGamepadMinimalistic;
