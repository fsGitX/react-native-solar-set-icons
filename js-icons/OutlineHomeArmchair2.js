import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineHomeArmchair2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.7487 3.25H13.2513C14.339 3.24998 15.2274 3.24996 15.9287 3.33976C16.659 3.43326 17.2991 3.63569 17.8143 4.12637C18.3347 4.62195 18.5542 5.24606 18.6548 5.95854C18.7501 6.63353 18.75 7.48576 18.75 8.51621V9.57285C19.1507 9.36319 19.6072 9.25 20.0731 9.25C21.7812 9.25 23.2438 10.8073 22.6024 12.5265L21.483 15.5271C21.4752 15.548 21.4675 15.5687 21.4599 15.589C21.2871 16.0524 21.1687 16.3699 21.0076 16.6478C20.5101 17.5062 19.6991 18.1446 18.75 18.4812V20C18.75 20.4142 18.4142 20.75 18 20.75C17.5858 20.75 17.25 20.4142 17.25 20V18.7457C17.0624 18.7501 16.8493 18.75 16.5944 18.75L6.87982 18.75C6.82395 18.75 6.78814 18.75 6.7548 18.7495C6.7532 18.7495 6.7516 18.7495 6.75 18.7495V20C6.75 20.4142 6.41421 20.75 6 20.75C5.58579 20.75 5.25 20.4142 5.25 20V18.6667C5.25 18.6052 5.25739 18.5455 5.27132 18.4884C4.13011 18.0899 3.18503 17.257 2.74387 16.1336C2.73219 16.1038 2.7203 16.0719 2.70301 16.0256L1.39759 12.5265C0.756196 10.8073 2.21876 9.25 3.92689 9.25C4.39281 9.25 4.84929 9.36319 5.25 9.57285L5.25 8.51621C5.24997 7.48576 5.24994 6.63353 5.34523 5.95854C5.44581 5.24606 5.66534 4.62195 6.1857 4.12637C6.70091 3.63569 7.34103 3.43326 8.07129 3.33976C8.7726 3.24996 9.66097 3.24998 10.7487 3.25ZM5.25 11.9284V12H5.27904L6.14015 14.122C6.14671 14.1382 6.15327 14.1544 6.15986 14.1707C6.23913 14.367 6.32184 14.5719 6.44862 14.7481C6.73674 15.1486 7.17291 15.412 7.64793 15.5085C7.85479 15.5505 8.07465 15.5503 8.31354 15.55C8.33144 15.55 8.34945 15.55 8.36757 15.55H15.3467C15.3822 15.55 15.4174 15.5501 15.4525 15.5501C15.9136 15.551 16.3443 15.5519 16.7241 15.3953C16.9307 15.3102 17.1228 15.1908 17.2897 15.0401C17.6062 14.7543 17.766 14.3571 17.9201 13.974C17.9325 13.9432 17.9449 13.9125 17.9572 13.882L18.721 12H18.75V11.9284L18.958 11.4159C19.1048 11.0542 19.5273 10.75 20.0731 10.75C20.9934 10.75 21.3868 11.4935 21.197 12.0022L20.0776 15.0028C19.8729 15.5514 19.7994 15.7411 19.7099 15.8956C19.3127 16.5808 18.5512 17.089 17.631 17.2184C17.4188 17.2482 17.1734 17.25 16.5332 17.25H6.88634C6.82206 17.25 6.79738 17.25 6.77582 17.2497C5.53929 17.2323 4.51122 16.5304 4.14008 15.5853C4.13369 15.569 4.12655 15.55 4.10598 15.4948L2.80297 12.0022C2.61319 11.4935 3.0066 10.75 3.92689 10.75C4.47265 10.75 4.89523 11.0542 5.04204 11.4159L5.25 11.9284ZM17.25 11.6357V8.57143C17.25 7.4717 17.2482 6.72607 17.1695 6.16822C17.0943 5.63584 16.9624 5.38646 16.7798 5.21257C16.5921 5.03378 16.315 4.90147 15.7382 4.82761C15.1434 4.75145 14.3516 4.75 13.2 4.75H10.8C9.64841 4.75 8.85662 4.75145 8.2618 4.82761C7.68496 4.90147 7.40792 5.03378 7.22019 5.21258C7.0376 5.38646 6.90566 5.63584 6.8305 6.16822C6.75175 6.72607 6.75 7.4717 6.75 8.57143V11.6357L7.53007 13.558C7.58248 13.6871 7.61281 13.7614 7.63822 13.8168C7.65588 13.8552 7.66438 13.8692 7.66626 13.8721C7.71637 13.9418 7.81143 14.0111 7.94639 14.0385C7.98525 14.0464 8.04106 14.05 8.36757 14.05H15.3467C15.9839 14.05 16.0854 14.0362 16.1526 14.0085C16.2058 13.9866 16.2499 13.958 16.2843 13.9269C16.2854 13.9259 16.3058 13.9103 16.3528 13.8179C16.4063 13.713 16.4656 13.5687 16.5673 13.318L17.25 11.6357Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineHomeArmchair2;
