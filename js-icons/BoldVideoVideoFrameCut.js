import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldVideoVideoFrameCut = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V3.00293H9.49991C8.85162 3.00766 8.2714 3.019 7.75 3.04617V20.9529C8.2714 20.9801 8.85162 20.9914 9.49991 20.9962H11.25V22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22V20.9962H14.5C15.1483 20.9914 15.7286 20.9801 16.25 20.9529V3.04617C15.7286 3.019 15.1483 3.00766 14.5 3.00293H12.75V2ZM12.75 20.9962V20.3333C12.75 19.9191 12.4142 19.5833 12 19.5833C11.5858 19.5833 11.25 19.9191 11.25 20.3333V20.9962H12.75ZM12.75 3.00293V3.66667C12.75 4.08088 12.4142 4.41667 12 4.41667C11.5858 4.41667 11.25 4.08088 11.25 3.66667V3.00293H12.75ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7V10.3333C11.25 10.7475 11.5858 11.0833 12 11.0833C12.4142 11.0833 12.75 10.7475 12.75 10.3333V7ZM12.75 13.6667C12.75 13.2525 12.4142 12.9167 12 12.9167C11.5858 12.9167 11.25 13.2525 11.25 13.6667V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V13.6667ZM6.25 3.20215C5.34931 3.3632 4.69042 3.65227 4.17157 4.17112C3.39994 4.94275 3.13653 6.02414 3.04661 7.75H6.25V3.20215ZM3.00559 9.25C3 9.78349 3 10.3648 3 10.9995V12.9995C3 13.6346 3 14.2163 3.0056 14.75H6.25V9.25H3.00559ZM4.17157 19.828C3.40007 19.0565 3.13662 17.9753 3.04665 16.25H6.25V20.7969C5.34931 20.6359 4.69042 20.3468 4.17157 19.828ZM17.75 7.75V3.20215C18.6507 3.3632 19.3096 3.65227 19.8284 4.17112C20.6001 4.94275 20.8635 6.02414 20.9534 7.75H17.75ZM20.9944 9.25H17.75V14.75H20.9944C21 14.2163 21 13.6346 21 12.9995V10.9995C21 10.3648 21 9.78349 20.9944 9.25ZM17.75 16.25H20.9533C20.8634 17.9753 20.5999 19.0565 19.8284 19.828C19.3096 20.3468 18.6507 20.6359 17.75 20.7969V16.25Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldVideoVideoFrameCut;