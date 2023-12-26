import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneDesignPaintRoller = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6 4.5C6 3.56538 6 3.09808 6.20096 2.75C6.33261 2.52197 6.52197 2.33261 6.75 2.20096C7.09808 2 7.56538 2 8.5 2H15.5C16.4346 2 16.9019 2 17.25 2.20096C17.478 2.33261 17.6674 2.52197 17.799 2.75C18 3.09808 18 3.56538 18 4.5C18 5.43462 18 5.90192 17.799 6.25C17.6674 6.47803 17.478 6.66739 17.25 6.79904C16.9019 7 16.4346 7 15.5 7H8.5C7.56538 7 7.09808 7 6.75 6.79904C6.52197 6.66739 6.33261 6.47803 6.20096 6.25C6 5.90192 6 5.43462 6 4.5Z" fill={color}/>
	<Path d="M10 16V20C10 20.9428 10 21.4142 10.2929 21.7071C10.5858 22 11.0572 22 12 22C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20V16C14 15.0572 14 14.5858 13.7071 14.2929C13.4142 14 12.9428 14 12 14C11.0572 14 10.5858 14 10.2929 14.2929C10 14.5858 10 15.0572 10 16Z" fill={color}/>
	<Path d="M19.0451 5.25C19.4997 5.25 19.8049 5.25037 20.0414 5.26579C20.2716 5.2808 20.3841 5.30776 20.4581 5.3369C20.7808 5.46395 21.0362 5.71937 21.1633 6.04208C21.1924 6.11609 21.2194 6.22858 21.2344 6.45878C21.2498 6.6953 21.2502 7.00044 21.2502 7.4551C21.2502 8.29243 21.2396 8.52185 21.1788 8.69392C21.0745 8.98918 20.8632 9.23455 20.5867 9.38148C20.4256 9.4671 20.2002 9.5116 19.3722 9.63581L15.2488 10.2543C14.4761 10.3702 13.8275 10.4675 13.315 10.6116C12.772 10.7643 12.2915 10.9923 11.9164 11.4278C11.3356 12.1023 11.2719 12.9787 11.255 13.9875C11.2549 13.9945 11.2549 14.0015 11.2549 14.0085C11.4643 14 11.7098 14 12 14C12.2947 14 12.5433 14 12.7548 14.0089C12.7728 12.9462 12.8717 12.6172 13.053 12.4067C13.1625 12.2796 13.3305 12.1654 13.7211 12.0556C14.132 11.94 14.6863 11.8555 15.5181 11.7307L19.7139 11.1014C20.3646 11.0044 20.8715 10.9288 21.2905 10.7061C21.8989 10.3829 22.3638 9.84304 22.5932 9.19346C22.7512 8.74599 22.7508 8.23353 22.7503 7.57559L22.7502 7.43099C22.7502 7.00662 22.7502 6.65233 22.7312 6.3612C22.7115 6.05823 22.6689 5.77171 22.559 5.49258C22.2795 4.78261 21.7176 4.22069 21.0076 3.94117C20.7285 3.83128 20.442 3.78872 20.139 3.76897C19.8478 3.74999 19.4936 3.74999 19.0692 3.75H18.0002V5.25H19.0451Z" fill={color} opacity="0.5"/>
	<Path d="M4.75 4.5C4.75 4.08579 5.08579 3.75 5.5 3.75H6V5.25H5.5C5.08579 5.25 4.75 4.91421 4.75 4.5Z" fill={color} fillRule="evenodd" opacity="0.5"/>
</Svg>;

export default BoldDuotoneDesignPaintRoller;