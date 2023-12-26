import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldMoneyBillCross = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.33333 2H17.6667C17.9762 2 18.131 2 18.2615 2.01198C19.7118 2.14511 20.8617 3.35155 20.9886 4.87321C21 5.01012 21 5.1725 21 5.49727V20.2598C21 21.1323 19.9413 21.5026 19.4423 20.8045C19.0962 20.3203 18.4038 20.3203 18.0577 20.8045L17.625 21.4098C17.0625 22.1967 15.9375 22.1967 15.375 21.4098C14.8125 20.623 13.6875 20.623 13.125 21.4098C12.5625 22.1967 11.4375 22.1967 10.875 21.4098C10.3125 20.623 9.1875 20.623 8.625 21.4098C8.0625 22.1967 6.9375 22.1967 6.375 21.4098L5.94231 20.8045C5.59615 20.3203 4.90385 20.3203 4.55769 20.8045C4.05871 21.5026 3 21.1323 3 20.2598V5.49727C3 5.1725 3 5.01012 3.01142 4.87321C3.1383 3.35155 4.28819 2.14511 5.73853 2.01198C5.86902 2 6.02379 2 6.33333 2ZM10.5303 7.46967C10.2375 7.17678 9.76258 7.17678 9.46969 7.46967C9.17679 7.76256 9.17679 8.23744 9.46969 8.53033L10.9394 10L9.4697 11.4697C9.17681 11.7626 9.17681 12.2374 9.4697 12.5303C9.7626 12.8232 10.2375 12.8232 10.5304 12.5303L12 11.0607L13.4697 12.5303C13.7626 12.8232 14.2374 12.8232 14.5303 12.5303C14.8232 12.2374 14.8232 11.7625 14.5303 11.4697L13.0607 10L14.5303 8.53035C14.8232 8.23745 14.8232 7.76258 14.5303 7.46969C14.2375 7.17679 13.7626 7.17679 13.4697 7.46969L12 8.93935L10.5303 7.46967ZM7.5 14.75C7.08579 14.75 6.75 15.0858 6.75 15.5C6.75 15.9142 7.08579 16.25 7.5 16.25H16.5C16.9142 16.25 17.25 15.9142 17.25 15.5C17.25 15.0858 16.9142 14.75 16.5 14.75H7.5Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldMoneyBillCross;
