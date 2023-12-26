import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineBill = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2C22.75 2.41421 22.4142 2.75 22 2.75H20.75V12.27C20.75 12.3228 20.75 12.3749 20.7501 12.4264C20.7507 13.6132 20.7511 14.4386 20.4148 15.1792C20.0785 15.9197 19.4567 16.4628 18.5625 17.2439C18.5238 17.2777 18.4845 17.312 18.4447 17.3468L16.4067 19.1288C15.4977 19.9236 14.762 20.5669 14.111 21.005C13.4333 21.461 12.7697 21.75 12 21.75C11.2303 21.75 10.5668 21.461 9.88903 21.005C9.23796 20.5669 8.50227 19.9236 7.59334 19.1288L5.55529 17.3468C5.51551 17.312 5.47624 17.2777 5.43748 17.2439C4.54328 16.4628 3.92149 15.9197 3.58521 15.1792C3.2489 14.4386 3.24933 13.6132 3.24995 12.4264C3.24997 12.3749 3.25 12.3228 3.25 12.27V2.75H2C1.58579 2.75 1.25 2.41421 1.25 2ZM4.75 2.75V12.27C4.75 13.6768 4.76568 14.1509 4.95099 14.559C5.13634 14.9671 5.48319 15.2912 6.54265 16.2176L8.54265 17.9663C9.49871 18.8023 10.1635 19.3817 10.7265 19.7605C11.2718 20.1275 11.6425 20.25 12 20.25C12.3575 20.25 12.7282 20.1275 13.2735 19.7605C13.8365 19.3817 14.5013 18.8023 15.4573 17.9663L17.4574 16.2176C18.5168 15.2912 18.8637 14.9671 19.049 14.559C19.2343 14.1509 19.25 13.6768 19.25 12.27V2.75H4.75ZM7.75 8C7.75 7.58579 8.08579 7.25 8.5 7.25H15.5C15.9142 7.25 16.25 7.58579 16.25 8C16.25 8.41421 15.9142 8.75 15.5 8.75H8.5C8.08579 8.75 7.75 8.41421 7.75 8ZM7.75 13C7.75 12.5858 8.08579 12.25 8.5 12.25H15.5C15.9142 12.25 16.25 12.5858 16.25 13C16.25 13.4142 15.9142 13.75 15.5 13.75H8.5C8.08579 13.75 7.75 13.4142 7.75 13Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineBill;
