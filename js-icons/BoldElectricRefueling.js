import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldElectricRefueling = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10 2H9C6.17157 2 4.75736 2 3.87868 2.87868C3 3.75736 3 5.17157 3 8V21.25H2C1.58579 21.25 1.25 21.5858 1.25 22C1.25 22.4142 1.58579 22.75 2 22.75H17.25C17.6642 22.75 18 22.4142 18 22C18 21.5858 17.6642 21.25 17.25 21.25H16V17.75H17.5714C17.9462 17.75 18.25 18.0538 18.25 18.4286V18.5C18.25 19.7427 19.2574 20.75 20.5 20.75C21.7426 20.75 22.75 19.7427 22.75 18.5V7.60177C22.75 7.44511 22.75 7.33702 22.7441 7.23161C22.6884 6.24063 22.2422 5.31214 21.5031 4.64962C21.4245 4.57915 21.3401 4.51163 21.2178 4.41378L19.9685 3.41438C19.6451 3.15562 19.1731 3.20806 18.9143 3.53151C18.6556 3.85495 18.708 4.32692 19.0315 4.58568L20.2646 5.57215C20.4091 5.68774 20.4585 5.72768 20.5019 5.76653C20.9453 6.16405 21.2131 6.72114 21.2465 7.31573C21.2497 7.37384 21.25 7.43743 21.25 7.62247V8H20.5C19.6716 8 19 8.67157 19 9.5V11.9189C19 12.5645 19.4131 13.1377 20.0257 13.3419L21.25 13.75V18.5C21.25 18.9142 20.9142 19.25 20.5 19.25C20.0858 19.25 19.75 18.9142 19.75 18.5V18.4286C19.75 17.2254 18.7746 16.25 17.5714 16.25H16V8C16 5.17157 16 3.75736 15.1213 2.87868C14.2426 2 12.8284 2 10 2ZM9.88587 9.35688C10.2411 9.56999 10.3562 10.0307 10.1431 10.3859L9.32464 11.75H11C11.2702 11.75 11.5195 11.8953 11.6527 12.1305C11.7858 12.3656 11.7821 12.6542 11.6431 12.8859L10.1431 15.3859C9.93001 15.7411 9.46931 15.8562 9.11413 15.6431C8.75894 15.43 8.64377 14.9693 8.85688 14.6141L9.67536 13.25H8C7.7298 13.25 7.48048 13.1047 7.34735 12.8695C7.21422 12.6344 7.21786 12.3458 7.35688 12.1141L8.85688 9.61413C9.06999 9.25894 9.53069 9.14377 9.88587 9.35688Z" fill="#1C274C" fillRule="evenodd"/>
</Svg>;

export default BoldElectricRefueling;
