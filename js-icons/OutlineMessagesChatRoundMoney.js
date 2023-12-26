import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineMessagesChatRoundMoney = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 13.4811 3.09753 14.8788 3.7148 16.1181C3.96254 16.6155 4.05794 17.2103 3.90163 17.7945L3.30602 20.0205C3.19663 20.4293 3.57066 20.8034 3.97949 20.694L6.20553 20.0984C6.78973 19.9421 7.38451 20.0375 7.88191 20.2852C9.12121 20.9025 10.5189 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C10.2817 22.75 8.65552 22.3463 7.21315 21.6279C6.99791 21.5207 6.77814 21.4979 6.59324 21.5474L4.3672 22.143C2.84337 22.5507 1.44927 21.1566 1.857 19.6328L2.4526 17.4068C2.50208 17.2219 2.47933 17.0021 2.37213 16.7869C1.65371 15.3445 1.25 13.7183 1.25 12ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V8.01023C13.8388 8.28454 14.75 9.143 14.75 10.3333C14.75 10.7475 14.4142 11.0833 14 11.0833C13.5858 11.0833 13.25 10.7475 13.25 10.3333C13.25 9.9493 12.8242 9.41667 12 9.41667C11.1758 9.41667 10.75 9.9493 10.75 10.3333C10.75 10.7174 11.1758 11.25 12 11.25C13.3849 11.25 14.75 12.2098 14.75 13.6667C14.75 14.857 13.8388 15.7155 12.75 15.9898V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V15.9898C10.1612 15.7155 9.25 14.857 9.25 13.6667C9.25 13.2525 9.58579 12.9167 10 12.9167C10.4142 12.9167 10.75 13.2525 10.75 13.6667C10.75 14.0507 11.1758 14.5833 12 14.5833C12.8242 14.5833 13.25 14.0507 13.25 13.6667C13.25 13.2826 12.8242 12.75 12 12.75C10.6151 12.75 9.25 11.7903 9.25 10.3333C9.25 9.143 10.1612 8.28454 11.25 8.01023V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineMessagesChatRoundMoney;
