import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineBluetooth = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.9098 2.77415L16.7426 4.07569C17.2829 4.4593 17.7547 4.79434 18.0842 5.10946C18.435 5.44493 18.75 5.87398 18.75 6.45883C18.75 7.04368 18.435 7.47272 18.0842 7.8082C17.7547 8.12332 17.2829 8.45836 16.7426 8.84197L12.2954 12.0001L16.7426 15.1582C17.2829 15.5418 17.7547 15.8769 18.0842 16.192C18.435 16.5274 18.75 16.9565 18.75 17.5413C18.75 18.1262 18.435 18.5552 18.0842 18.8907C17.7547 19.2058 17.2829 19.5409 16.7426 19.9245L14.9098 21.226C14.1803 21.7441 13.5644 22.1815 13.0535 22.4421C12.5333 22.7075 11.8982 22.9071 11.263 22.5822C10.6261 22.2563 10.4191 21.6232 10.3337 21.0463C10.2499 20.4808 10.25 19.7277 10.25 18.837L10.25 13.4406L6.4301 16.1145C6.09076 16.352 5.62312 16.2695 5.38558 15.9302C5.14804 15.5908 5.23057 15.1232 5.56991 14.8857L9.69216 12.0001L5.56991 9.11451C5.23057 8.87698 5.14804 8.40933 5.38558 8.06999C5.62312 7.73065 6.09076 7.64813 6.4301 7.88566L10.25 10.5596V5.22466C10.25 5.20408 10.25 5.18358 10.25 5.16315C10.25 4.27246 10.2499 3.51937 10.3337 2.95389C10.4191 2.37699 10.6261 1.74391 11.263 1.41801C11.8982 1.09303 12.5333 1.29272 13.0535 1.55807C13.5644 1.81866 14.1803 2.25608 14.9098 2.77415ZM11.75 13.4526V18.7755C11.75 19.7444 11.752 20.3844 11.8175 20.8265C11.8492 21.0405 11.8891 21.1531 11.9186 21.2092C11.9316 21.2339 11.94 21.2424 11.9409 21.2434C11.9411 21.2436 11.9413 21.2443 11.9463 21.2468C11.9508 21.2491 11.952 21.2493 11.953 21.2494C11.955 21.2497 11.968 21.2515 11.9965 21.2476C12.0613 21.2386 12.1779 21.2049 12.3719 21.1059C12.7727 20.9015 13.2983 20.5306 14.0911 19.9677L15.829 18.7335C16.4278 18.3083 16.8071 18.0365 17.0474 17.8067C17.1611 17.698 17.2119 17.6274 17.2343 17.5867C17.2502 17.5578 17.2501 17.5479 17.25 17.5423C17.25 17.542 17.25 17.5426 17.25 17.5423C17.25 17.542 17.25 17.5407 17.25 17.5404C17.2501 17.5348 17.2502 17.5249 17.2343 17.4959C17.2119 17.4553 17.1611 17.3847 17.0474 17.276C16.8071 17.0462 16.4278 16.7744 15.829 16.3492L11.75 13.4526ZM11.75 10.5476V5.22466C11.75 4.25579 11.752 3.61576 11.8175 3.17367C11.8492 2.95971 11.8891 2.84705 11.9186 2.79096C11.9316 2.76632 11.94 2.75773 11.9409 2.75681C11.9411 2.7566 11.9413 2.7559 11.9463 2.75338C11.9507 2.75108 11.952 2.75091 11.953 2.75078C11.9529 2.7508 11.9531 2.75077 11.953 2.75078C11.955 2.75048 11.968 2.74867 11.9965 2.75261C12.0613 2.76153 12.1779 2.7953 12.3719 2.89428C12.7727 3.09867 13.2983 3.46957 14.0911 4.03251L15.829 5.26669C16.4278 5.69187 16.8071 5.96364 17.0474 6.19347C17.1611 6.30221 17.2119 6.37282 17.2343 6.41343C17.2502 6.4424 17.2501 6.4523 17.25 6.45784C17.25 6.45752 17.25 6.45819 17.25 6.45784C17.25 6.45815 17.25 6.45947 17.25 6.45982C17.2501 6.46536 17.2502 6.47526 17.2343 6.50423C17.2119 6.54484 17.1611 6.61544 17.0474 6.72419C16.8071 6.95402 16.4278 7.22579 15.829 7.65097L11.75 10.5476Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineBluetooth;