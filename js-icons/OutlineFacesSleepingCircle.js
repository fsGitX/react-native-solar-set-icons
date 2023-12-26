import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineFacesSleepingCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill={color}/>
	<Path d="M20.9207 1.40499C21.1613 1.58965 21.2671 1.90111 21.1885 2.19412L20.1931 5.90926L22.0891 4.81459C22.4478 4.60748 22.9065 4.73039 23.1136 5.0891C23.3207 5.44782 23.1978 5.90652 22.8391 6.11362L19.375 8.11362C19.1123 8.2653 18.7841 8.24379 18.5434 8.05912C18.3028 7.87445 18.197 7.563 18.2756 7.26999L19.271 3.55485L17.375 4.64952C17.0163 4.85663 16.5576 4.73372 16.3505 4.375C16.1434 4.01628 16.2663 3.55759 16.625 3.35048L20.0891 1.35048C20.3518 1.19881 20.68 1.22032 20.9207 1.40499ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 11.5858 21.5858 11.25 22 11.25C22.4142 11.25 22.75 11.5858 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.4142 1.25 12.75 1.58579 12.75 2C12.75 2.41422 12.4142 2.75 12 2.75ZM13.3983 5.125C13.6054 4.76628 14.0641 4.64338 14.4229 4.85048L16.1549 5.85048C16.4176 6.00216 16.5631 6.29715 16.5235 6.5979C16.4839 6.89865 16.267 7.14594 15.974 7.22445L14.9909 7.48786L15.1549 7.58253C15.5136 7.78964 15.6365 8.24833 15.4294 8.60705C15.2223 8.96577 14.7636 9.08868 14.4049 8.88157L12.6729 7.88157C12.4101 7.7299 12.2647 7.43491 12.3043 7.13416C12.3439 6.83341 12.5607 6.58612 12.8537 6.50761L13.8368 6.24419L13.6729 6.14952C13.3141 5.94242 13.1912 5.48372 13.3983 5.125ZM5.99846 10.4424C6.30644 10.1654 6.78064 10.1905 7.05764 10.4985C7.52249 11.0153 8.02255 11.25 8.5 11.25C8.97745 11.25 9.47751 11.0153 9.94236 10.4985C10.2194 10.1905 10.6936 10.1654 11.0015 10.4424C11.3095 10.7194 11.3346 11.1936 11.0576 11.5015C10.3887 12.2453 9.50979 12.75 8.5 12.75C7.49021 12.75 6.61134 12.2453 5.94236 11.5015C5.66537 11.1936 5.69049 10.7194 5.99846 10.4424ZM12.9985 10.4424C13.3064 10.1654 13.7806 10.1905 14.0576 10.4985C14.5225 11.0153 15.0225 11.25 15.5 11.25C15.9775 11.25 16.4775 11.0153 16.9424 10.4985C17.2194 10.1905 17.6936 10.1654 18.0015 10.4424C18.3095 10.7194 18.3346 11.1936 18.0576 11.5015C17.3887 12.2453 16.5098 12.75 15.5 12.75C14.4902 12.75 13.6113 12.2453 12.9424 11.5015C12.6654 11.1936 12.6905 10.7194 12.9985 10.4424Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineFacesSleepingCircle;