import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineMonitorCamera = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.9506 1.25H16.0494C16.7142 1.24996 17.2871 1.24993 17.7458 1.31161C18.2375 1.37771 18.7087 1.52677 19.091 1.90901C19.3266 2.14461 19.4736 2.41402 19.5672 2.70117L20.3269 2.38462C20.3406 2.37892 20.3543 2.37322 20.368 2.36751C20.6449 2.25201 20.9246 2.13541 21.1637 2.07488C21.4289 2.00773 21.8212 1.96185 22.1934 2.20994C22.5655 2.45803 22.6741 2.83784 22.7141 3.10851C22.7502 3.3525 22.7501 3.65545 22.75 3.95554C22.75 3.97037 22.75 3.98519 22.75 4V6C22.75 6.01481 22.75 6.02964 22.75 6.04447C22.7501 6.34456 22.7502 6.64751 22.7141 6.8915C22.6741 7.16217 22.5655 7.54198 22.1934 7.79007C21.8212 8.03815 21.4289 7.99227 21.1637 7.92513C20.9245 7.8646 20.6449 7.748 20.368 7.63249C20.3543 7.62679 20.3406 7.62108 20.3269 7.61539L19.5672 7.29884C19.4736 7.58599 19.3266 7.8554 19.091 8.09099C18.7087 8.47324 18.2375 8.6223 17.7458 8.6884C17.2871 8.75007 16.7142 8.75004 16.0494 8.75001H14.9506C14.2858 8.75004 13.7129 8.75007 13.2542 8.6884C12.7625 8.6223 12.2913 8.47324 11.909 8.09099C11.5268 7.70875 11.3777 7.23748 11.3116 6.74585C11.2499 6.2871 11.25 5.71424 11.25 5.04937V4.95064C11.25 4.28577 11.2499 3.71291 11.3116 3.25416C11.3777 2.76252 11.5268 2.29126 11.909 1.90901C12.2913 1.52677 12.7625 1.37771 13.2542 1.31161C13.7129 1.24993 14.2858 1.24996 14.9506 1.25ZM19.75 5.75L20.9038 6.23077C21.0388 6.28701 21.1505 6.33348 21.248 6.37205C21.25 6.26715 21.25 6.14621 21.25 6V4C21.25 3.85379 21.25 3.73286 21.248 3.62796C21.1505 3.66652 21.0388 3.713 20.9038 3.76923L19.75 4.25V4.86552C19.75 4.89372 19.75 4.92209 19.75 4.95064V5.04937C19.75 5.07791 19.75 5.10628 19.75 5.13448V5.75ZM18.25 5C18.25 4.27169 18.2484 3.80091 18.2018 3.45403C18.158 3.12873 18.0874 3.02677 18.0303 2.96967C17.9732 2.91258 17.8713 2.84197 17.546 2.79823C17.1991 2.7516 16.7283 2.75 16 2.75H15C14.2717 2.75 13.8009 2.7516 13.454 2.79823C13.1287 2.84197 13.0268 2.91258 12.9697 2.96967C12.9126 3.02677 12.842 3.12873 12.7982 3.45403C12.7516 3.80091 12.75 4.27169 12.75 5C12.75 5.72831 12.7516 6.1991 12.7982 6.54598C12.842 6.87128 12.9126 6.97324 12.9697 7.03033C13.0268 7.08743 13.1287 7.15804 13.454 7.20177C13.8009 7.24841 14.2717 7.25 15 7.25H16C16.7283 7.25 17.1991 7.24841 17.546 7.20177C17.8713 7.15804 17.9732 7.08743 18.0303 7.03033C18.0874 6.97324 18.158 6.87128 18.2018 6.54598C18.2484 6.1991 18.25 5.72831 18.25 5ZM9.45109 1.25L9.5 1.25C9.91421 1.25 10.25 1.58579 10.25 2C10.25 2.41422 9.91421 2.75 9.5 2.75C7.83789 2.75 6.65724 2.75123 5.75133 2.85831C4.86197 2.96344 4.33563 3.16158 3.93822 3.48772C3.77366 3.62277 3.62277 3.77366 3.48772 3.93823C3.16158 4.33563 2.96344 4.86197 2.85831 5.75133C2.75123 6.65725 2.75 7.83789 2.75 9.5V11C2.75 11.459 2.75016 11.8736 2.75371 12.25H21.2463C21.2498 11.8736 21.25 11.459 21.25 11V10C21.25 9.58579 21.5858 9.25 22 9.25C22.4142 9.25 22.75 9.58579 22.75 10V11.0549C22.75 11.7174 22.75 12.3176 22.7368 12.8591C22.7455 12.9047 22.75 12.9518 22.75 13C22.75 13.0641 22.7419 13.1264 22.7268 13.1858C22.7103 13.6299 22.682 14.0312 22.6335 14.3918C22.5125 15.2919 22.2536 16.0497 21.6517 16.6517C21.0497 17.2536 20.2919 17.5125 19.3918 17.6335C18.5248 17.75 17.4225 17.75 16.0549 17.75H12.75V21.25H16C16.4142 21.25 16.75 21.5858 16.75 22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22C7.25 21.5858 7.58579 21.25 8 21.25H11.25V17.75H7.94513C6.57754 17.75 5.47522 17.75 4.60825 17.6335C3.70814 17.5125 2.95027 17.2536 2.34835 16.6517C1.74643 16.0497 1.48754 15.2919 1.36652 14.3918C1.31805 14.0312 1.28974 13.6299 1.2732 13.1858C1.25805 13.1264 1.25 13.0641 1.25 13C1.25 12.9518 1.25454 12.9047 1.26323 12.859C1.24998 12.3176 1.24999 11.7174 1.25 11.0549L1.25 9.45109C1.24999 7.84883 1.24998 6.57947 1.36868 5.57525C1.49055 4.54428 1.74638 3.69558 2.3282 2.98664C2.52558 2.74612 2.74612 2.52559 2.98663 2.3282C3.69558 1.74639 4.54428 1.49055 5.57525 1.36868C6.57947 1.24998 7.84883 1.24999 9.45109 1.25ZM2.80673 13.75C2.81924 13.9064 2.83451 14.0533 2.85315 14.1919C2.9518 14.9257 3.13225 15.3142 3.40901 15.591C3.68577 15.8678 4.07435 16.0482 4.80812 16.1469C5.56347 16.2484 6.56459 16.25 8 16.25H16C17.4354 16.25 18.4365 16.2484 19.1919 16.1469C19.9257 16.0482 20.3142 15.8678 20.591 15.591C20.8678 15.3142 21.0482 14.9257 21.1469 14.1919C21.1655 14.0533 21.1808 13.9064 21.1933 13.75H2.80673Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineMonitorCamera;
