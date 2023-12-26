import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneCalendarSearch = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.96006 2C7.37758 2 7.71605 2.30996 7.71605 2.69231V4.08883C8.38663 4.07692 9.13829 4.07692 9.98402 4.07692H14.016C14.8617 4.07692 15.6134 4.07692 16.284 4.08883V2.69231C16.284 2.30996 16.6224 2 17.0399 2C17.4575 2 17.7959 2.30996 17.7959 2.69231V4.15008C19.2468 4.25647 20.1992 4.51758 20.899 5.15838C21.5987 5.79917 21.8838 6.67139 22 8V9H2V8C2.11618 6.67139 2.4013 5.79917 3.10104 5.15838C3.80079 4.51758 4.75323 4.25647 6.20406 4.15008V2.69231C6.20406 2.30996 6.54253 2 6.96006 2Z" fill={color}/>
	<Path d="M22 14V12C22 11.161 21.9873 9.66527 21.9744 9H2.00586C1.99296 9.66527 2.00564 11.161 2.00564 12V14C2.00564 17.7712 2.00564 19.6569 3.17688 20.8284C4.34813 22 6.23321 22 10.0034 22H14.0023C17.7724 22 19.6575 22 20.8288 20.8284C22 19.6569 22 17.7712 22 14Z" fill={color} opacity="0.5"/>
	<Path d="M18.75 16.5C17.5074 16.5 16.5 17.5074 16.5 18.75C16.5 19.9926 17.5074 21 18.75 21C19.9926 21 21 19.9926 21 18.75C21 17.5074 19.9926 16.5 18.75 16.5ZM15 18.75C15 16.6789 16.6789 15 18.75 15C20.8211 15 22.5 16.6789 22.5 18.75C22.5 19.5143 22.2713 20.2252 21.8787 20.818L23.2803 22.2197C23.5732 22.5126 23.5732 22.9874 23.2803 23.2803C22.9874 23.5732 22.5126 23.5732 22.2197 23.2803L20.818 21.8787C20.2252 22.2713 19.5143 22.5 18.75 22.5C16.6789 22.5 15 20.8211 15 18.75Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneCalendarSearch;
