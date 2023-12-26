import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineSchoolSquareAcademicCap = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.46435 2.82057C11.0871 2.05981 12.9128 2.05981 14.5356 2.82057L21.2268 5.95756C22.2791 6.4509 22.75 7.52222 22.75 8.50002C22.75 9.47782 22.2791 10.5491 21.2268 11.0425L19.75 11.7348V16.6254C19.75 17.8785 19.1217 19.0883 17.978 19.7217C17.2263 20.138 16.2384 20.6391 15.1988 21.038C14.1715 21.4321 13.0339 21.75 12 21.75C10.9661 21.75 9.82851 21.4321 8.80116 21.038C7.76158 20.6391 6.77371 20.138 6.02198 19.7217C4.87826 19.0883 4.25 17.8785 4.25 16.6254V11.7348L2.77323 11.0424L2.75 11.0314V14C2.75 14.4142 2.41421 14.75 2 14.75C1.58579 14.75 1.25 14.4142 1.25 14V8.5C1.25 7.5222 1.72095 6.45085 2.77324 5.95752L9.46435 2.82057ZM5.75 12.438V16.6254C5.75 17.3884 6.12875 18.0661 6.74868 18.4095C7.46533 18.8063 8.38678 19.2724 9.33844 19.6375C10.3023 20.0073 11.2379 20.25 12 20.25C12.7621 20.25 13.6977 20.0073 14.6616 19.6375C15.6132 19.2724 16.5347 18.8063 17.2513 18.4095C17.8713 18.0661 18.25 17.3884 18.25 16.6254V12.4381L14.5357 14.1794C12.9129 14.9402 11.0872 14.9402 9.46444 14.1794L5.75 12.438ZM3.40996 9.68429C3.00679 9.49527 2.75 9.04438 2.75 8.49998C2.75 7.95557 3.00679 7.50469 3.40997 7.31567L10.1011 4.17872C11.3204 3.60709 12.6795 3.60709 13.8988 4.17873L20.59 7.31571C20.9932 7.50473 21.25 7.95562 21.25 8.50002C21.25 9.04443 20.9932 9.49531 20.59 9.68433L13.8989 12.8213C12.6796 13.3929 11.3205 13.3929 10.1012 12.8213L3.40996 9.68429Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineSchoolSquareAcademicCap;
