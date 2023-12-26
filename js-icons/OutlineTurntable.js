import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineTurntable = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.93159 1.25H14.0684C15.8959 1.24997 17.3621 1.24995 18.5134 1.44343C19.7208 1.64634 20.6782 2.07614 21.4141 2.99595C22.1306 3.89162 22.4467 5.0148 22.5993 6.43344C22.75 7.83511 22.75 9.63578 22.75 11.9532V12.0468C22.75 14.3642 22.75 16.1649 22.5993 17.5666C22.4467 18.9852 22.1306 20.1084 21.4141 21.0041C20.6782 21.9239 19.7208 22.3537 18.5134 22.5566C17.3621 22.7501 15.8959 22.75 14.0684 22.75H9.9316C8.10414 22.75 6.63791 22.7501 5.48661 22.5566C4.27923 22.3537 3.32177 21.9239 2.58592 21.0041C1.86938 20.1084 1.55333 18.9852 1.40075 17.5666C1.24999 16.1649 1.24999 14.3642 1.25 12.0468V11.9532C1.24999 9.63578 1.24999 7.83511 1.40075 6.43344C1.55333 5.0148 1.86938 3.89162 2.58592 2.99595C3.32177 2.07614 4.27923 1.64634 5.48661 1.44343C6.63791 1.24995 8.10413 1.24997 9.93159 1.25ZM5.73521 2.92269C4.76409 3.08589 4.19295 3.38833 3.75722 3.93299C3.30219 4.50178 3.03245 5.28935 2.89215 6.59385C2.75103 7.90589 2.75 9.62594 2.75 12C2.75 14.3741 2.75103 16.0941 2.89215 17.4062C3.03245 18.7107 3.30219 19.4982 3.75722 20.067C4.19295 20.6117 4.76409 20.9141 5.73521 21.0773C6.7481 21.2475 8.08808 21.25 10 21.25H14C15.9119 21.25 17.2519 21.2475 18.2648 21.0773C19.2359 20.9141 19.807 20.6117 20.2428 20.067C20.6978 19.4982 20.9675 18.7107 21.1079 17.4062C21.249 16.0941 21.25 14.3741 21.25 12C21.25 9.62594 21.249 7.90589 21.1079 6.59385C20.9675 5.28935 20.6978 4.50178 20.2428 3.93299C19.807 3.38833 19.2359 3.08589 18.2648 2.92269C17.2519 2.75246 15.9119 2.75 14 2.75H10C8.08808 2.75 6.7481 2.75246 5.73521 2.92269ZM14.75 9C14.75 7.75736 15.7574 6.75 17 6.75C18.2426 6.75 19.25 7.75736 19.25 9C19.25 9.97967 18.6239 10.8131 17.75 11.122V14.7639C17.75 15.8056 17.1615 16.7578 16.2298 17.2236L15.3354 17.6708C14.9649 17.8561 14.5144 17.7059 14.3292 17.3354C14.1439 16.9649 14.2941 16.5144 14.6646 16.3292L15.559 15.882C15.9825 15.6702 16.25 15.2374 16.25 14.7639V11.122C15.3761 10.8131 14.75 9.97967 14.75 9ZM17 8.25C16.5858 8.25 16.25 8.58579 16.25 9C16.25 9.41422 16.5858 9.75 17 9.75C17.4142 9.75 17.75 9.41422 17.75 9C17.75 8.58579 17.4142 8.25 17 8.25ZM5.25 12C5.25 9.37665 7.37665 7.25 10 7.25C12.6234 7.25 14.75 9.37665 14.75 12C14.75 14.6234 12.6234 16.75 10 16.75C7.37665 16.75 5.25 14.6234 5.25 12ZM10 8.75C8.20507 8.75 6.75 10.2051 6.75 12C6.75 13.7949 8.20507 15.25 10 15.25C11.7949 15.25 13.25 13.7949 13.25 12C13.25 10.2051 11.7949 8.75 10 8.75Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineTurntable;
