import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineTextFormattingLinkSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7.94513 5.25C6.57755 5.24998 5.47521 5.24996 4.60825 5.36652C3.70814 5.48754 2.95027 5.74643 2.34835 6.34835C1.74643 6.95027 1.48754 7.70814 1.36652 8.60825C1.24996 9.47522 1.24998 10.5775 1.25 11.9451V12.0549C1.24998 13.4225 1.24996 14.5248 1.36652 15.3918C1.48754 16.2919 1.74643 17.0497 2.34835 17.6517C2.95027 18.2536 3.70814 18.5125 4.60825 18.6335C5.47522 18.75 6.57754 18.75 7.94512 18.75H8C8.41422 18.75 8.75 18.4142 8.75 18C8.75 17.5858 8.41422 17.25 8 17.25C6.56459 17.25 5.56347 17.2484 4.80812 17.1469C4.07435 17.0482 3.68577 16.8678 3.40901 16.591C3.13225 16.3142 2.9518 15.9257 2.85315 15.1919C2.75159 14.4365 2.75 13.4354 2.75 12C2.75 10.5646 2.75159 9.56347 2.85315 8.80812C2.9518 8.07435 3.13225 7.68577 3.40901 7.40901C3.68577 7.13225 4.07435 6.9518 4.80812 6.85315C5.56347 6.75159 6.56459 6.75 8 6.75C9.43542 6.75 10.4365 6.75159 11.1919 6.85315C11.9257 6.9518 12.3142 7.13225 12.591 7.40901C12.8678 7.68577 13.0482 8.07435 13.1469 8.80812C13.2484 9.56347 13.25 10.5646 13.25 12C13.25 12.4142 13.5858 12.75 14 12.75C14.4142 12.75 14.75 12.4142 14.75 12V11.9451C14.75 10.5775 14.75 9.47522 14.6335 8.60825C14.5125 7.70814 14.2536 6.95027 13.6517 6.34835C13.0497 5.74643 12.2919 5.48754 11.3918 5.36652C10.5248 5.24996 9.42248 5.24998 8.0549 5.25H7.94513Z" fill={color}/>
	<Path d="M16 6.75C17.4354 6.75 18.4365 6.75159 19.1919 6.85315C19.9257 6.9518 20.3142 7.13225 20.591 7.40901C20.8678 7.68577 21.0482 8.07435 21.1469 8.80812C21.2484 9.56347 21.25 10.5646 21.25 12C21.25 13.4354 21.2484 14.4365 21.1469 15.1919C21.0482 15.9257 20.8678 16.3142 20.591 16.591C20.3142 16.8678 19.9257 17.0482 19.1919 17.1469C18.4365 17.2484 17.4354 17.25 16 17.25C14.5646 17.25 13.5635 17.2484 12.8081 17.1469C12.0743 17.0482 11.6858 16.8678 11.409 16.591C11.1322 16.3142 10.9518 15.9257 10.8531 15.1919C10.7516 14.4365 10.75 13.4354 10.75 12C10.75 11.5858 10.4142 11.25 10 11.25C9.58579 11.25 9.25 11.5858 9.25 12L9.25 12.0549C9.24998 13.4225 9.24996 14.5248 9.36652 15.3918C9.48754 16.2919 9.74644 17.0497 10.3484 17.6517C10.9503 18.2536 11.7081 18.5125 12.6083 18.6335C13.4752 18.75 14.5775 18.75 15.9451 18.75H16.0549C17.4225 18.75 18.5248 18.75 19.3918 18.6335C20.2919 18.5125 21.0497 18.2536 21.6517 17.6517C22.2536 17.0497 22.5125 16.2919 22.6335 15.3918C22.75 14.5248 22.75 13.4225 22.75 12.0549V11.9451C22.75 10.5775 22.75 9.47522 22.6335 8.60825C22.5125 7.70814 22.2536 6.95027 21.6517 6.34835C21.0497 5.74643 20.2919 5.48754 19.3918 5.36652C18.5248 5.24996 17.4225 5.24998 16.0549 5.25H16C15.5858 5.25 15.25 5.58579 15.25 6C15.25 6.41422 15.5858 6.75 16 6.75Z" fill={color}/>
</Svg>;

export default OutlineTextFormattingLinkSquare;
