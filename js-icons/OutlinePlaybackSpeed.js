import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlinePlaybackSpeed = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C11.1785 22.75 10.3776 22.6577 9.60751 22.4826C9.2036 22.3908 8.95061 21.9889 9.04244 21.585C9.13427 21.1811 9.53614 20.9281 9.94005 21.02C10.6018 21.1704 11.2911 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C11.2911 2.75 10.6018 2.8296 9.94005 2.98004C9.53614 3.07187 9.13427 2.81888 9.04244 2.41497C8.95061 2.01106 9.2036 1.60919 9.60751 1.51737C10.3776 1.34229 11.1785 1.25 12 1.25Z" fill={color}/>
	<Path d="M3.13198 16.6863C3.4825 16.4656 3.94557 16.5708 4.16627 16.9213C4.90623 18.0965 5.90349 19.0938 7.07868 19.8337C7.42919 20.0544 7.53443 20.5175 7.31372 20.868C7.09302 21.2185 6.62995 21.3238 6.27944 21.1031C4.91436 20.2435 3.75646 19.0856 2.89693 17.7206C2.67623 17.37 2.78146 16.907 3.13198 16.6863Z" fill={color}/>
	<Path d="M2.98004 9.94005C3.07187 9.53614 2.81888 9.13427 2.41497 9.04244C2.01106 8.95061 1.60919 9.2036 1.51737 9.60751C1.34229 10.3776 1.25 11.1785 1.25 12C1.25 12.8215 1.34229 13.6224 1.51737 14.3925C1.60919 14.7964 2.01106 15.0494 2.41497 14.9576C2.81888 14.8657 3.07187 14.4639 2.98004 14.06C2.8296 13.3982 2.75 12.7089 2.75 12C2.75 11.2911 2.8296 10.6018 2.98004 9.94005Z" fill={color}/>
	<Path d="M7.31372 3.13198C7.53443 3.4825 7.42919 3.94557 7.07868 4.16627C5.90349 4.90623 4.90623 5.90349 4.16627 7.07868C3.94556 7.42919 3.4825 7.53443 3.13198 7.31372C2.78146 7.09302 2.67623 6.62995 2.89693 6.27944C3.75646 4.91436 4.91436 3.75646 6.27943 2.89693C6.62995 2.67623 7.09302 2.78146 7.31372 3.13198Z" fill={color}/>
	<Path d="M8.25 9.21272C8.25 7.79022 9.74622 6.72352 11.0748 7.50792L15.795 10.2948C17.0683 11.0466 17.0683 12.9526 15.795 13.7044L11.0748 16.4912C9.74622 17.2756 8.25 16.2089 8.25 14.7864V9.21272ZM9.95947 8.80455C9.84615 8.87541 9.75 9.01424 9.75 9.21272V14.7864C9.75 14.9849 9.84615 15.1237 9.95947 15.1946C10.0691 15.2632 10.1919 15.2706 10.3122 15.1995L15.0324 12.4127C15.165 12.3344 15.25 12.1848 15.25 11.9996C15.25 11.8144 15.165 11.6648 15.0324 11.5864L10.3122 8.79959C10.1919 8.72855 10.0691 8.73597 9.95947 8.80455Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlinePlaybackSpeed;
